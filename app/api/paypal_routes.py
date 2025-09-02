from flask import Blueprint, request, jsonify
from app.models import db, PayPalOrder
import requests
from requests.auth import HTTPBasicAuth
import os

# PayPal sandbox credentials
PAYPAL_CLIENT_ID = os.environ.get("PAYPAL_CLIENT_ID", "ASV8ryGykbBivFLZigMXifS3DJHxQnStkHo_z8XEoXud-ZAAeYjXuynLIG6ucRC1BykbuYaH95DOVANu")
PAYPAL_SECRET = os.environ.get("PAYPAL_SECRET", "ECKgimlm0QB3pSk_acbb5sdcrN6sx-9hLleQJM-oQh7cv0WTR4HrCeRfyWFrH_mwghCCzv2bI7CUu3Yd")
PAYPAL_BASE = "https://api.sandbox.paypal.com"

paypal_routes = Blueprint('paypal_routes', __name__, url_prefix='/api/paypal')

# Helper to get a fresh access token
def get_access_token():
    url = f"{PAYPAL_BASE}/v1/oauth2/token"
    headers = {"Accept": "application/json", "Accept-Language": "en_US"}
    data = {"grant_type": "client_credentials"}

    response = requests.post(url, headers=headers, data=data,
                             auth=HTTPBasicAuth(PAYPAL_CLIENT_ID, PAYPAL_SECRET))
    res_json = response.json()
    return res_json.get("access_token")

# POST /create-order — anyone can use
@paypal_routes.route('/create-order', methods=['POST'])
def create_order():
    data = request.get_json()
    total = data.get("total")

    token = get_access_token()
    url = f"{PAYPAL_BASE}/v2/checkout/orders"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}"
    }
    payload = {
        "intent": "CAPTURE",
        "purchase_units": [{"amount": {"currency_code": "USD", "value": str(total)}}]
    }

    response = requests.post(url, json=payload, headers=headers)
    order = response.json()

    approve_url = next((link["href"] for link in order.get("links", []) if link["rel"] == "approve"), None)

    return jsonify({
        "id": order.get("id"),
        "approve_url": approve_url,
        "status": order.get("status"),
        "raw": order
    })

# POST /capture-order/<order_id> — capture payment and save to DB
@paypal_routes.route('/capture-order/<order_id>', methods=['POST'])
def capture_order(order_id):
    token = get_access_token()
    url = f"{PAYPAL_BASE}/v2/checkout/orders/{order_id}/capture"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}"
    }

    response = requests.post(url, headers=headers)
    capture_data = response.json()

    # Save to DB if valid
    if "purchase_units" in capture_data:
        purchase = capture_data["purchase_units"][0]["payments"]["captures"][0]
        new_order = PayPalOrder(
            order_id=order_id,
            status=purchase["status"],
            payer_email=capture_data["payer"]["email_address"],
            total=float(purchase["amount"]["value"])
        )
        db.session.add(new_order)
        db.session.commit()

        return jsonify(new_order.to_dict())

    return jsonify(capture_data)