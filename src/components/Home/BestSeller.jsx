import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';

function BestSeller(props) {
	return (
		<div className="best-seller">
			<div className="row best-seller__wrap no-gutters ">
				<div className="col l-2-4">
					<div className="best-seller__left-item">
						<h3>Best seller</h3>
						<p>
							Subcribe to the Lorem ipsum dolor sit amet,
							consectetuer adipiscing elit, sed diam nonummy nibh
							euismod tincidunt ut laoreet dolore magna aliquam
							erat
						</p>
					</div>
				</div>
				<div className="col l-9-4">
					<div className="row no-gutters">
						<div className="col l-2-4">
							<Product />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

BestSeller.propTypes = {};

export default BestSeller;
