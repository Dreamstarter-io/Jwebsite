// import { createSlice } from "@reduxjs/toolkit";

// // load cart from localStorage if it exists
// const initialState = JSON.parse(localStorage.getItem("cart")) || [];

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload;
//       const existing = state.find((i) => i.id === item.id);

//       if (existing) {
//         existing.quantity += 1; // if already in cart, increase quantity
//       } else {
//         state.push({ ...item, quantity: 1 });
//       }

//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//     removeFromCart: (state, action) => {
//       const newState = state.filter((i) => i.id !== action.payload);
//       localStorage.setItem("cart", JSON.stringify(newState));
//       return newState;
//     },
//     updateQuantity: (state, action) => {
//       const { id, quantity } = action.payload;
//       const item = state.find((i) => i.id === id);
//       if (item) item.quantity = quantity;

//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//     clearCart: () => {
//       localStorage.removeItem("cart");
//       return [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, updateQuantity, clearCart } =
//   cartSlice.actions;
// export default cartSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// // initialState is now empty; cart will be loaded from backend
// const initialState = [];

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     setCart: (state, action) => {
//       return action.payload;
//     },
//     addToCartLocal: (state, action) => {
//       // optional: for local optimistic updates
//       const item = action.payload;
//       const existing = state.find((i) => i.id === item.id);
//       if (existing) {
//         existing.quantity = item.quantity;
//       } else {
//         state.push(item);
//       }
//     },
//     removeFromCartLocal: (state, action) => {
//       return state.filter((i) => i.id !== action.payload);
//     },
//     clearCartLocal: () => [],
//   },
// });

// export const { setCart, addToCartLocal, removeFromCartLocal, clearCartLocal } =
//   cartSlice.actions;

// // Thunks for backend integration
// export const fetchCart = () => async (dispatch) => {
//   try {
//     const res = await fetch("http://localhost:5000/api/cart", {
//       credentials: "include",
//     });
//     if (!res.ok) throw new Error("Failed to fetch cart");
//     const data = await res.json();
//     dispatch(setCart(data));
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const addToCart = (productId, quantity = 1) => async (dispatch) => {
//   try {
//     const res = await fetch("http://localhost:5000/api/cart", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ product_id: productId, quantity }),
//     });
//     if (!res.ok) throw new Error("Failed to add to cart");
//     const data = await res.json();
//     dispatch(addToCartLocal(data));
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const updateCartItem = (itemId, quantity) => async (dispatch) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ quantity }),
//     });
//     if (!res.ok) throw new Error("Failed to update cart item");
//     const data = await res.json();
//     dispatch(addToCartLocal(data));
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const removeFromCart = (itemId) => async (dispatch) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
//       method: "DELETE",
//       credentials: "include",
//     });
//     if (!res.ok) throw new Error("Failed to remove cart item");
//     dispatch(removeFromCartLocal(itemId));
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const clearCart = () => async (dispatch) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/clear`, {
//       method: "DELETE",
//       credentials: "include",
//     });
//     if (!res.ok) throw new Error("Failed to clear cart");
//     dispatch(clearCartLocal());
//   } catch (err) {
//     console.error(err);
//   }
// };

// export default cartSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// // initialState is now empty; cart will be loaded from backend
// const initialState = [];

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     setCart: (state, action) => {
//       return action.payload;
//     },
//     addToCartLocal: (state, action) => {
//       // optional: for local optimistic updates
//       const item = action.payload;
//       const existing = state.find((i) => i.id === item.id);
//       if (existing) {
//         existing.quantity = item.quantity;
//       } else {
//         state.push(item);
//       }
//     },
//     removeFromCartLocal: (state, action) => {
//       return state.filter((i) => i.id !== action.payload);
//     },
//     clearCartLocal: () => [],
//   },
// });

// export const { setCart, addToCartLocal, removeFromCartLocal, clearCartLocal } =
//   cartSlice.actions;

// // Thunks for backend integration
// export const fetchCart = () => async (dispatch) => {
//   try {
//     const res = await fetch("http://localhost:5000/api/cart", {
//       credentials: "include",
//     });
//     if (!res.ok) throw new Error("Failed to fetch cart");
//     const data = await res.json();
//     dispatch(setCart(data));
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const addToCart = (productId, quantity = 1) => async (dispatch) => {
//   try {
//     const res = await fetch("http://localhost:5000/api/cart", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ product_id: productId, quantity }),
//     });
//     if (!res.ok) throw new Error("Failed to add to cart");
//     const data = await res.json();
//     dispatch(addToCartLocal(data));
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const updateCartItem = (itemId, quantity) => async (dispatch) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ quantity }),
//     });
//     if (!res.ok) throw new Error("Failed to update cart item");
//     const data = await res.json();
//     dispatch(addToCartLocal(data));
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const removeFromCart = (itemId) => async (dispatch) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
//       method: "DELETE",
//       credentials: "include",
//     });
//     if (!res.ok) throw new Error("Failed to remove cart item");
//     dispatch(removeFromCartLocal(itemId));
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const clearCart = () => async (dispatch) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/clear`, {
//       method: "DELETE",
//       credentials: "include",
//     });
//     if (!res.ok) throw new Error("Failed to clear cart");
//     dispatch(clearCartLocal());
//   } catch (err) {
//     console.error(err);
//   }
// };

// // ⚡ Add this line so your CartPage import still works
// export { updateCartItem as updateQuantity };

// export default cartSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// // Load cart from localStorage for guests
// const loadGuestCart = () => {
//   try {
//     const stored = localStorage.getItem("guestCart");
//     return stored ? JSON.parse(stored) : [];
//   } catch {
//     return [];
//   }
// };

// const saveGuestCart = (cart) => {
//   localStorage.setItem("guestCart", JSON.stringify(cart));
// };

// const initialState = loadGuestCart();

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     setCart: (state, action) => action.payload,
//     addToCartLocal: (state, action) => {
//       const item = action.payload;
//       const existing = state.find((i) => i.id === item.id);
//       if (existing) {
//         existing.quantity += item.quantity || 1;
//       } else {
//         state.push({ ...item, quantity: item.quantity || 1 });
//       }
//       saveGuestCart(state);
//     },
//     removeFromCartLocal: (state, action) => {
//       const updated = state.filter((i) => i.id !== action.payload);
//       saveGuestCart(updated);
//       return updated;
//     },
//     clearCartLocal: () => {
//       saveGuestCart([]);
//       return [];
//     },
//   },
// });

// export const { setCart, addToCartLocal, removeFromCartLocal, clearCartLocal } =
//   cartSlice.actions;

// // Thunks
// export const fetchCart = () => async (dispatch) => {
//   try {
//     const res = await fetch("http://localhost:5000/api/cart", {
//       credentials: "include",
//     });
//     if (!res.ok) throw new Error("Failed to fetch cart");
//     const data = await res.json();
//     dispatch(setCart(data));
//   } catch {
//     // fallback for guest cart
//     const guestCart = loadGuestCart();
//     dispatch(setCart(guestCart));
//   }
// };

// export const addToCart = (productId, quantity = 1) => async (dispatch) => {
//   try {
//     // Try backend (logged-in)
//     const res = await fetch("http://localhost:5000/api/cart", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ product_id: productId, quantity }),
//     });
//     if (res.ok) {
//       const data = await res.json();
//       dispatch(addToCartLocal(data));
//     } else if (res.status === 401) {
//       // Guest: add to localStorage
//       dispatch(addToCartLocal({ id: productId, quantity }));
//     } else {
//       throw new Error("Failed to add to cart");
//     }
//   } catch {
//     dispatch(addToCartLocal({ id: productId, quantity }));
//   }
// };

// export const updateCartItem = (itemId, quantity) => async (dispatch) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ quantity }),
//     });
//     if (res.ok) {
//       const data = await res.json();
//       dispatch(addToCartLocal(data));
//     } else {
//       // Guest fallback
//       dispatch(addToCartLocal({ id: itemId, quantity }));
//     }
//   } catch {
//     dispatch(addToCartLocal({ id: itemId, quantity }));
//   }
// };

// export const removeFromCart = (itemId) => async (dispatch) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
//       method: "DELETE",
//       credentials: "include",
//     });
//     if (res.ok) {
//       dispatch(removeFromCartLocal(itemId));
//     } else {
//       // Guest fallback
//       dispatch(removeFromCartLocal(itemId));
//     }
//   } catch {
//     dispatch(removeFromCartLocal(itemId));
//   }
// };

// export const clearCart = () => async (dispatch) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/clear`, {
//       method: "DELETE",
//       credentials: "include",
//     });
//     if (res.ok) dispatch(clearCartLocal());
//     else dispatch(clearCartLocal());
//   } catch {
//     dispatch(clearCartLocal());
//   }
// };

// export { updateCartItem as updateQuantity };
// export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// // Load cart from localStorage for guests
// const loadGuestCart = () => {
//   try {
//     const stored = localStorage.getItem("guestCart");
//     return stored ? JSON.parse(stored) : [];
//   } catch {
//     return [];
//   }
// };

// const saveGuestCart = (cart) => {
//   localStorage.setItem("guestCart", JSON.stringify(cart));
// };

// const initialState = loadGuestCart();

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     setCart: (state, action) => action.payload,
//     addToCartLocal: (state, action) => {
//       let item = action.payload;

//       // ✅ Normalize backend cart item structure
//       if (item.product) {
//         item = {
//           id: item.id, // cart item id
//           title: item.product.title,
//           price: item.product.price,
//           cover_image_url: item.product.cover_image_url,
//           quantity: item.quantity,
//         };
//       }

//       const existing = state.find((i) => i.id === item.id);
//       if (existing) {
//         existing.quantity += item.quantity || 1;
//       } else {
//         state.push({ ...item, quantity: item.quantity || 1 });
//       }
//       saveGuestCart(state);
//     },
//     removeFromCartLocal: (state, action) => {
//       const updated = state.filter((i) => i.id !== action.payload);
//       saveGuestCart(updated);
//       return updated;
//     },
//     clearCartLocal: () => {
//       saveGuestCart([]);
//       return [];
//     },
//   },
// });

// export const { setCart, addToCartLocal, removeFromCartLocal, clearCartLocal } =
//   cartSlice.actions;

// // Thunks
// export const fetchCart = () => async (dispatch) => {
//   try {
//     const res = await fetch("http://localhost:5000/api/cart", {
//       credentials: "include",
//     });
//     if (!res.ok) throw new Error("Failed to fetch cart");
//     const data = await res.json();
//     dispatch(setCart(data));
//   } catch {
//     const guestCart = loadGuestCart();
//     dispatch(setCart(guestCart));
//   }
// };

// export const addToCart = (productId, quantity = 1) => async (dispatch) => {
//   try {
//     const res = await fetch("http://localhost:5000/api/cart", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ product_id: productId, quantity }),
//     });

//     if (res.ok) {
//       const data = await res.json();
//       dispatch(addToCartLocal(data));
//     } else if (res.status === 401) {
//       const productRes = await fetch(`http://localhost:5000/api/products/${productId}`);
//       if (!productRes.ok) throw new Error("Failed to fetch product");
//       const productData = await productRes.json();

//       dispatch(
//         addToCartLocal({
//           id: productData.id,
//           title: productData.title,
//           price: productData.price,
//           cover_image_url: productData.cover_image_url,
//           quantity,
//         })
//       );
//     } else {
//       throw new Error("Failed to add to cart");
//     }
//   } catch {
//     dispatch(addToCartLocal({ id: productId, quantity }));
//   }
// };

// export const updateCartItem = (itemId, quantity) => async (dispatch, getState) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ quantity }),
//     });
//     if (res.ok) {
//       const data = await res.json();
//       dispatch(addToCartLocal(data));
//     } else {
//       const state = getState();
//       const item = state.cart.find((i) => i.id === itemId);
//       if (item) {
//         dispatch(addToCartLocal({ ...item, quantity }));
//       } else {
//         dispatch(addToCartLocal({ id: itemId, quantity }));
//       }
//     }
//   } catch {
//     const state = getState();
//     const item = state.cart.find((i) => i.id === itemId);
//     if (item) {
//       dispatch(addToCartLocal({ ...item, quantity }));
//     } else {
//       dispatch(addToCartLocal({ id: itemId, quantity }));
//     }
//   }
// };

// export const removeFromCart = (itemId) => async (dispatch) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
//       method: "DELETE",
//       credentials: "include",
//     });
//     if (res.ok) {
//       dispatch(removeFromCartLocal(itemId));
//     } else {
//       dispatch(removeFromCartLocal(itemId));
//     }
//   } catch {
//     dispatch(removeFromCartLocal(itemId));
//   }
// };

// export const clearCart = () => async (dispatch) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/clear`, {
//       method: "DELETE",
//       credentials: "include",
//     });
//     if (res.ok) dispatch(clearCartLocal());
//     else dispatch(clearCartLocal());
//   } catch {
//     dispatch(clearCartLocal());
//   }
// };

// export { updateCartItem as updateQuantity };
// export default cartSlice.reducer;





//-----   Guest works add to cart

// import { createSlice } from "@reduxjs/toolkit";

// // Load cart from localStorage for guests
// const loadGuestCart = () => {
//   try {
//     const stored = localStorage.getItem("guestCart");
//     return stored ? JSON.parse(stored) : [];
//   } catch {
//     return [];
//   }
// };

// const saveGuestCart = (cart) => {
//   localStorage.setItem("guestCart", JSON.stringify(cart));
// };

// const initialState = loadGuestCart();

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     setCart: (state, action) => action.payload,
//     addToCartLocal: (state, action) => {
//       let item = action.payload;

//       // Normalize backend cart item structure
//       if (item.product) {
//         item = {
//           id: item.id, // cart item id from backend
//           title: item.product.title,
//           price: item.product.price,
//           cover_image_url: item.product.cover_image_url,
//           quantity: item.quantity,
//         };
//       } else {
//         // Ensure guest item has all required fields
//         item = {
//           id: item.id || item.productId,
//           title: item.title || "Product",
//           price: item.price || 0,
//           cover_image_url: item.cover_image_url || "",
//           quantity: item.quantity || 1,
//         };
//       }

//       const existing = state.find((i) => i.id === item.id);
//       if (existing) {
//         existing.quantity += item.quantity;
//       } else {
//         state.push(item);
//       }

//       saveGuestCart(state);
//     },
//     removeFromCartLocal: (state, action) => {
//       const updated = state.filter((i) => i.id !== action.payload);
//       saveGuestCart(updated);
//       return updated;
//     },
//     clearCartLocal: () => {
//       saveGuestCart([]);
//       return [];
//     },
//   },
// });

// export const { setCart, addToCartLocal, removeFromCartLocal, clearCartLocal } =
//   cartSlice.actions;

// // Thunks
// export const fetchCart = () => async (dispatch) => {
//   try {
//     const res = await fetch("http://localhost:5000/api/cart", {
//       credentials: "include",
//     });
//     if (!res.ok) throw new Error("Failed to fetch cart");
//     const data = await res.json();
//     dispatch(setCart(data));
//   } catch {
//     const guestCart = loadGuestCart();
//     dispatch(setCart(guestCart));
//   }
// };

// export const addToCart = (productId, quantity = 1) => async (dispatch) => {
//   try {
//     const res = await fetch("http://localhost:5000/api/cart", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ product_id: productId, quantity }),
//     });

//     if (res.ok) {
//       const data = await res.json();
//       dispatch(addToCartLocal(data));
//     } else if (res.status === 401) {
//       // Guest user fallback
//       const productRes = await fetch(`http://localhost:5000/api/products/${productId}`);
//       if (!productRes.ok) throw new Error("Failed to fetch product");
//       const productData = await productRes.json();

//       dispatch(
//         addToCartLocal({
//           id: productData.id,
//           title: productData.title,
//           price: productData.price,
//           cover_image_url: productData.cover_image_url,
//           quantity,
//         })
//       );
//     } else {
//       throw new Error("Failed to add to cart");
//     }
//   } catch {
//     // Final fallback for guests
//     dispatch(
//       addToCartLocal({
//         id: productId,
//         title: "Product",
//         price: 0,
//         cover_image_url: "",
//         quantity,
//       })
//     );
//   }
// };

// export const updateCartItem = (itemId, quantity) => async (dispatch, getState) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ quantity }),
//     });
//     if (res.ok) {
//       const data = await res.json();
//       dispatch(addToCartLocal(data));
//     } else {
//       const state = getState();
//       const item = state.cart.find((i) => i.id === itemId);
//       if (item) dispatch(addToCartLocal({ ...item, quantity }));
//       else dispatch(addToCartLocal({ id: itemId, quantity }));
//     }
//   } catch {
//     const state = getState();
//     const item = state.cart.find((i) => i.id === itemId);
//     if (item) dispatch(addToCartLocal({ ...item, quantity }));
//     else dispatch(addToCartLocal({ id: itemId, quantity }));
//   }
// };

// export const removeFromCart = (itemId) => async (dispatch) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
//       method: "DELETE",
//       credentials: "include",
//     });
//     dispatch(removeFromCartLocal(itemId));
//   } catch {
//     dispatch(removeFromCartLocal(itemId));
//   }
// };

// export const clearCart = () => async (dispatch) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/clear`, {
//       method: "DELETE",
//       credentials: "include",
//     });
//     dispatch(clearCartLocal());
//   } catch {
//     dispatch(clearCartLocal());
//   }
// };

// export { updateCartItem as updateQuantity };
// export default cartSlice.reducer;




// Guest Works best

// import { createSlice } from "@reduxjs/toolkit";

// // Load cart from localStorage for guests
// const loadGuestCart = () => {
//   try {
//     const stored = localStorage.getItem("guestCart");
//     return stored ? JSON.parse(stored) : [];
//   } catch {
//     return [];
//   }
// };

// const saveGuestCart = (cart) => {
//   localStorage.setItem("guestCart", JSON.stringify(cart));
// };

// const initialState = loadGuestCart();

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     setCart: (state, action) => action.payload,
//     addToCartLocal: (state, action) => {
//       let item = action.payload;

//       // Normalize backend cart item structure
//       if (item.product) {
//         item = {
//           id: item.id, // backend cart item id
//           title: item.product.title,
//           price: item.product.price,
//           cover_image_url: item.product.cover_image_url,
//           quantity: item.quantity,
//         };
//       } else {
//         // Ensure guest or logged-in normalized item has required fields
//         item = {
//           id: item.id || item.productId,
//           title: item.title || "Product",
//           price: item.price || 0,
//           cover_image_url: item.cover_image_url || "",
//           quantity: item.quantity || 1,
//           cartId: item.cartId || null, // backend ID if logged-in
//         };
//       }

//       const existing = state.find((i) => i.id === item.id);
//       if (existing) {
//         existing.quantity += item.quantity;
//       } else {
//         state.push(item);
//       }

//       saveGuestCart(state);
//     },
//     removeFromCartLocal: (state, action) => {
//       const updated = state.filter((i) => i.id !== action.payload);
//       saveGuestCart(updated);
//       return updated;
//     },
//     clearCartLocal: () => {
//       saveGuestCart([]);
//       return [];
//     },
//   },
// });

// export const { setCart, addToCartLocal, removeFromCartLocal, clearCartLocal } =
//   cartSlice.actions;

// // Thunks
// export const fetchCart = () => async (dispatch) => {
//   try {
//     const res = await fetch("http://localhost:5000/api/cart", {
//       credentials: "include",
//     });
//     if (!res.ok) throw new Error("Failed to fetch cart");
//     const data = await res.json();
//     dispatch(setCart(data));
//   } catch {
//     const guestCart = loadGuestCart();
//     dispatch(setCart(guestCart));
//   }
// };

// export const addToCart = (productId, quantity = 1) => async (dispatch) => {
//   try {
//     const res = await fetch("http://localhost:5000/api/cart", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ product_id: productId, quantity }),
//     });

//     if (res.ok) {
//       const data = await res.json();
//       // Merge backend ID with product info
//       dispatch(
//         addToCartLocal({
//           id: data.product_id || productId,
//           title: data.title || "Product",
//           price: data.price || 0,
//           cover_image_url: data.cover_image_url || "",
//           quantity: data.quantity || 1,
//           cartId: data.id,
//         })
//       );
//     } else if (res.status === 401) {
//       // Guest fallback
//       const productRes = await fetch(`http://localhost:5000/api/products/${productId}`);
//       if (!productRes.ok) throw new Error("Failed to fetch product");
//       const productData = await productRes.json();

//       dispatch(
//         addToCartLocal({
//           id: productData.id,
//           title: productData.title,
//           price: productData.price,
//           cover_image_url: productData.cover_image_url,
//           quantity,
//         })
//       );
//     } else {
//       throw new Error("Failed to add to cart");
//     }
//   } catch {
//     // Final fallback for guests
//     dispatch(
//       addToCartLocal({
//         id: productId,
//         title: "Product",
//         price: 0,
//         cover_image_url: "",
//         quantity,
//       })
//     );
//   }
// };

// export const updateCartItem = (itemId, quantity) => async (dispatch, getState) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ quantity }),
//     });
//     if (res.ok) {
//       const data = await res.json();
//       dispatch(addToCartLocal(data));
//     } else {
//       const state = getState();
//       const item = state.cart.find((i) => i.id === itemId);
//       if (item) dispatch(addToCartLocal({ ...item, quantity }));
//       else dispatch(addToCartLocal({ id: itemId, quantity }));
//     }
//   } catch {
//     const state = getState();
//     const item = state.cart.find((i) => i.id === itemId);
//     if (item) dispatch(addToCartLocal({ ...item, quantity }));
//     else dispatch(addToCartLocal({ id: itemId, quantity }));
//   }
// };

// export const removeFromCart = (itemId) => async (dispatch) => {
//   try {
//     await fetch(`http://localhost:5000/api/cart/${itemId}`, {
//       method: "DELETE",
//       credentials: "include",
//     });
//     dispatch(removeFromCartLocal(itemId));
//   } catch {
//     dispatch(removeFromCartLocal(itemId));
//   }
// };

// export const clearCart = () => async (dispatch) => {
//   try {
//     await fetch(`http://localhost:5000/api/cart/clear`, {
//       method: "DELETE",
//       credentials: "include",
//     });
//     dispatch(clearCartLocal());
//   } catch {
//     dispatch(clearCartLocal());
//   }
// };

// export { updateCartItem as updateQuantity };
// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage for guests
const loadGuestCart = () => {
  try {
    const stored = localStorage.getItem("guestCart");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveGuestCart = (cart) => {
  localStorage.setItem("guestCart", JSON.stringify(cart));
};

const initialState = loadGuestCart();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => action.payload,

    addToCartLocal: (state, action) => {
      const id = action.payload.id || action.payload.productId;
      const quantity = Number(action.payload.quantity || 1);

      const existing = state.find((i) => i.id === id);
      if (existing) {
        // ✅ trust backend and replace, not stack
        existing.quantity = quantity;
        existing.price = action.payload.price ?? existing.price;
        existing.title = action.payload.title ?? existing.title;
        existing.cover_image_url =
          action.payload.cover_image_url ?? existing.cover_image_url;
        existing.cartId = action.payload.cartId ?? existing.cartId;
      } else {
        state.push({
          id,
          title: action.payload.title || "Product",
          price: action.payload.price || 0,
          cover_image_url: action.payload.cover_image_url || "",
          quantity,
          cartId: action.payload.cartId || null,
        });
      }

      saveGuestCart(state);
    },

    removeFromCartLocal: (state, action) => {
      const updated = state.filter((i) => i.id !== action.payload);
      saveGuestCart(updated);
      return updated;
    },

    clearCartLocal: () => {
      saveGuestCart([]);
      return [];
    },
  },
});

export const { setCart, addToCartLocal, removeFromCartLocal, clearCartLocal } =
  cartSlice.actions;

// Thunks
export const fetchCart = () => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5000/api/cart", {
      credentials: "include",
    });
    if (!res.ok) throw new Error("Failed to fetch cart");
    const data = await res.json();
    dispatch(setCart(data));
  } catch {
    const guestCart = loadGuestCart();
    dispatch(setCart(guestCart));
  }
};

export const addToCart =
  (productId, quantity = 1) => async (dispatch, getState) => {
    const state = getState();
    const existingItem = state.cart.find((i) => i.id === productId);

    try {
      const res = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ product_id: productId, quantity }),
      });

      if (!res.ok) throw new Error("Failed to add to cart");
      const data = await res.json();

      // ✅ use backend's actual quantity
      dispatch(
        addToCartLocal({
          id: data.product_id || productId,
          title: data.title || "Product",
          price: data.price || 0,
          cover_image_url: data.cover_image_url || "",
          quantity: data.quantity, // ✅ trust backend
          cartId: data.id,
        })
      );
    } catch {
      // Guest fallback
      if (!existingItem) {
        const productRes = await fetch(
          `http://localhost:5000/api/products/${productId}`
        );
        const productData = await productRes.json();

        dispatch(
          addToCartLocal({
            id: productData.id,
            title: productData.title,
            price: productData.price,
            cover_image_url: productData.cover_image_url,
            quantity,
          })
        );
      } else {
        dispatch(
          addToCartLocal({
            ...existingItem,
            quantity: existingItem.quantity + quantity, // ✅ increment guest cart properly
          })
        );
      }
    }
  };

export const updateCartItem =
  (itemId, quantity) => async (dispatch, getState) => {
    try {
      const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ quantity }),
      });
      if (res.ok) {
        const data = await res.json();
        dispatch(
          addToCartLocal({
            id: data.product_id,
            title: data.title,
            price: data.price,
            cover_image_url: data.cover_image_url,
            quantity: data.quantity, // ✅ trust backend
            cartId: data.id,
          })
        );
      } else {
        const state = getState();
        const item = state.cart.find((i) => i.id === itemId);
        if (item)
          dispatch(addToCartLocal({ ...item, quantity }));
        else
          dispatch(addToCartLocal({ id: itemId, quantity }));
      }
    } catch {
      const state = getState();
      const item = state.cart.find((i) => i.id === itemId);
      if (item) dispatch(addToCartLocal({ ...item, quantity }));
      else dispatch(addToCartLocal({ id: itemId, quantity }));
    }
  };

export const removeFromCart = (itemId) => async (dispatch) => {
  try {
    await fetch(`http://localhost:5000/api/cart/${itemId}`, {
      method: "DELETE",
      credentials: "include",
    });
    dispatch(removeFromCartLocal(itemId));
  } catch {
    dispatch(removeFromCartLocal(itemId));
  }
};

export const clearCart = () => async (dispatch) => {
  try {
    await fetch(`http://localhost:5000/api/cart/clear`, {
      method: "DELETE",
      credentials: "include",
    });
    dispatch(clearCartLocal());
  } catch {
    dispatch(clearCartLocal());
  }
};

export { updateCartItem as updateQuantity };
export default cartSlice.reducer;