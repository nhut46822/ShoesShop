import { useSelector } from 'react-redux';

import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import Cart from './pages/Cart';
import Category from './pages/Category';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

import Layout from './pages/Layout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="/" element={<Home />} />
			<Route path="category" element={<Category />} />
			<Route path="cart" element={<Cart />} />
			<Route path="*" element={<ErrorPage />} />
		</Route>
	)
);

function App() {
	const testArr = useSelector((state) => state.product.arrProduct);

	console.log({ testArr });

	return <RouterProvider router={router} />;
}

export default App;
