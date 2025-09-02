# from flask import Blueprint, request, jsonify
# from flask_login import login_required, current_user
# from app.models import db
# from app.models.shoppingcart import ShoppingCart
# from app.models.product import Product  # adjust import path if different

# cart_routes = Blueprint("cart", __name__, url_prefix="/api/cart")


# @cart_routes.get("")
# @login_required
# def get_cart():
#     items = ShoppingCart.query.filter_by(user_id=current_user.id).all()
#     return jsonify([i.to_dict() for i in items]), 200


# @cart_routes.post("")
# @login_required
# def add_to_cart():
#     data = request.get_json() or {}
#     product_id = data.get("product_id")
#     quantity = int(data.get("quantity") or 1)

#     if not product_id:
#         return jsonify({"error": "product_id is required"}), 400
#     if quantity < 1:
#         return jsonify({"error": "quantity must be >= 1"}), 400

#     product = Product.query.get(product_id)
#     if not product:
#         return jsonify({"error": "Product not found"}), 404

#     existing = ShoppingCart.query.filter_by(
#         user_id=current_user.id, product_id=product_id
#     ).first()

#     if existing:
#         existing.quantity += quantity
#         item = existing
#     else:
#         item = ShoppingCart(
#             user_id=current_user.id, product_id=product_id, quantity=quantity
#         )
#         db.session.add(item)

#     db.session.commit()
#     return jsonify(item.to_dict()), 201


# @cart_routes.patch("/<int:item_id>")
# @login_required
# def update_cart_item(item_id):
#     data = request.get_json() or {}
#     quantity = data.get("quantity")

#     if quantity is None:
#         return jsonify({"error": "quantity is required"}), 400

#     try:
#         quantity = int(quantity)
#     except ValueError:
#         return jsonify({"error": "quantity must be an integer"}), 400

#     if quantity < 1:
#         return jsonify({"error": "quantity must be >= 1"}), 400

#     item = ShoppingCart.query.filter_by(id=item_id, user_id=current_user.id).first()
#     if not item:
#         return jsonify({"error": "Cart item not found"}), 404

#     item.quantity = quantity
#     db.session.commit()
#     return jsonify(item.to_dict()), 200


# @cart_routes.delete("/<int:item_id>")
# @login_required
# def remove_cart_item(item_id):
#     item = ShoppingCart.query.filter_by(id=item_id, user_id=current_user.id).first()
#     if not item:
#         return jsonify({"error": "Cart item not found"}), 404

#     db.session.delete(item)
#     db.session.commit()
#     return jsonify({"message": "Deleted"}), 200


# @cart_routes.delete("/clear")
# @login_required
# def clear_cart():
#     ShoppingCart.query.filter_by(user_id=current_user.id).delete()
#     db.session.commit()
#     return jsonify({"message": "Cleared"}), 200


# from flask import Blueprint, request, jsonify
# from flask_login import login_required, current_user
# from app.models import db
# from app.models.shoppingcart import ShoppingCart
# from app.models.product import Product

# cart_routes = Blueprint("cart", __name__, url_prefix="/api/cart")


# @cart_routes.get("/")
# @login_required
# def get_cart():
#     items = ShoppingCart.query.filter_by(user_id=current_user.id).all()
#     return jsonify([i.to_dict() for i in items]), 200


# @cart_routes.post("/")
# @login_required
# def add_to_cart():
#     data = request.get_json() or {}
#     product_id = data.get("product_id")
#     quantity = int(data.get("quantity") or 1)

#     if not product_id:
#         return jsonify({"error": "product_id is required"}), 400
#     if quantity < 1:
#         return jsonify({"error": "quantity must be >= 1"}), 400

#     product = Product.query.get(product_id)
#     if not product:
#         return jsonify({"error": "Product not found"}), 404

#     existing = ShoppingCart.query.filter_by(
#         user_id=current_user.id, product_id=product_id
#     ).first()

#     if existing:
#         existing.quantity += quantity
#         item = existing
#     else:
#         item = ShoppingCart(
#             user_id=current_user.id, product_id=product_id, quantity=quantity
#         )
#         db.session.add(item)

#     db.session.commit()
#     return jsonify(item.to_dict()), 201


# @cart_routes.patch("/<int:item_id>")
# @login_required
# def update_cart_item(item_id):
#     data = request.get_json() or {}
#     quantity = data.get("quantity")

#     if quantity is None:
#         return jsonify({"error": "quantity is required"}), 400

#     try:
#         quantity = int(quantity)
#     except ValueError:
#         return jsonify({"error": "quantity must be an integer"}), 400

#     if quantity < 1:
#         return jsonify({"error": "quantity must be >= 1"}), 400

#     item = ShoppingCart.query.filter_by(id=item_id, user_id=current_user.id).first()
#     if not item:
#         return jsonify({"error": "Cart item not found"}), 404

#     item.quantity = quantity
#     db.session.commit()
#     return jsonify(item.to_dict()), 200


# @cart_routes.delete("/<int:item_id>")
# @login_required
# def remove_cart_item(item_id):
#     item = ShoppingCart.query.filter_by(id=item_id, user_id=current_user.id).first()
#     if not item:
#         return jsonify({"error": "Cart item not found"}), 404

#     db.session.delete(item)
#     db.session.commit()
#     return jsonify({"message": "Deleted"}), 200


# @cart_routes.delete("/clear")
# @login_required
# def clear_cart():
#     ShoppingCart.query.filter_by(user_id=current_user.id).delete()
#     db.session.commit()
#     return jsonify({"message": "Cleared"}), 200


# from flask import Blueprint, request, jsonify
# from flask_login import login_required, current_user
# from app.models import db
# from app.models.shoppingcart import ShoppingCart
# from app.models.product import Product

# cart_routes = Blueprint("cart", __name__, url_prefix="/api/cart")


# @cart_routes.get("/")
# @login_required
# def get_cart():
#     """Get all cart items for the current user."""
#     items = ShoppingCart.query.filter_by(user_id=current_user.id).all()
#     return jsonify([i.to_dict() for i in items]), 200


# @cart_routes.post("/")
# @login_required
# def add_to_cart():
#     """Add a product to the cart or increase quantity if it already exists."""
#     data = request.get_json() or {}
#     product_id = data.get("product_id")

#     # Validate quantity
#     try:
#         quantity = int(data.get("quantity") or 1)
#     except (ValueError, TypeError):
#         return jsonify({"error": "quantity must be an integer"}), 400

#     if not product_id:
#         return jsonify({"error": "product_id is required"}), 400
#     if quantity < 1:
#         return jsonify({"error": "quantity must be >= 1"}), 400
#     if not current_user or not current_user.id:
#         return jsonify({"error": "User not found"}), 400

#     # Validate product exists
#     product = Product.query.get(product_id)
#     if not product:
#         return jsonify({"error": "Product not found"}), 404

#     # Check if item already in cart
#     existing = ShoppingCart.query.filter_by(
#         user_id=current_user.id, product_id=product_id
#     ).first()

#     if existing:
#         existing.quantity += quantity
#         item = existing
#     else:
#         item = ShoppingCart(
#             user_id=current_user.id, product_id=product_id, quantity=quantity
#         )
#         db.session.add(item)

#     db.session.commit()
#     db.session.refresh(item)
#     return jsonify(item.to_dict()), 201


# @cart_routes.patch("/<int:item_id>")
# @login_required
# def update_cart_item(item_id):
#     """Update the quantity of a cart item."""
#     data = request.get_json() or {}
#     quantity = data.get("quantity")

#     if quantity is None:
#         return jsonify({"error": "quantity is required"}), 400

#     try:
#         quantity = int(quantity)
#     except (ValueError, TypeError):
#         return jsonify({"error": "quantity must be an integer"}), 400

#     if quantity < 1:
#         return jsonify({"error": "quantity must be >= 1"}), 400

#     item = ShoppingCart.query.filter_by(id=item_id, user_id=current_user.id).first()
#     if not item:
#         return jsonify({"error": "Cart item not found"}), 404

#     item.quantity = quantity
#     db.session.commit()
#     return jsonify(item.to_dict()), 200


# @cart_routes.delete("/<int:item_id>")
# @login_required
# def remove_cart_item(item_id):
#     """Remove a single item from the cart."""
#     item = ShoppingCart.query.filter_by(id=item_id, user_id=current_user.id).first()
#     if not item:
#         return jsonify({"error": "Cart item not found"}), 404

#     db.session.delete(item)
#     db.session.commit()
#     return jsonify({"message": "Deleted"}), 200


# @cart_routes.delete("/clear")
# @login_required
# def clear_cart():
#     """Clear all items from the current user's cart."""
#     ShoppingCart.query.filter_by(user_id=current_user.id).delete()
#     db.session.commit()
#     return jsonify({"message": "Cleared"}), 200






#     ------ Works 

# from flask import Blueprint, request, jsonify
# from flask_login import login_required, current_user
# from app.models import db
# from app.models.shoppingcart import ShoppingCart
# from app.models.product import Product
# import traceback  # 👈 add this

# cart_routes = Blueprint("cart", __name__, url_prefix="/api/cart")


# @cart_routes.get("/")
# @login_required
# def get_cart():
#     """Get all cart items for the current user."""
#     items = ShoppingCart.query.filter_by(user_id=current_user.id).all()
#     return jsonify([i.to_dict() for i in items]), 200


# @cart_routes.post("/")
# @login_required
# def add_to_cart():
#     """Add a product to the cart or increase quantity if it already exists."""
#     try:
#         data = request.get_json() or {}
#         print("🔥 ADD TO CART REQUEST DATA:", data)  # debug log

#         product_id = data.get("product_id")

#         # Validate quantity
#         try:
#             quantity = int(data.get("quantity") or 1)
#         except (ValueError, TypeError):
#             return jsonify({"error": "quantity must be an integer"}), 400

#         if not product_id:
#             return jsonify({"error": "product_id is required"}), 400
#         if quantity < 1:
#             return jsonify({"error": "quantity must be >= 1"}), 400
#         if not current_user or not current_user.id:
#             return jsonify({"error": "User not found"}), 400

#         # Validate product exists
#         product = Product.query.get(product_id)
#         if not product:
#             return jsonify({"error": "Product not found"}), 404

#         # Check if item already in cart
#         existing = ShoppingCart.query.filter_by(
#             user_id=current_user.id, product_id=product_id
#         ).first()

#         if existing:
#             existing.quantity += quantity
#             item = existing
#         else:
#             item = ShoppingCart(
#                 user_id=current_user.id, product_id=product_id, quantity=quantity
#             )
#             db.session.add(item)

#         db.session.commit()
#         db.session.refresh(item)
#         return jsonify(item.to_dict()), 201

#     except Exception as e:
#         print("🔥 ADD TO CART ERROR:", e)
#         print(traceback.format_exc())  # 👈 full error traceback
#         db.session.rollback()
#         return jsonify({"error": str(e)}), 500


# @cart_routes.patch("/<int:item_id>")
# @login_required
# def update_cart_item(item_id):
#     """Update the quantity of a cart item."""
#     data = request.get_json() or {}
#     quantity = data.get("quantity")

#     if quantity is None:
#         return jsonify({"error": "quantity is required"}), 400

#     try:
#         quantity = int(quantity)
#     except (ValueError, TypeError):
#         return jsonify({"error": "quantity must be an integer"}), 400

#     if quantity < 1:
#         return jsonify({"error": "quantity must be >= 1"}), 400

#     item = ShoppingCart.query.filter_by(id=item_id, user_id=current_user.id).first()
#     if not item:
#         return jsonify({"error": "Cart item not found"}), 404

#     item.quantity = quantity
#     db.session.commit()
#     return jsonify(item.to_dict()), 200


# @cart_routes.delete("/<int:item_id>")
# @login_required
# def remove_cart_item(item_id):
#     """Remove a single item from the cart."""
#     item = ShoppingCart.query.filter_by(id=item_id, user_id=current_user.id).first()
#     if not item:
#         return jsonify({"error": "Cart item not found"}), 404

#     db.session.delete(item)
#     db.session.commit()
#     return jsonify({"message": "Deleted"}), 200


# @cart_routes.delete("/clear")
# @login_required
# def clear_cart():
#     """Clear all items from the current user's cart."""
#     ShoppingCart.query.filter_by(user_id=current_user.id).delete()
#     db.session.commit()
#     return jsonify({"message": "Cleared"}), 200



# from flask import Blueprint, request, jsonify
# from flask_login import login_required, current_user
# from app.models import db
# from app.models.shoppingcart import ShoppingCart
# from app.models.product import Product
# import traceback  # 👈 add this

# cart_routes = Blueprint("cart", __name__, url_prefix="/api/cart")


# @cart_routes.get("/")
# @login_required
# def get_cart():
#     """Get all cart items for the current user."""
#     items = ShoppingCart.query.filter_by(user_id=current_user.id).all()
#     return jsonify([i.to_dict() for i in items]), 200


# @cart_routes.post("/")
# @login_required
# def add_to_cart():
#     """Add a product to the cart or increase quantity if it already exists."""
#     try:
#         data = request.get_json() or {}
#         print("🔥 ADD TO CART REQUEST DATA:", data)  # debug log

#         product_id = data.get("product_id")

#         # Validate quantity
#         try:
#             quantity = int(data.get("quantity") or 1)
#         except (ValueError, TypeError):
#             return jsonify({"error": "quantity must be an integer"}), 400

#         if not product_id:
#             return jsonify({"error": "product_id is required"}), 400
#         if quantity < 1:
#             return jsonify({"error": "quantity must be >= 1"}), 400
#         if not current_user or not current_user.id:
#             return jsonify({"error": "User not found"}), 400

#         # Validate product exists
#         product = Product.query.get(product_id)
#         if not product:
#             return jsonify({"error": "Product not found"}), 404

#         # Check if item already in cart
#         existing = ShoppingCart.query.filter_by(
#             user_id=current_user.id, product_id=product_id
#         ).first()

#         if existing:
#             existing.quantity += quantity
#             item = existing
#         else:
#             item = ShoppingCart(
#                 user_id=current_user.id, product_id=product_id, quantity=quantity
#             )
#             db.session.add(item)

#         db.session.commit()
#         db.session.refresh(item)

#         # ✅ make sure frontend always has full product + quantity info
#         response = item.to_dict()
#         response.update({
#             "product_id": product.id,
#             "title": product.title,
#             "price": product.price,
#             "cover_image_url": product.cover_image_url,
#             "quantity": item.quantity,
#         })

#         return jsonify(response), 201

#     except Exception as e:
#         print("🔥 ADD TO CART ERROR:", e)
#         print(traceback.format_exc())  # 👈 full error traceback
#         db.session.rollback()
#         return jsonify({"error": str(e)}), 500


# @cart_routes.patch("/<int:item_id>")
# @login_required
# def update_cart_item(item_id):
#     """Update the quantity of a cart item."""
#     data = request.get_json() or {}
#     quantity = data.get("quantity")

#     if quantity is None:
#         return jsonify({"error": "quantity is required"}), 400

#     try:
#         quantity = int(quantity)
#     except (ValueError, TypeError):
#         return jsonify({"error": "quantity must be an integer"}), 400

#     if quantity < 1:
#         return jsonify({"error": "quantity must be >= 1"}), 400

#     item = ShoppingCart.query.filter_by(id=item_id, user_id=current_user.id).first()
#     if not item:
#         return jsonify({"error": "Cart item not found"}), 404

#     item.quantity = quantity
#     db.session.commit()

#     # ✅ return consistent shape
#     product = Product.query.get(item.product_id)
#     response = item.to_dict()
#     response.update({
#         "product_id": product.id,
#         "title": product.title,
#         "price": product.price,
#         "cover_image_url": product.cover_image_url,
#         "quantity": item.quantity,
#     })

#     return jsonify(response), 200


# @cart_routes.delete("/<int:item_id>")
# @login_required
# def remove_cart_item(item_id):
#     """Remove a single item from the cart."""
#     item = ShoppingCart.query.filter_by(id=item_id, user_id=current_user.id).first()
#     if not item:
#         return jsonify({"error": "Cart item not found"}), 404

#     db.session.delete(item)
#     db.session.commit()
#     return jsonify({"message": "Deleted"}), 200


# @cart_routes.delete("/clear")
# @login_required
# def clear_cart():
#     """Clear all items from the current user's cart."""
#     ShoppingCart.query.filter_by(user_id=current_user.id).delete()
#     db.session.commit()
#     return jsonify({"message": "Cleared"}), 200







from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import db
from app.models.shoppingcart import ShoppingCart
from app.models.product import Product
import traceback

cart_routes = Blueprint("cart", __name__, url_prefix="/api/cart")


@cart_routes.get("/")
@login_required
def get_cart():
    """Get all cart items for the current user."""
    items = ShoppingCart.query.filter_by(user_id=current_user.id).all()
    return jsonify([i.to_dict() for i in items]), 200


@cart_routes.post("/")
@login_required
def add_to_cart():
    """Add a product to the cart or set quantity if it already exists."""
    try:
        data = request.get_json() or {}
        print("🔥 ADD TO CART REQUEST DATA:", data)

        product_id = data.get("product_id")

        # Validate quantity
        try:
            quantity = int(data.get("quantity") or 1)
        except (ValueError, TypeError):
            return jsonify({"error": "quantity must be an integer"}), 400

        if not product_id:
            return jsonify({"error": "product_id is required"}), 400
        if quantity < 1:
            return jsonify({"error": "quantity must be >= 1"}), 400
        if not current_user or not current_user.id:
            return jsonify({"error": "User not found"}), 400

        # Validate product exists
        product = Product.query.get(product_id)
        if not product:
            return jsonify({"error": "Product not found"}), 404

        # Check if item already in cart
        existing = ShoppingCart.query.filter_by(
            user_id=current_user.id, product_id=product_id
        ).first()

        if existing:
            # ✅ overwrite with requested quantity
            existing.quantity = quantity
            item = existing
        else:
            item = ShoppingCart(
                user_id=current_user.id, product_id=product_id, quantity=quantity
            )
            db.session.add(item)

        db.session.commit()
        db.session.refresh(item)

        # ✅ always send product info
        response = item.to_dict()
        response.update({
            "product_id": product.id,
            "title": product.title,
            "price": product.price,
            "cover_image_url": product.cover_image_url,
            "quantity": item.quantity,
        })

        return jsonify(response), 201

    except Exception as e:
        print("🔥 ADD TO CART ERROR:", e)
        print(traceback.format_exc())
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@cart_routes.patch("/<int:item_id>")
@login_required
def update_cart_item(item_id):
    """Update the quantity of a cart item."""
    data = request.get_json() or {}
    quantity = data.get("quantity")

    if quantity is None:
        return jsonify({"error": "quantity is required"}), 400

    try:
        quantity = int(quantity)
    except (ValueError, TypeError):
        return jsonify({"error": "quantity must be an integer"}), 400

    if quantity < 1:
        return jsonify({"error": "quantity must be >= 1"}), 400

    item = ShoppingCart.query.filter_by(id=item_id, user_id=current_user.id).first()
    if not item:
        return jsonify({"error": "Cart item not found"}), 404

    item.quantity = quantity
    db.session.commit()

    product = Product.query.get(item.product_id)
    response = item.to_dict()
    response.update({
        "product_id": product.id,
        "title": product.title,
        "price": product.price,
        "cover_image_url": product.cover_image_url,
        "quantity": item.quantity,
    })

    return jsonify(response), 200


@cart_routes.delete("/<int:item_id>")
@login_required
def remove_cart_item(item_id):
    """Remove a single item from the cart."""
    item = ShoppingCart.query.filter_by(id=item_id, user_id=current_user.id).first()
    if not item:
        return jsonify({"error": "Cart item not found"}), 404

    db.session.delete(item)
    db.session.commit()
    return jsonify({"message": "Deleted"}), 200


@cart_routes.delete("/clear")
@login_required
def clear_cart():
    """Clear all items from the current user's cart."""
    ShoppingCart.query.filter_by(user_id=current_user.id).delete()
    db.session.commit()
    return jsonify({"message": "Cleared"}), 200