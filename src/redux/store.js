import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import userReducer from './userSlice';

const rootReducer = {
	product: productReducer,
	user: userReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;
