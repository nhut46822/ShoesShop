import React from 'react';
import PropTypes from 'prop-types';
import { Images } from '../../assets';

function Product(props) {
	return (
		<div className="product">
			<div className="product-img">
				<span>
					<img
						className="product-img-1"
						src={Images.product1}
						alt=""
					/>
					<img
						className="product-img-2"
						src={Images.product2}
						alt=""
					/>
				</span>
			</div>
			<div className="product-content">
				<p className="product-content__name">FUSCE ALIQUAM</p>
				<div className="product-content__info">
					<div className="product-content__price">$170.000</div>
					<div className="product-content__rating">
						<i className="fa fa-star"></i>
						<i className="fa fa-star"></i>
						<i className="fa fa-star"></i>
						<i className="fa fa-star"></i>
						<i className="fa fa-star-half-stroke"></i>
					</div>
				</div>
			</div>
			<div className="product-action">
				<div className="product-buy">
					<span>ADD TO CART</span>
				</div>
				<div className="product-favorite">
					<i class="fa-regular fa-heart"></i>
				</div>
			</div>
			<div className="product-sale">NEW</div>
		</div>
	);
}

Product.propTypes = {};

export default Product;
