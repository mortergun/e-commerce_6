import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlice = createSlice({
  name: 'products',
  initialState: null,
  reducers: {
    setProductsG: (state, action) => action.payload
  }
})

export const { setProductsG } = productsSlice.actions;

export default productsSlice.reducer;

export const getAllProductsThunk = () => dispatch => {
  const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
  axios.get(url)
    .then(res => dispatch(setProductsG(res.data)))
    .catch(err => console.error(err))
}

export const getFilteredProductsThunk = (id) => dispatch => {
  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
  axios.get(url)
    .then(res => dispatch(setProductsG(res.data)))
    .catch(err => console.error(err))
}