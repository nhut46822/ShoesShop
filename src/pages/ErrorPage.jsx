import React from 'react';
import PropTypes from 'prop-types';

// import { useRouteError } from 'react-router-dom';

function ErrorPage(props) {
	// const error = useRouteError();
	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
		</div>
	);
}

ErrorPage.propTypes = {};

export default ErrorPage;
