import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
	name: 'product',
	initialState: {
		current: {},
		arrProduct: ['a', 'b', 'c'],
	},
	reducers: {
		addProduct: (state, action) => {
			return state;
		},
		deleteProduct: (state, action) => {
			return state;
		},
	},
});

const { actions, reducer: productReducer } = productSlice;
export const { addProduct, deleteProduct } = actions;
export default productReducer;
