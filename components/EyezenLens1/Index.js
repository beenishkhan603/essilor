import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import Carousel from '../dicoverOurBrand/carousel';
import DiscoverCards from '../dicoverOurBrand/discoverCards';
import hamImg from '../assets/hamilton1.jpg'
import nevImg from '../assets/nevis.jpg'
import { Box } from '@mui/material';

export default function EyezenLens(props) {
	const { title } = props;

	const items = [
		<div>
			<p className={styles.headingMbl}>Protect your eyes</p>
			<DiscoverCards
				disc={'Advanced filtration technology'}
				logo={
					'https://media.essilor.com/cms/caas/v1/media/108820/data/picture/d30ed6b7f52abd6faae16f80d9c03a09.png'
				}
				image={
					'https://media.essilor.com/cms/caas/v1/media/108848/data/picture/0a32bbb2935711109896f3b653966f11.jpg'
				}
				productbtn={true}
			/>
		</div>,
		<div>
			<p className={styles.headingMbl}>Protect your eyes</p>
			<DiscoverCards
				disc={'Goes beyond protection'}
				logo={
					'	https://media.essilor.com/cms/caas/v1/media/108832/data/picture/a68cfc95885bb96717cc4e2b92b56624.png'
				}
				image={
					'https://media.essilor.com/cms/caas/v1/media/108850/data/picture/a483b831bc5b9c39f55d3766f8d22e7d.png'
				}
				productbtn={true}
			/>
		</div>,
		<div>
			<p className={styles.headingMbl}>Protect your eyes</p>
			<DiscoverCards
				disc={'Light Intelligent Technology'}
				logo={
					null
				}
				image={
					nevImg
				}
				productbtn={true}
			/>
		</div>,
		<div>
			<p className={styles.headingMbl}>Enhance your eyes</p>
			<DiscoverCards
				disc={`Your lenses' invisible shield`}
				logo={
					null
				}
				image={
					hamImg
				}
				productbtn={true}
			/>
		</div>,
	];
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
			<Box width={'90%'}>
				<div className={styles.completeLen}>
					<h1>{title}</h1>
					{isMobile ? null : (
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<h3>Protect your eyes</h3>
							<h3>Enhance your eyes</h3>
						</div>
					)}
				</div>
			</Box>
			{isMobile ? (
				<Box
					sx={{
						display: 'flex',
						width: '100%',
					}}
				>
					<Carousel items={items} />
				</Box>
			) : (
				<Box
					sx={{
						display: 'flex',
						gap: '2rem',
						justifyContent: 'space-between',
					}}
					alignItems={{
						lg: 'flex-start',
						sm: 'center',
						md: 'flex-start',
						xs: 'center',
					}}
					flexDirection={{
						lg: 'row',
						md: 'row',
						sm: 'column',
						xs: 'column',
					}}
					className={styles.completeLenMedia}
				>
					<DiscoverCards
						disc={'The new generation of single vision lenses'}
						logo={
							'https://media.essilor.com/cms/caas/v1/media/108820/data/picture/d30ed6b7f52abd6faae16f80d9c03a09.png'
						}
						image={
							'https://media.essilor.com/cms/caas/v1/media/108848/data/picture/0a32bbb2935711109896f3b653966f11.jpg'
						}
						productbtn={true}
					/>
					<DiscoverCards
						disc={'Mastering sharpness instantly'}
						logo={
							'	https://media.essilor.com/cms/caas/v1/media/108832/data/picture/a68cfc95885bb96717cc4e2b92b56624.png'
						}
						image={
							'https://media.essilor.com/cms/caas/v1/media/108850/data/picture/a483b831bc5b9c39f55d3766f8d22e7d.png'
						}
						productbtn={true}
					/>
					<DiscoverCards
						disc={'Advanced filtration technology'}
						logo={
							null
						}
						image={
							nevImg
						}
						productbtn={true}
					/>
					<DiscoverCards
						disc={`Your lenses' invisible shield`}
						logo={
							null
						}
						image={
							hamImg
						}
						productbtn={true}
					/>
				</Box>
			)}
		</>
	);
}
