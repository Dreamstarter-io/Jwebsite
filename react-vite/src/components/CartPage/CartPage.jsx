// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, updateQuantity, clearCart } from "../../redux/cart";

// function CartPage() {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   if (!cart.length) return <p>Your cart is empty.</p>;

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cart.map((item) => (
//         <div key={item.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
//           <h3>{item.title}</h3>
//           <p>Quantity: {item.quantity}</p>
//           <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
//           <button
//             onClick={() =>
//               dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
//             }
//           >
//             +
//           </button>
//           <button
//             onClick={() =>
//               dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
//             }
//             disabled={item.quantity <= 1}
//           >
//             -
//           </button>
//         </div>
//       ))}
//       <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
//     </div>
//   );
// }

// export default CartPage;



// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, updateQuantity, clearCart } from "../../redux/cart";
// import CartCheckout from "../CartCheckout/CartCheckout";

// function CartPage() {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   if (!cart.length) return <p>Your cart is empty.</p>;

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cart.map((item) => (
//         <div
//           key={item.id}
//           style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}
//         >
//           <h3>{item.title}</h3>
//           <p>Quantity: {item.quantity}</p>
//           <p>Price: ${item.price}</p>
//           <button onClick={() => dispatch(removeFromCart(item.id))}>
//             Remove
//           </button>
//           <button
//             onClick={() =>
//               dispatch(
//                 updateQuantity({ id: item.id, quantity: item.quantity + 1 })
//               )
//             }
//           >
//             +
//           </button>
//           <button
//             onClick={() =>
//               dispatch(
//                 updateQuantity({ id: item.id, quantity: item.quantity - 1 })
//               )
//             }
//             disabled={item.quantity <= 1}
//           >
//             -
//           </button>
//         </div>
//       ))}
//       <button onClick={() => dispatch(clearCart())}>Clear Cart</button>

//       {/* PayPal Checkout */}
//       <CartCheckout cartItems={cart} />
//     </div>
//   );
// }

// export default CartPage;



import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../../redux/cart";
import CartCheckout from "../CartCheckout/CartCheckout";
import "./CartPage.css";

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!cart.length) return <p>Your cart is empty.</p>;

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img
            src={item.album?.cover_image_url || item.cover_image_url || ""}
            alt={item.album?.title || item.title || "Product"}
            className="cart-item-image"
          />
          <div className="cart-item-info">
            <h3>{item.album?.title || item.title}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.album?.price || item.price}</p>
            <div className="cart-item-buttons">
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({ id: item.id, quantity: item.quantity + 1 })
                  )
                }
              >
                +
              </button>
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({ id: item.id, quantity: item.quantity - 1 })
                  )
                }
                disabled={item.quantity <= 1}
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
      <button className="clear-cart" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>

      {/* PayPal Checkout */}
      <CartCheckout cartItems={cart} />
    </div>
  );
}

export default CartPage;