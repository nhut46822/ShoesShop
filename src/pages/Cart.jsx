import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
function Cart(props) {
	console.log('Cart');
	return (
		<div>
			Cart
			<div>
				<Outlet />
			</div>
		</div>
	);
}

Cart.propTypes = {};

export default Cart;
