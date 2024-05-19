import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../initialState";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartItem[],
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        const quantityToAdd = action.payload.quantity || 1;
        state.push({ ...action.payload, quantity: quantityToAdd });
      }
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      console.log('Removing item with id:', action.payload);
      state = state.filter((item) => item.id !== action.payload);
    },
    updateCartItem: (state, action: PayloadAction<CartItem>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeCartItem, updateCartItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
