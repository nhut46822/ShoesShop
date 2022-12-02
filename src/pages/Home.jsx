import React from 'react';
import PropTypes from 'prop-types';

import { Link, Outlet } from 'react-router-dom';
import Slider from '../components/Slider/Slider';

function Home(props) {
	console.log('Home');
	return (
		<div className="home">
			<Slider />
		</div>
	);
}

Home.propTypes = {};

export default Home;
