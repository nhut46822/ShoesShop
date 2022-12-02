import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import { Images } from '../../assets/index';

SwiperCore.use([Navigation]);

function Slider(props) {
	return (
		<div className="slider">
			<Swiper
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
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
		</div>
	);
}

Slider.propTypes = {};

export default Slider;
