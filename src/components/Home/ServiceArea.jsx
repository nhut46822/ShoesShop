import React from 'react';
import PropTypes from 'prop-types';
import { Images } from '../../assets';

function ServiceArea(props) {
	return (
		<div className="service-area">
			<div className="grid wide">
				<div className="row">
					<div className="col l-4 m-6">
						<div className="service-item__wrap">
							<div className="service-img">
								<img src={Images.service1} alt="" />
							</div>
							<div className="service-item__content">
								<h6>FREE SHIPPING</h6>
								<p>
									Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit, sed diam nonummy nibh.
								</p>
							</div>
						</div>
					</div>
					<div className="col l-4 m-6">
						<div className="service-item__wrap">
							<div className="service-img">
								<img src={Images.service1} alt="" />
							</div>
							<div className="service-item__content">
								<h6>FREE SHIPPING</h6>
								<p>
									Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit, sed diam nonummy nibh.
								</p>
							</div>
						</div>
					</div>
					<div className="col l-4 m-6">
						<div className="service-item__wrap">
							<div className="service-img">
								<img src={Images.service1} alt="" />
							</div>
							<div className="service-item__content">
								<h6>FREE SHIPPING</h6>
								<p>
									Lorem ipsum dolor sit amet, consectetuer
									adipiscing elit, sed diam nonummy nibh.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

ServiceArea.propTypes = {};

export default ServiceArea;
