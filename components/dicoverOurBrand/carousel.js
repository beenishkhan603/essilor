'use client';
import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../global.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App(props) {
	const { items } = props;
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		// Check if window is defined (to avoid SSR issues)
		if (typeof window !== 'undefined') {
			setIsMobile(window.innerWidth <= 480);

			// Add event listener to update isMobile on window resize
			const handleResize = () => {
				setIsMobile(window.innerWidth <= 480);
			};

			window.addEventListener('resize', handleResize);

			// Remove event listener on component unmount
			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	}, []);

	return (
		<>
			<Swiper
				slidesPerView={isMobile ? 'auto' : 4}
				centeredSlides={isMobile ? true : false}
				spaceBetween={30}
				style={{
					'--swiper-pagination-color': '#fff',
					'--swiper-navigation-size': '30px',
				}}
				pagination={{
					clickable: true,
				}}
				navigation={!isMobile}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				{items.map((item, index) => (
					<SwiperSlide key={index}>{item}</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
