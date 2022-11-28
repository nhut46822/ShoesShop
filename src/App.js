import { useSelector } from 'react-redux';
import Home from './pages/Home';

function App() {
	const testArr = useSelector((state) => state.product.arrProduct);

	console.log({ testArr });

	return (
		<div className="App">
			<Home />
		</div>
	);
}

export default App;
