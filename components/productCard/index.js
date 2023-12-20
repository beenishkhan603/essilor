import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FeatureListIcon from '../assets/FeatureListIcon';
import Image from 'next/image';
import styles from './style.module.css';
const defaultFeaturesList = [
	'Lightweight',
	'Durable',
	'Waterproof',
	'Flexible',
	'Adjustable',
];

export default function ProductCard(props) {
	const { imrUrl, bandColor, filterName, brandLogo, subHeading, featuresList } =
		props;

	return (
		<Card
			className={styles.product_card}
			sx={{
				maxWidth: 380,
				position: 'relative',
				backgroundColor: '#eff0f1',
				borderRadius: '20px',
			}}
		>
			<Image
				component="img"
				alt="green iguana"
				height={380}
				width={380}
				src={imrUrl ? imrUrl : '/img/about.jpg'}
				style={{ cursor: 'pointer' }}
			/>
			<div
				style={{
					position: 'absolute',
					top: 0,
					right: 0,
					bottom: 0,
					height: '380px',
					width: '8%',
					backgroundColor: bandColor ? bandColor : 'rgba(0, 0, 0, 0.8)',
					zIndex: 2, // Adjust the z-index as needed
				}}
			/>
			<CardContent>
				<Typography gutterBottom component="div" className={styles.filter_text}>
					{filterName ? filterName : 'Filter'}
				</Typography>
				<div style={{ width: '300px', height: '150px' }}>
					<CardMedia
						style={{ objectFit: '' }}
						component="img"
						alt="green iguana"
						height="120"
						image={brandLogo ? brandLogo : './img/eyexen.webp'}
					/>
				</div>
				<Typography variant="body2" className={styles.card_sub_heading}>
					{subHeading ? subHeading : 'Context coming soon'}
				</Typography>

				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexDirection: 'column',
						margin: '1rem',
					}}
				>
					{featuresList
						? featuresList.map((feature, index) => (
								<div
									key={index}
									style={{
										display: 'flex',
										alignItems: 'center',
										flexDirection: 'row',
										gap: '1rem',
									}}
								>
									<FeatureListIcon /> {/* Render your icon component here */}
									<p className={styles.featureList}>{feature}</p>
								</div>
						  ))
						: defaultFeaturesList.map((feature, index) => (
								<div
									key={index}
									style={{
										display: 'flex',
										alignItems: 'center',
										flexDirection: 'row',
										gap: '1rem',
									}}
								>
									<FeatureListIcon /> {/* Render your icon component here */}
									<Typography>{feature}</Typography>
								</div>
						  ))}

					{}
				</div>
			</CardContent>

			<CardActions
				sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}
			>
				<Button variant="contained" className={styles.discover_button}>
					Discover
				</Button>
			</CardActions>
		</Card>
	);
}
