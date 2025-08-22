import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/cart";

function CartCheckout() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) return null; // no button if cart empty

  return (
    <div style={{ padding: "20px" }}>
      <h3>Total: ${total.toFixed(2)}</h3>
      <PayPalScriptProvider
        options={{
          "client-id":
            "ASV8ryGykbBivFLZigMXifS3DJHxQnStkHo_z8XEoXud-ZAAeYjXuynLIG6ucRC1BykbuYaH95DOVANu",
          currency: "USD",
        }}
      >
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: { value: total.toFixed(2) },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Transaction completed by ${details.payer.name.given_name}`);
              dispatch(clearCart()); // clear Redux cart
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default CartCheckout;