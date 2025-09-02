// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./ProductShowPage.css";

// function ProductShowPage() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then(setProduct)
//       .catch((err) => console.error("Failed to load product:", err));
//   }, [productId]);

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div className="product-show-page">
//       <div className="product-show-main">
//         <div className="product-image-section">
//           <img
//             src={product.cover_image_url}
//             alt={product.title}
//             className="product-image"
//           />
//           <div className="action-buttons">
//             <button className="cart-button">Add to Cart</button>
//             <button className="wishlist-button">Add to Wishlist</button>
//           </div>
//         </div>

//         <div className="product-info-section">
//           <h1>{product.title}</h1>
//           <h3>By: {product.seller?.username || "Artist name"}</h3>

//           <div className="featured-track">
//             <button
//               className="play-button"
//               onClick={() => alert("Feature coming soon!")}
//             >
//               ▶
//             </button>
//             <span> Featured Track</span>
//           </div>

//           <h4>Digital Album</h4>
//           <div className="product-description">{product.description}</div>
//         </div>
//       </div>

//       <div className="reviews-section">
//         <h3>Reviews</h3>
//         <p><em>Be the first to review this album!</em></p>
//         <p>“Review feature coming soon”</p>
//       </div>
//     </div>
//   );
// }

// export default ProductShowPage;


// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cart"; // adjust path if needed
// import "./ProductShowPage.css";

// function ProductShowPage() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then(setProduct)
//       .catch((err) => console.error("Failed to load product:", err));
//   }, [productId]);

//   if (!product) return <p>Loading...</p>;

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div className="product-show-page">
//       <div className="product-show-main">
//         <div className="product-image-section">
//           <img
//             src={product.cover_image_url}
//             alt={product.title}
//             className="product-image"
//           />
//           <div className="action-buttons">
//             <button className="cart-button" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//             <button className="wishlist-button">Add to Wishlist</button>
//           </div>
//         </div>

//         <div className="product-info-section">
//           <h1>{product.title}</h1>
//           <h3>By: {product.seller?.username || "Artist name"}</h3>

//           <div className="featured-track">
//             <button
//               className="play-button"
//               onClick={() => alert("Feature coming soon!")}
//             >
//               ▶
//             </button>
//             <span> Featured Track</span>
//           </div>

//           <h4>Digital Album</h4>
//           <div className="product-description">{product.description}</div>
//         </div>
//       </div>

//       <div className="reviews-section">
//         <h3>Reviews</h3>
//         <p><em>Be the first to review this album!</em></p>
//         <p>“Review feature coming soon”</p>
//       </div>
//     </div>
//   );
// }

// export default ProductShowPage;



// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cart"; // adjust path if needed
// import "./ProductShowPage.css";

// function ProductShowPage() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then(setProduct)
//       .catch((err) => console.error("Failed to load product:", err));
//   }, [productId]);

//   if (!product) return <p>Loading...</p>;

//   const handleAddToCart = () => {
//     // ⚡ Pass only the product ID and optional quantity
//     dispatch(addToCart(product.id, 1));
//   };

//   return (
//     <div className="product-show-page">
//       <div className="product-show-main">
//         <div className="product-image-section">
//           <img
//             src={product.cover_image_url}
//             alt={product.title}
//             className="product-image"
//           />
//           <div className="action-buttons">
//             <button className="cart-button" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//             <button className="wishlist-button">Add to Wishlist</button>
//           </div>
//         </div>

//         <div className="product-info-section">
//           <h1>{product.title}</h1>
//           <h3>By: {product.seller?.username || "Artist name"}</h3>

//           <div className="featured-track">
//             <button
//               className="play-button"
//               onClick={() => alert("Feature coming soon!")}
//             >
//               ▶
//             </button>
//             <span> Featured Track</span>
//           </div>

//           <h4>Digital Album</h4>
//           <div className="product-description">{product.description}</div>
//         </div>
//       </div>

//       <div className="reviews-section">
//         <h3>Reviews</h3>
//         <p><em>Be the first to review this album!</em></p>
//         <p>“Review feature coming soon”</p>
//       </div>
//     </div>
//   );
// }

// export default ProductShowPage;


// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cart"; // adjust path if needed
// import "./ProductShowPage.css";

// function ProductShowPage() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then(setProduct)
//       .catch((err) => console.error("Failed to load product:", err));
//   }, [productId]);

//   if (!product) return <p>Loading...</p>;

//   const handleAddToCart = () => {
//     // ⚡ Dispatch product ID and quantity
//     dispatch(addToCart(product.id, 1));
//   };

//   return (
//     <div className="product-show-page">
//       <div className="product-show-main">
//         <div className="product-image-section">
//           <img
//             src={product.cover_image_url}
//             alt={product.title}
//             className="product-image"
//           />
//           <div className="action-buttons">
//             <button className="cart-button" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//             <button className="wishlist-button">Add to Wishlist</button>
//           </div>
//         </div>

//         <div className="product-info-section">
//           <h1>{product.title}</h1>
//           <h3>By: {product.seller?.username || "Artist name"}</h3>

//           <div className="featured-track">
//             <button
//               className="play-button"
//               onClick={() => alert("Feature coming soon!")}
//             >
//               ▶
//             </button>
//             <span> Featured Track</span>
//           </div>

//           <h4>Digital Album</h4>
//           <div className="product-description">{product.description}</div>
//         </div>
//       </div>

//       <div className="reviews-section">
//         <h3>Reviews</h3>
//         <p><em>Be the first to review this album!</em></p>
//         <p>“Review feature coming soon”</p>
//       </div>
//     </div>
//   );
// }

// export default ProductShowPage;



// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cart"; // adjust path if needed
// import "./ProductShowPage.css";

// function ProductShowPage() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then(setProduct)
//       .catch((err) => console.error("Failed to load product:", err));
//   }, [productId]);

//   if (!product) return <p>Loading...</p>;

//   const handleAddToCart = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/cart", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include", // needed for session auth
//         body: JSON.stringify({ product_id: product.id, quantity: 1 }),
//       });
//       if (!res.ok) throw new Error("Failed to add to cart");
//       const data = await res.json();
//       dispatch(addToCart(data.id, 1)); // update Redux store
//       alert("Added to cart!");
//     } catch (err) {
//       console.error(err);
//       alert("Could not add to cart. Make sure you're logged in.");
//     }
//   };

//   const handleAddToWishlist = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/wishlist", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ product_id: product.id }),
//       });
//       if (!res.ok) throw new Error("Failed to add to wishlist");
//       alert("Added to wishlist!");
//     } catch (err) {
//       console.error(err);
//       alert("Could not add to wishlist. Make sure you're logged in.");
//     }
//   };

//   return (
//     <div className="product-show-page">
//       <div className="product-show-main">
//         <div className="product-image-section">
//           <img
//             src={product.cover_image_url}
//             alt={product.title}
//             className="product-image"
//           />
//           <div className="action-buttons">
//             <button className="cart-button" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//             <button className="wishlist-button" onClick={handleAddToWishlist}>
//               Add to Wishlist
//             </button>
//           </div>
//         </div>

//         <div className="product-info-section">
//           <h1>{product.title}</h1>
//           <h3>By: {product.seller?.username || "Artist name"}</h3>

//           <div className="featured-track">
//             <button
//               className="play-button"
//               onClick={() => alert("Feature coming soon!")}
//             >
//               ▶
//             </button>
//             <span> Featured Track</span>
//           </div>

//           <h4>Digital Album</h4>
//           <div className="product-description">{product.description}</div>
//         </div>
//       </div>

//       <div className="reviews-section">
//         <h3>Reviews</h3>
//         <p><em>Be the first to review this album!</em></p>
//         <p>“Review feature coming soon”</p>
//       </div>
//     </div>
//   );
// }

// export default ProductShowPage;

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../redux/cart"; // adjust path if needed
// import "./ProductShowPage.css";

// function ProductShowPage() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then(setProduct)
//       .catch((err) => console.error("Failed to load product:", err));
//   }, [productId]);

//   if (!product) return <p>Loading...</p>;

//   const handleAddToCart = async () => {
//     // Create cart item with all necessary info
//     const cartItem = {
//       productId: product.id,
//       title: product.title,
//       cover_image_url: product.cover_image_url,
//       price: product.price || 0,
//       quantity: 1,
//     };

//     if (sessionUser) {
//       try {
//         const res = await fetch("http://localhost:5000/api/cart", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           credentials: "include",
//           body: JSON.stringify({ product_id: product.id, quantity: 1 }),
//         });
//         if (!res.ok) throw new Error("Failed to add to cart");
//         const data = await res.json();

//         // Include backend cart ID if returned
//         dispatch(addToCart({ ...cartItem, cartId: data.id }));
//       } catch (err) {
//         console.error(err);
//       }
//     } else {
//       // Guest: store in Redux
//       dispatch(addToCart(cartItem));

//       // Persist guest cart in localStorage
//       const storedCart = JSON.parse(localStorage.getItem("guest_cart")) || [];
//       storedCart.push(cartItem);
//       localStorage.setItem("guest_cart", JSON.stringify(storedCart));
//     }
//   };

//   const handleAddToWishlist = async () => {
//     if (!sessionUser) return;
//     try {
//       await fetch("http://localhost:5000/api/wishlist", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ product_id: product.id }),
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="product-show-page">
//       <div className="product-show-main">
//         <div className="product-image-section">
//           <img
//             src={product.cover_image_url}
//             alt={product.title}
//             className="product-image"
//           />
//           <div className="action-buttons">
//             <button className="cart-button" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//             <button className="wishlist-button" onClick={handleAddToWishlist}>
//               Add to Wishlist
//             </button>
//           </div>
//         </div>

//         <div className="product-info-section">
//           <h1>{product.title}</h1>
//           <h3>By: {product.seller?.username || "Artist name"}</h3>

//           <div className="featured-track">
//             <button
//               className="play-button"
//               onClick={() => alert("Feature coming soon!")}
//             >
//               ▶
//             </button>
//             <span> Featured Track</span>
//           </div>

//           <h4>Digital Album</h4>
//           <div className="product-description">{product.description}</div>
//           <div className="product-price">${(product.price || 0).toFixed(2)}</div>
//         </div>
//       </div>

//       <div className="reviews-section">
//         <h3>Reviews</h3>
//         <p><em>Be the first to review this album!</em></p>
//         <p>“Review feature coming soon”</p>
//       </div>
//     </div>
//   );
// }

// export default ProductShowPage;


// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../redux/cart"; // adjust path if needed
// import "./ProductShowPage.css";

// function ProductShowPage() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then(setProduct)
//       .catch((err) => console.error("Failed to load product:", err));
//   }, [productId]);

//   if (!product) return <p>Loading...</p>;

//   const handleAddToCart = async () => {
//     // Create cart item with all necessary info
//     const cartItem = {
//       id: product.id, // unified id for both guest & logged-in
//       title: product.title,
//       cover_image_url: product.cover_image_url,
//       price: product.price || 0,
//       quantity: 1,
//     };

//     if (sessionUser) {
//       try {
//         const res = await fetch("http://localhost:5000/api/cart", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           credentials: "include",
//           body: JSON.stringify({ product_id: product.id, quantity: 1 }),
//         });
//         if (!res.ok) throw new Error("Failed to add to cart");

//         const data = await res.json();

//         // Merge backend cart ID but keep product info
//         dispatch(
//           addToCart({
//             ...cartItem,
//             cartId: data.id, // backend cart item id
//           })
//         );
//       } catch (err) {
//         console.error(err);
//       }
//     } else {
//       // Guest: dispatch via cart slice, which already saves to localStorage
//       dispatch(addToCart(cartItem));
//     }
//   };

//   const handleAddToWishlist = async () => {
//     if (!sessionUser) return;
//     try {
//       await fetch("http://localhost:5000/api/wishlist", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ product_id: product.id }),
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="product-show-page">
//       <div className="product-show-main">
//         <div className="product-image-section">
//           <img
//             src={product.cover_image_url}
//             alt={product.title}
//             className="product-image"
//           />
//           <div className="action-buttons">
//             <button className="cart-button" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//             <button className="wishlist-button" onClick={handleAddToWishlist}>
//               Add to Wishlist
//             </button>
//           </div>
//         </div>

//         <div className="product-info-section">
//           <h1>{product.title}</h1>
//           <h3>By: {product.seller?.username || "Artist name"}</h3>

//           <div className="featured-track">
//             <button
//               className="play-button"
//               onClick={() => alert("Feature coming soon!")}
//             >
//               ▶
//             </button>
//             <span> Featured Track</span>
//           </div>

//           <h4>Digital Album</h4>
//           <div className="product-description">{product.description}</div>
//           <div className="product-price">${(product.price || 0).toFixed(2)}</div>
//         </div>
//       </div>

//       <div className="reviews-section">
//         <h3>Reviews</h3>
//         <p><em>Be the first to review this album!</em></p>
//         <p>“Review feature coming soon”</p>
//       </div>
//     </div>
//   );
// }

// export default ProductShowPage;







/// - Guest Works

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCartLocal } from "../../redux/cart"; // direct slice import for guest
// import { addToCart } from "../../redux/cart"; // thunk for logged-in users
// import "./ProductShowPage.css";

// function ProductShowPage() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then(setProduct)
//       .catch((err) => console.error("Failed to load product:", err));
//   }, [productId]);

//   if (!product) return <p>Loading...</p>;

//   const handleAddToCart = async () => {
//     // Unified cart item structure
//     const cartItem = {
//       id: product.id, // id must exist
//       title: product.title,
//       price: product.price || 0,
//       cover_image_url: product.cover_image_url,
//       quantity: 1,
//     };

//     if (sessionUser) {
//       // Logged-in: call thunk
//       try {
//         const res = await fetch("http://localhost:5000/api/cart", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           credentials: "include",
//           body: JSON.stringify({ product_id: product.id, quantity: 1 }),
//         });
//         if (!res.ok) throw new Error("Failed to add to cart");

//         const data = await res.json();

//         // Merge backend cart ID
//         dispatch(
//           addToCart({
//             ...cartItem,
//             cartId: data.id, // backend cart item id
//           })
//         );
//       } catch (err) {
//         console.error(err);
//       }
//     } else {
//       // Guest: dispatch directly to local slice
//       dispatch(addToCartLocal(cartItem));
//     }
//   };

//   const handleAddToWishlist = async () => {
//     if (!sessionUser) return;
//     try {
//       await fetch("http://localhost:5000/api/wishlist", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ product_id: product.id }),
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="product-show-page">
//       <div className="product-show-main">
//         <div className="product-image-section">
//           <img
//             src={product.cover_image_url}
//             alt={product.title}
//             className="product-image"
//           />
//           <div className="action-buttons">
//             <button className="cart-button" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//             <button className="wishlist-button" onClick={handleAddToWishlist}>
//               Add to Wishlist
//             </button>
//           </div>
//         </div>

//         <div className="product-info-section">
//           <h1>{product.title}</h1>
//           <h3>By: {product.seller?.username || "Artist name"}</h3>

//           <div className="featured-track">
//             <button
//               className="play-button"
//               onClick={() => alert("Feature coming soon!")}
//             >
//               ▶
//             </button>
//             <span> Featured Track</span>
//           </div>

//           <h4>Digital Album</h4>
//           <div className="product-description">{product.description}</div>
//           <div className="product-price">${(product.price || 0).toFixed(2)}</div>
//         </div>
//       </div>

//       <div className="reviews-section">
//         <h3>Reviews</h3>
//         <p><em>Be the first to review this album!</em></p>
//         <p>“Review feature coming soon”</p>
//       </div>
//     </div>
//   );
// }

// export default ProductShowPage;




/// ---- Guest works v2

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCartLocal, addToCart } from "../../redux/cart";
// import "./ProductShowPage.css";

// function ProductShowPage() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         // Ensure price is a number
//         if (data.price) data.price = Number(data.price);
//         setProduct(data);
//       })
//       .catch((err) => console.error("Failed to load product:", err));
//   }, [productId]);

//   if (!product) return <p>Loading...</p>;

//   const handleAddToCart = async () => {
//     const cartItem = {
//       id: product.id,
//       title: product.title,
//       price: product.price || 0,
//       cover_image_url: product.cover_image_url,
//       quantity: 1,
//     };

//     if (sessionUser) {
//       // Only call backend thunk for logged-in users
//       dispatch(addToCart(product.id, 1));
//     } else {
//       // Guests: add locally
//       dispatch(addToCartLocal(cartItem));
//     }
//   };

//   const handleAddToWishlist = async () => {
//     if (!sessionUser) return;
//     try {
//       await fetch("http://localhost:5000/api/wishlist", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ product_id: product.id }),
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="product-show-page">
//       <div className="product-show-main">
//         <div className="product-image-section">
//           <img
//             src={product.cover_image_url}
//             alt={product.title}
//             className="product-image"
//           />
//           <div className="action-buttons">
//             <button className="cart-button" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//             <button className="wishlist-button" onClick={handleAddToWishlist}>
//               Add to Wishlist
//             </button>
//           </div>
//         </div>

//         <div className="product-info-section">
//           <h1>{product.title}</h1>
//           <h3>By: {product.seller?.username || "Artist name"}</h3>

//           <div className="featured-track">
//             <button
//               className="play-button"
//               onClick={() => alert("Feature coming soon!")}
//             >
//               ▶
//             </button>
//             <span> Featured Track</span>
//           </div>

//           <h4>Digital Album</h4>
//           <div className="product-description">{product.description}</div>
//           <div className="product-price">${(product.price || 0).toFixed(2)}</div>
//         </div>
//       </div>

//       <div className="reviews-section">
//         <h3>Reviews</h3>
//         <p><em>Be the first to review this album!</em></p>
//         <p>“Review feature coming soon”</p>
//       </div>
//     </div>
//   );
// }

// export default ProductShowPage;




// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCartLocal, addToCart, updateQuantity } from "../../redux/cart";
// import "./ProductShowPage.css";

// function ProductShowPage() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);
//   const cart = useSelector((state) => state.cart);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.price) data.price = Number(data.price); // ensure price is a number
//         setProduct(data);
//       })
//       .catch((err) => console.error("Failed to load product:", err));
//   }, [productId]);

//   if (!product) return <p>Loading...</p>;

//   const handleAddToCart = async () => {
//     const cartItem = {
//       id: product.id,
//       title: product.title,
//       price: product.price || 0,
//       cover_image_url: product.cover_image_url,
//       quantity: 1,
//     };

//     if (sessionUser) {
//       // Check if product already exists in cart
//       const existingItem = cart.find((item) => item.id === product.id);
//       if (existingItem) {
//         // Increment quantity via backend thunk
//         dispatch(addToCart(product.id, existingItem.quantity + 1));
//       } else {
//         dispatch(addToCart(product.id, 1));
//       }
//     } else {
//       // Guest cart
//       const existingLocal = cart.find((item) => item.id === product.id);
//       if (existingLocal) {
//         dispatch(updateQuantity({ id: product.id, quantity: existingLocal.quantity + 1 }));
//       } else {
//         dispatch(addToCartLocal(cartItem));
//       }
//     }
//   };

//   const handleAddToWishlist = async () => {
//     if (!sessionUser) return;
//     try {
//       await fetch("http://localhost:5000/api/wishlist", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ product_id: product.id }),
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="product-show-page">
//       <div className="product-show-main">
//         <div className="product-image-section">
//           <img
//             src={product.cover_image_url}
//             alt={product.title}
//             className="product-image"
//           />
//           <div className="action-buttons">
//             <button className="cart-button" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//             <button className="wishlist-button" onClick={handleAddToWishlist}>
//               Add to Wishlist
//             </button>
//           </div>
//         </div>

//         <div className="product-info-section">
//           <h1>{product.title}</h1>
//           <h3>By: {product.seller?.username || "Artist name"}</h3>

//           <div className="featured-track">
//             <button
//               className="play-button"
//               onClick={() => alert("Feature coming soon!")}
//             >
//               ▶
//             </button>
//             <span> Featured Track</span>
//           </div>

//           <h4>Digital Album</h4>
//           <div className="product-description">{product.description}</div>
//           <div className="product-price">${(product.price || 0).toFixed(2)}</div>
//         </div>
//       </div>

//       <div className="reviews-section">
//         <h3>Reviews</h3>
//         <p><em>Be the first to review this album!</em></p>
//         <p>“Review feature coming soon”</p>
//       </div>
//     </div>
//   );
// }

// export default ProductShowPage;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartLocal, addToCart } from "../../redux/cart";
import "./ProductShowPage.css";

function ProductShowPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.price) data.price = Number(data.price);
        setProduct(data);
      })
      .catch((err) => console.error("Failed to load product:", err));
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = async () => {
    const existingItem = cart.find((item) => item.id === product.id);
    const quantityToAdd = 1; // always add 1 at a time

    if (sessionUser) {
      const newQuantity = existingItem ? Number(existingItem.quantity) + 1 : quantityToAdd;
      dispatch(addToCart(product.id, newQuantity));
    } else {
      if (existingItem) {
        dispatch(
          addToCartLocal({
            ...existingItem,
            quantity: Number(existingItem.quantity) + 1,
          })
        );
      } else {
        dispatch(
          addToCartLocal({
            id: product.id,
            title: product.title,
            price: Number(product.price || 0),
            cover_image_url: product.cover_image_url,
            quantity: quantityToAdd,
          })
        );
      }
    }
  };

  const handleAddToWishlist = async () => {
    if (!sessionUser) return;
    try {
      await fetch("http://localhost:5000/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ product_id: product.id }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="product-show-page">
      <div className="product-show-main">
        <div className="product-image-section">
          <img
            src={product.cover_image_url}
            alt={product.title}
            className="product-image"
          />
          <div className="action-buttons">
            <button className="cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="wishlist-button" onClick={handleAddToWishlist}>
              Add to Wishlist
            </button>
          </div>
        </div>

        <div className="product-info-section">
          <h1>{product.title}</h1>
          <h3>By: {product.seller?.username || "Artist name"}</h3>

          <div className="featured-track">
            <button
              className="play-button"
              onClick={() => alert("Feature coming soon!")}
            >
              ▶
            </button>
            <span> Featured Track</span>
          </div>

          <h4>Digital Album</h4>
          <div className="product-description">{product.description}</div>
          <div className="product-price">${(product.price || 0).toFixed(2)}</div>
        </div>
      </div>

      <div className="reviews-section">
        <h3>Reviews</h3>
        <p><em>Be the first to review this album!</em></p>
        <p>“Review feature coming soon”</p>
      </div>
    </div>
  );
}

export default ProductShowPage;