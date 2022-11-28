import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		current: {},
	},
	reducers: {
		addUser: (state, action) => {
			return state;
		},
		deleteUser: (state, action) => {
			return state;
		},
	},
});

const { actions, reducer: userReducer } = userSlice;
export const { addProduct, deleteProduct } = actions;
export default userReducer;
