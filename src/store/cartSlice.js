import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existing = state.items.find(i => i.id === newItem.id);

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }

            state.totalQuantity = state.items.reduce((s, i) => s + i.quantity, 0);
            state.totalAmount = state.items.reduce((s, i) => s + i.price * i.quantity,0);
        }
    }
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
