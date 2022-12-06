import React from 'react';
import PropTypes from 'prop-types';

import { Images } from '../../assets/index';
import { Link } from 'react-router-dom';

const navPages = [
	{
		path: '/',
		name: 'home',
	},
	{
		path: '/category',
		name: 'category',
	},
	{
		path: '/about',
		name: 'about',
	},
	{
		path: '/blog',
		name: 'blog',
	},
	{
		path: '/cart',
		name: 'cart',
	},
];

function Header(props) {
	return (
		<div className="header">
			<div className="container">
				<nav className="header-wrap">
					<div className="header-img">
						<Link to="/">
							<img src={Images.logo} alt="" />
						</Link>
						<div className="header-img__right">
							<p>Call phone: +2414259357</p>
							<p>Address: 1017 Chapote Ter, Andice, LosAngeles</p>
						</div>
					</div>
					<div className="header-navigation">
						{navPages.map((item, index) => (
							<Link to={item.path} key={`item.name${index}`}>
								<div
									className={`header-navigation__item header-navigation__${item.name} txt-hover`}
								>
									{item.name}
								</div>
							</Link>
						))}
					</div>
					<div className="header__login-user">
						<div className="header__login-user__item header-register txt-hover">
							Đăng ký
						</div>
						<p className="header__login-user__spacing">/</p>
						<div className="header__login-user__item header-login txt-hover">
							Đăng nhập
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}

Header.propTypes = {};

export default Header;
