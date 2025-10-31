import { createReducer, on } from "@ngrx/store";
import { addProductToCart, removeProductFromCart, clearCart } from "./cart.actions";
import { initialState } from "./cart.state";

export const cartReducer = createReducer (
    initialState,
    on(addProductToCart, (state, { product }) => {
        const existingItem = state.items.find(item => item.id === product.id);
        let newItems;

        if (existingItem) {
            newItems = state.items.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            newItems = [...state.items, { ...product, quantity: 1 }];
        }

        return {
            ...state,
            items: newItems,
            total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        };
    }),
    on(removeProductFromCart, (state, { productId }) => {
        const newItems = state.items.filter(item => item.id !== productId);
        return {
            ...state,
            items: newItems,
            total: newItems.reduce((sum, item) => sum + item.price, 0),
        };
    }),
    on(clearCart, state => initialState)
);
