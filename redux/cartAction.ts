import { createAction } from '@reduxjs/toolkit';
import { ProductTypes } from '~/src/constants/types';

// Action to add item to cart
export const addToCart = (item: ProductTypes) => ({
  type: 'cart/addToCart',
  payload: item,
});
