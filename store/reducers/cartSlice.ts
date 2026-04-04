import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number | string;
    name: string;
    qty: number;
    sum: number;
    price: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existing = state.items.find((item) => item.id === action.payload.id);
            if (existing) {
                existing.qty += 1;
                existing.sum += action.payload.price;
            } else {
                state.items.push({ ...action.payload, qty: 1, sum: action.payload.price });
            }
        },

        removeFromCart: (state, action: PayloadAction<{ id: number | string; price: number }>) => {
            const existing = state.items.find((item) => item.id === action.payload.id);
            if (!existing) return;

            if (existing.qty > 1) {
                existing.qty -= 1;
                existing.sum -= action.payload.price;
            } else {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            }
        },

        deleteFromCart: (state, action: PayloadAction<{ id: number | string }>) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;