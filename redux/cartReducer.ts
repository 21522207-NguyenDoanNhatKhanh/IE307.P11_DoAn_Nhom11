import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductTypes } from '~/src/constants/types';

interface CartState {
  items: ProductTypes[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductTypes>) => {
      state.items.push(action.payload);
    },
    // other cart actions like remove, etc.
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
