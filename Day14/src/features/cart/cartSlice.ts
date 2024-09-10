import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    numberOfItems : 0
}

const cartSlice = createSlice({
    name: 'cart',
initialState,
reducers: {
    increaseCount: (state, action: PayloadAction<number>) => {
        state.numberOfItems = state.numberOfItems + action.payload;
        // state.numberOfItems = state.numberOfItems + 1 //this also works without action.payload
    }

}})

export default cartSlice
export const { increaseCount } = cartSlice.actions