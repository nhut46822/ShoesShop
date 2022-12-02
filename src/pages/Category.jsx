import React from 'react';
import PropTypes from 'prop-types';

import { Link, Outlet } from 'react-router-dom';
function Category(props) {
	console.log('Category');

	return (
		<div>
			Category
			<div>
				<Outlet />
			</div>
		</div>
	);
}

Category.propTypes = {};

export default Category;
