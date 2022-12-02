import React from 'react';
import PropTypes from 'prop-types';

import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Layout(props) {
	return (
		<>
			<Header />
			<div>
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

Layout.propTypes = {};

export default Layout;
