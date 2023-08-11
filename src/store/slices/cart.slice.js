import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfigToken from '../../utils/getConfigToken';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCartG: (state, action) => action.payload,
    deleteCartG: (state, action) => state.filter(prod => prod.id !== action.payload),
    updateCartG: (state, action) => state.map(e => e.id === id ? action.payload : e)
  }
})

export const { setCartG, addCartG, deleteCartG, updateCartG } = cartSlice.actions;

export default cartSlice.reducer;

export const getCartThunk = () => dispatch => {
  const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
  axios.get(url, getConfigToken())
    .then(res => dispatch(setCartG(res.data)))
    .catch(err => console.error(err))
}