import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';

const roortReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

export type RootState = ReturnType<typeof roortReducer>;
export default roortReducer;