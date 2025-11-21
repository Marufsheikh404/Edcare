import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    items: [],
    totalQuantity: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existing = state.items.find(i => i.id === newItem.id);

            if (existing) {
                toast.warning("This item is already in your cart!");
                return;
            }
            else {
                state.items.push({ ...newItem, quantity: 1 });
                toast.success("Added to Cart!");
            }
            // update
            state.totalQuantity = state.items.reduce((s, i) => s + i.quantity, 0);
        }
    }
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
