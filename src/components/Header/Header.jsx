import React from 'react';
import PropTypes from 'prop-types';

import { Images } from '../../assets/index';

function Header(props) {
	return (
		<div className="header">
			<div className="container">
				<nav className="header-wrap">
					<div className="header-img">
						<img src={Images.logo} alt="" />
					</div>
					<div className="header-navigation">
						<div>Home</div>
						<div>Women</div>
						<div>Man</div>
					</div>
				</nav>
			</div>
		</div>
	);
}

Header.propTypes = {};

export default Header;
