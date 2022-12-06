import React from 'react';
import PropTypes from 'prop-types';

import { Link, Outlet } from 'react-router-dom';
import Slider from '../components/Slider/Slider';
import ServiceArea from '../components/Home/ServiceArea';
import BestSeller from '../components/Home/BestSeller';

function Home(props) {
	// console.log('Home');
	return (
		<div className="home">
			<Slider />
			<ServiceArea />
			<BestSeller />
		</div>
	);
}

Home.propTypes = {};

export default Home;
