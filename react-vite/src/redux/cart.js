import { createSlice } from "@reduxjs/toolkit";

// load cart from localStorage if it exists
const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1; // if already in cart, increase quantity
      } else {
        state.push({ ...item, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const newState = state.filter((i) => i.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find((i) => i.id === id);
      if (item) item.quantity = quantity;

      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: () => {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;