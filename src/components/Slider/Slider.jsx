import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import { Images } from '../../assets/index';
import SliderContent from './SliderContent';

// SwiperCore.use([Navigation, Autoplay]);

function Slider(props) {
	const [isSliderChange, setIsSliderChange] = useState(true);

	return (
		<>
			<div className="slider">
				<Swiper
					slidesPerView={1}
					onSlideChange={() => {
						setIsSliderChange(!isSliderChange);
					}}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					modules={[Autoplay, Navigation]}
					autoplay={{ delay: 10000, disableOnInteraction: false }}
				>
					<SwiperSlide>
						<div>
							<img src={Images.slider1} alt="Slider 1" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<img src={Images.slider2} alt="Slider 2" />
						</div>
					</SwiperSlide>
				</Swiper>
				<button className="swiper-button-next"></button>
				<button className="swiper-button-prev"></button>

				<SliderContent isSliderChange={isSliderChange} />
			</div>
		</>
	);
}

Slider.propTypes = {};

export default Slider;
