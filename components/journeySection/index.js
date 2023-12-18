import React from 'react';
import Image from 'next/image';
import { Grid, Box, Container } from '@mui/material';
import aboutImage from '@/components/assets/about.jpg';
import styles from './style.module.css';

const JourneySection = () => {
	return (
		<div className={styles.jSection}>
			<h1>Your journey starts here</h1>
			<Grid direction="row" justifyContent={'center'} container>
				<Grid className={styles.journey1} item md={3} lg={3} sm={12} xs={12}>
					<p className={styles.subHeading}>HELP ME CHOOSE</p>
					<p className={styles.heading}>Build your lenses</p>
					<button className={styles.blueBtn}>Start</button>
					<Image src={aboutImage} alt="lenses" width={300} height={300} />
				</Grid>
				<Grid className={styles.journey2} item md={3} lg={3} sm={12} xs={12}>
					<p className={styles.subHeading}>GET LENSES</p>
					<p className={styles.heading}>Book an eye test</p>
					<button className={styles.blueBtn}>Book now</button>
					<Image src={aboutImage} alt="lenses" width={300} height={300} />
				</Grid>
			</Grid>
		</div>
	);
};
export default JourneySection;
