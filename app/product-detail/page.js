import React from 'react';
import Header from '../../components/header';
import Image from 'next/image';
import cupIcon from '../../components/assets/cupIcon.svg';
import eyexen from '../../components/assets/eyexen.webp';
import BenifitsSummary from '../../components/benifitsSummary';
import LenzDifference from '../../components/lenzDifference';
import EyezenLens from '../../components/EyezenLens';
import GridComponent from '../../components/GridComponent';
import JourneyCard from '../../components/JourneyCard';
import styles from './style.module.css';
import { Container, Box, Grid } from '@mui/material';
import Footer from '@/components/footer';

const Page = () => {
	return (
		<>
			<Header />
			<div className={styles.header}>
				<div className={styles.header_content}>
					<div className={styles.first_row}>
						<Image height={32} width={32} src={cupIcon} alt="icon" />
						<div style={{ fontWeight: '700', color: '#fff' }}>
							Correct your vision
						</div>
					</div>
					<div className={styles.second_row}>
						<Image src={eyexen} alt="eyexen logo" />
					</div>
					<div className={styles.third_row}>
						<p className={styles.descrip}>
							Essilor® Eyezen® lenses are optimised single vision lenses that
							relax your eyes so you can keep up in a connected world.
						</p>
					</div>
				</div>
			</div>
			<BenifitsSummary />
			<LenzDifference />
			<Container>
				<GridComponent />
			</Container>
			<Container sx={{ padding: '10px', marginTop: '1rem' }}>
				<div className={styles.completeLen}>
					<h1>Complete your Eyezen lenses with</h1>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<h3>Protect your eyes</h3>
						<h3>Enhance your eyes</h3>
					</div>
				</div>
				<Box sx={{ display: 'flex', gap: '2rem' }}>
					<EyezenLens
						imrUrl={'/img/cardImage.avif'}
						bandColor={'red'}
						context={'Advanced filtartion'}
						brandLogo={'/img/eyezen.avif'}
					></EyezenLens>
					<EyezenLens
						imrUrl={'/img/cardImage.avif'}
						bandColor={'blue'}
						context={'Goes beyond protection'}
						brandLogo={'/img/blue_filler_system.avif'}
					></EyezenLens>
					<EyezenLens
						imrUrl={'/img/cardImage.avif'}
						bandColor={'green'}
						context={'Light Intelligent Technology'}
						brandLogo={'/img/varilux.avif'}
					></EyezenLens>
					<EyezenLens
						imrUrl={'/img/cardImage.avif'}
						bandColor={'purple'}
						context={"Your lenses' invisible shield"}
						brandLogo={'/img/eyezen.avif'}
					></EyezenLens>
				</Box>
			</Container>

			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '2rem',
					justifyContent: 'center',
				}}
			>
				<h1 className={styles.journeyHeading}>Your journey starts here</h1>
				<div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
					<JourneyCard
						mainHeading={'Build Your Lenses'}
						topHeading={'Help me Choose'}
						imgUrl={'/img/lens.avif'}
						buttonText={'Start'}
					></JourneyCard>
					<JourneyCard
						mainHeading={'Build Your Lenses'}
						topHeading={'Help me Choose'}
						imgUrl={'/img/tool.avif'}
						buttonText={'Start'}
					></JourneyCard>
				</div>
			</Container>
			<Grid direction="row" container>
				<Grid
					item
					md={12}
					lg={12}
					sm={12}
					xs={12}
					className={styles.disclaimer}
				>
					<h1>Legal disclaimer</h1>
					<ol>
						<li>
							{' '}
							Compared with regular single vision lenses Eyezen® in-Life
							consumer studies - 3rd Independent parties - [Eyezen® Boost
							Crizal® Prevencia - 2015 - FR- n=76 / Eyezen Eyezen® Boost EPS -
							2016 - FR - n=51 / Eyezen® Start (Rx) - 2018 - FR - n=49 / Eyezen®
							Start (Stock) - 2020 - FR - n=52].{' '}
						</li>
						<li>
							Compared with regular single vision lenses Eyezen® in-Life
							consumer studies - 3rd Independent parties - [Eyezen® Boost
							Crizal® Prevencia - 2015 - FR- n=76 / Eyezen Eyezen® Boost EPS -
							2016 - FR - n=51 / Eyezen® Start (Rx) - 2018 - FR - n=49 / Eyezen®
							Start (Stock) - 2020 - FR - n=52].{' '}
						</li>
						<li>
							Blue-violet light is between 400 and 455nm as stated by ISO TR
							20772:2018.{' '}
						</li>
						<li>
							Protection against UV and blue-violet light filtering.
							(Blue-violet light is between 400 and 455nm as stated by ISO TR
							20772:2018).{' '}
						</li>
						<li>
							{' '}
							Eyezen® in-Life consumer studies - 3rd Independent parties -
							[Eyezen® Boost Crizal® Prevencia - 2015 - FR- n=76 / Eyezen
							Eyezen® Boost EPS - 2016 - FR - n=51 / Eyezen® Start (Rx) - 2018 -
							FR - n=49 / Eyezen® Start (Stock) - 2020 - FR - n=52 / Eyezen®
							Kids - 2019 - US - n=58].
						</li>
						<li>
							Compared with regular single vision lenses Eyezen® in-Life
							consumer studies - 3rd Independent parties - [Eyezen® Boost
							Crizal® Prevencia - 2015 - FR- n=76 / Eyezen Eyezen® Boost EPS -
							2016 - FR - n=51 / Eyezen® Start (Rx) - 2018 - FR - n=49 / Eyezen®
							Start (Stock) - 2020 - FR - n=52].{' '}
						</li>
						<li>
							{' '}
							Protection against UV and blue-violet light filtering.
							(Blue-violet light is between 400 and 455nm as stated by ISO TR
							20772:2018).{' '}
						</li>
						<li>
							{' '}
							Blue-violet light is between 400 and 455nm as stated by ISO TR
							20772:2018.{' '}
						</li>
						<li>
							Protection against UV and blue-violet light filtering.
							(Blue-violet light is between 400 and 455nm as stated by ISO TR
							20772:2018). 10. EyezenTM in-Life Wearers Test - 3rd independent
							party - FRANCE - 2015 (n=76).
						</li>
					</ol>
				</Grid>
			</Grid>
			<Footer />
		</>
	);
};

export default Page;
