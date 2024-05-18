import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../initialState";

const productSlice = createSlice({
  name: "products",
  initialState: [] as Product[],
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      return action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
  },
});

export const { setProducts, addProduct } = productSlice.actions;
export default productSlice.reducer;
