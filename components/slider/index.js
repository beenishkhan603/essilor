'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Navigation } from 'swiper/modules';
import '../global.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from './style.module.css';

export default function Slider() {
	return (
		<div
			style={{ paddingBottom: '50px', background: '#18b1ae' }}
			className="homepageSlider"
		>
			{' '}
			<Swiper
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
				slidesPerView={1}
			>
				<SwiperSlide>
					<div
						style={{
							background: '#18b1ae',
							width: '100%',
							display: 'flex',
						}}
					>
						<div className={style.HeroBannerStatic}>
							<div className={style.HeroBannerStaticContent}>
								<p className={style.heading}>Essilor Experts</p>

								<p className={style.text}>
									{`Finding the right pair of glasses isn't always easy. You need
                  to choose a frame that you like and lenses that suit your
                  lifestyle. Finding the right eye care professional to advise
                  you along the way makes the process much smoother.`}
								</p>
								<button className={style.discoverBtn}>Find an optician</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						style={{
							width: '100%',
							display: 'flex',
						}}
					>
						<div className={style.HeroBannerStatic2}>
							<div className={style.HeroBannerStaticContent}>
								<div>
									<p className={style.heading}>Choosing a</p>
									<p className={style.heading}>committed brand</p>
								</div>

								<p className={style.text}>
									{`Making the choice to trust Essilor® solutions isn't just
                  choosing the world leader in prescription glasses – it's
                  choosing the lenses of a committed brand with a mission: see
                  more to be more. With a long track record of French design and
                  lens fabrication, dating back to 1849, our unique capacity for
                  innovation allows us to continually develop the best vision
                  solutions and to respond to all needs.`}
								</p>
								<button className={style.discoverBtn}>Find an optician</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
