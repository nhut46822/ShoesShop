import React from 'react';
import PropTypes from 'prop-types';
import { Images } from '../../assets';
import Button from '../Button/Button';
import { useEffect, useRef } from 'react';

function SliderContent({ isSliderChange }) {
	const sliderContentEl = useRef();

	useEffect(() => {
		if (isSliderChange) {
			sliderContentEl.current.classList.add('active');
			return () => {
				sliderContentEl.current.classList.remove('active');
			};
		}
	}, [isSliderChange]);

	return (
		<div className="slider-content">
			<div ref={sliderContentEl} className={`slider-content__wrap `}>
				<div className="wrap__img">
					<img src={Images.slider_logo} alt="" />
				</div>
				<div className="wrap__title-content">
					Academy
					<p>of</p>
					sport
				</div>
				<h1 className="wrap__main-content">SPORTS CENTER JAMES</h1>
				<div className="wrap__sub-content">
					Lorem Ipsum is simply dummy text of the printing
				</div>
				<Button className="btn-slider btn-white">read more</Button>
			</div>
		</div>
	);
}

SliderContent.propTypes = {};

export default SliderContent;
