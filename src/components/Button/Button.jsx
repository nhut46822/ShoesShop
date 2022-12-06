import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, className }) {
	return <button className={`${className}  btn-common`}>{children}</button>;
}

Button.propTypes = {};

export default Button;
