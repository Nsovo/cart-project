import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "../../services/mockApi";
import { AppState, Product } from "../initialState";


/**
 * Represents the product slice of the application state.
 */
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [] as Product[],
    loading: false,
    error: null as string | null,
  } as AppState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch products';
      });
  },
});

// Fetches products asynchronously.
// TODO: fetch data from the back end
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await getProducts() as { data: Product[] };
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
});

export const { setProducts, addProduct } = productSlice.actions;
export default productSlice.reducer;
