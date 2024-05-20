
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface AppState {
    products: Product[];
    cart: CartItem[];
    user: User | null;
    loading: boolean;
    error: string | null;
}

export const initialState: AppState = {
    products: [],
    cart: [],
    user: null,
    loading: false,
    error: null,
};