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
import './style.css';
import { Container, Box } from '@mui/material';
import Footer from '@/components/footer';

const Page = () => {
	return (
		<>
			<Header />
			<div className="header">
				<div className="header-content">
					<div className="first-row">
						<Image height={32} width={32} src={cupIcon} alt="icon" />
						<div style={{ fontWeight: '700', color: '#fff' }}>
							Correct your vision
						</div>
					</div>
					<div className="second-row">
						<Image src={eyexen} alt="eyexen logo" />
					</div>
					<div className="third-row">
						<p className={'descrip'}>
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
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1.5rem',
						color: 'black',
						padding: '10px',
					}}
				>
					<h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>
						Complete your Eyezen lenses with
					</h1>
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
				<h1 style={{ color: 'black', fontWeight: '48px' }}>
					Your journey starts here
				</h1>
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
			<Footer />
		</>
	);
};

export default Page;
