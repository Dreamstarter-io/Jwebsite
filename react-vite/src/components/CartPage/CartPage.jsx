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



// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, updateQuantity, clearCart } from "../../redux/cart";
// import CartCheckout from "../CartCheckout/CartCheckout";
// import "./CartPage.css";

// function CartPage() {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   if (!cart.length) return <p>Your cart is empty.</p>;

//   return (
//     <div className="cart-page">
//       <h1>Your Cart</h1>
//       {cart.map((item) => (
//         <div key={item.id} className="cart-item">
//           <img
//             src={item.album?.cover_image_url || item.cover_image_url || ""}
//             alt={item.album?.title || item.title || "Product"}
//             className="cart-item-image"
//           />
//           <div className="cart-item-info">
//             <h3>{item.album?.title || item.title}</h3>
//             <p>Quantity: {item.quantity}</p>
//             <p>Price: ${item.album?.price || item.price}</p>
//             <div className="cart-item-buttons">
//               <button onClick={() => dispatch(removeFromCart(item.id))}>
//                 Remove
//               </button>
//               <button
//                 onClick={() =>
//                   dispatch(
//                     updateQuantity({ id: item.id, quantity: item.quantity + 1 })
//                   )
//                 }
//               >
//                 +
//               </button>
//               <button
//                 onClick={() =>
//                   dispatch(
//                     updateQuantity({ id: item.id, quantity: item.quantity - 1 })
//                   )
//                 }
//                 disabled={item.quantity <= 1}
//               >
//                 -
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//       <button className="clear-cart" onClick={() => dispatch(clearCart())}>
//         Clear Cart
//       </button>

//       {/* PayPal Checkout */}
//       <CartCheckout cartItems={cart} />
//     </div>
//   );
// }

// export default CartPage;


// -------- Guest works

// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, updateQuantity, clearCart } from "../../redux/cart";
// import CartCheckout from "../CartCheckout/CartCheckout";
// import "./CartPage.css";

// function CartPage() {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   console.log("Cart state:", cart); // check your cart shape

//   if (!cart.length) return <p>Your cart is empty.</p>;

//   return (
//     <div className="cart-page">
//       <h1>Your Cart</h1>
//       {cart.map((item, index) => {
//         // Unique key for React
//         const id = item.cartId || item.id || (item.product && item.product.id) || index;

//         // Unified access: backend nested product or flat guest item
//         const title = item.title || item.product?.title || "Product";
//         const image = item.cover_image_url || item.product?.cover_image_url || "";
//         const price = item.price ?? item.product?.price ?? 0;
//         const quantity = item.quantity || 1;

//         return (
//           <div key={id} className="cart-item">
//             <img src={image} alt={title} className="cart-item-image" />
//             <div className="cart-item-info">
//               <h3>{title}</h3>
//               <p>Quantity: {quantity}</p>
//               <p>Price: ${price.toFixed(2)}</p>
//               <div className="cart-item-buttons">
//                 <button onClick={() => dispatch(removeFromCart(id))}>Remove</button>
//                 <button
//                   onClick={() =>
//                     dispatch(updateQuantity({ id, quantity: quantity + 1 }))
//                   }
//                 >
//                   +
//                 </button>
//                 <button
//                   onClick={() =>
//                     dispatch(updateQuantity({ id, quantity: quantity - 1 }))
//                   }
//                   disabled={quantity <= 1}
//                 >
//                   -
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
//       })}

//       <button className="clear-cart" onClick={() => dispatch(clearCart())}>
//         Clear Cart
//       </button>

//       {/* PayPal Checkout */}
//       <CartCheckout cartItems={cart} />
//     </div>
//   );
// }

// export default CartPage;



//---------------Works

// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, updateQuantity, clearCart } from "../../redux/cart";
// import CartCheckout from "../CartCheckout/CartCheckout";
// import "./CartPage.css";

// function CartPage() {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   console.log("Cart state:", cart); // check your cart shape

//   if (!cart.length) return <p>Your cart is empty.</p>;

//   return (
//     <div className="cart-page">
//       <h1>Your Cart</h1>
//       {cart.map((item, index) => {
//         const id = item.cartId || item.id || (item.product && item.product.id) || index;
//         const title = item.title || item.product?.title || "Product";
//         const image = item.cover_image_url || item.product?.cover_image_url || "";

//         // Make sure price is a number
//         let price = item.price ?? item.product?.price ?? 0;
//         price = Number(price);
//         if (isNaN(price)) price = 0;

//         const quantity = item.quantity ?? 1;

//         return (
//           <div key={id} className="cart-item">
//             <img src={image} alt={title} className="cart-item-image" />
//             <div className="cart-item-info">
//               <h3>{title}</h3>
//               <p>Quantity: {quantity}</p>
//               <p>Price: ${price.toFixed(2)}</p>
//               <div className="cart-item-buttons">
//                 <button onClick={() => dispatch(removeFromCart(id))}>Remove</button>
//                 <button
//                   onClick={() =>
//                     dispatch(updateQuantity({ id, quantity: quantity + 1 }))
//                   }
//                 >
//                   +
//                 </button>
//                 <button
//                   onClick={() =>
//                     dispatch(updateQuantity({ id, quantity: quantity - 1 }))
//                   }
//                   disabled={quantity <= 1}
//                 >
//                   -
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
//       })}

//       <button className="clear-cart" onClick={() => dispatch(clearCart())}>
//         Clear Cart
//       </button>

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
      {cart.map((item, index) => {
        // Ensure unique key
        const id = item.cartId ?? item.id ?? index;
        const title = item.title ?? item.product?.title ?? "Product";
        const image = item.cover_image_url ?? item.product?.cover_image_url ?? "";
        let price = Number(item.price ?? item.product?.price ?? 0);
        if (isNaN(price)) price = 0;
        const quantity = item.quantity ?? 1;

        return (
          <div key={id} className="cart-item">
            <img src={image} alt={title} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{title}</h3>
              <p>Quantity: {quantity}</p>
              <p>Price: ${price.toFixed(2)}</p>
              <div className="cart-item-buttons">
                <button
                  onClick={() =>
                    dispatch(updateQuantity(id, quantity - 1))
                  }
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <button
                  onClick={() =>
                    dispatch(updateQuantity(id, quantity + 1))
                  }
                >
                  +
                </button>
                <button onClick={() => dispatch(removeFromCart(id))}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <button className="clear-cart" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>

      <CartCheckout cartItems={cart} />
    </div>
  );
}

export default CartPage;