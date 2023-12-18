'use client';
import {
	Container,
	Typography,
	Button,
	useMediaQuery,
	Tab,
	Tabs,
	Box,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import Header from '../../../components/header';
import Footer from '../../footer';
import './style.css';
import ProductsCard from '../../../components/productCard';
import Image from 'next/image';

const filters = [
	{
		name: 'Lens Category',
		categories: [
			'All',
			'Correct Your Vision',
			'Protect Your Eyes',
			'Enhance Vision',
		],
		products: [
			{
				imrUrl: '/img/prodcut_card_image_1.png',
				filterName: 'Correct Your Vision',
				bandColor: 'red',
				brandLogo: '/img/eyezen.avif', // Replace with your brand's logo URL
				subHeading: 'The new generation of single vision lenses',
				featuresList: [
					'Better acuity',
					'Visual fatigue reduction',
					'Optimised for digital devices',
					'Better reading',
					'Protect your eyes',
				],
			},
			{
				imrUrl: '/img/prodcut_card_image_1.png',
				filterName: 'Protect Your Eyes',
				bandColor: 'red',
				brandLogo: '/img/eyezen.avif', // Replace with your brand's logo URL
				subHeading: 'The new generation of single vision lenses',
				featuresList: [
					'Better acuity',
					'Visual fatigue reduction',
					'Optimised for digital devices',
					'Better reading',
					'Protect your eyes',
				],
			},
			{
				imrUrl: '/img/prodcut_card_image_1.png',
				filterName: 'Enhance Vision',
				bandColor: 'red',
				brandLogo: 'img/eyezen.avif', // Replace with your brand's logo URL
				subHeading: 'The new generation of single vision lenses',
				featuresList: [
					'Better acuity',
					'Visual fatigue reduction',
					'Optimised for digital devices',
					'Better reading',
					'Protect your eyes',
				],
			},
		],
	},
	{
		name: 'Needs',
		categories: [
			'All',
			'Near Vision',
			'Far Vision',
			'Blue light Protection',
			'Sun Protection',
			'Light Sensitivity',
			'Lens Durability',
		],
		products: [
			// Products related to Needs
			{
				imrUrl: '/img/product_card_image_2.png',
				filterName: 'Near Vision',
				bandColor: '#0088ce',
				brandLogo: '/img/varilux.avif', // Replace with your brand's logo URL
				subHeading: 'Mastering sharpness instantly',
				featuresList: [
					'Sharp Vision',
					'Seamless Transitions',
					'wide fields of vision',
					'stability of vision in motion',
				],
			},

			{
				imrUrl: '/img/product_card_image_2.png',
				filterName: 'Far Vision',
				bandColor: '#0088ce',
				brandLogo: '/img/varilux.avif', // Replace with your brand's logo URL
				subHeading: 'Mastering sharpness instantly',
				featuresList: [
					'Sharp Vision',
					'Seamless Transitions',
					'wide fields of vision',
					'stability of vision in motion',
				],
			},

			{
				imrUrl: '/img/product_card_image_2.png',
				filterName: 'Blue light Protection',
				bandColor: '#0088ce',
				brandLogo: '/img/varilux.avif', // Replace with your brand's logo URL
				subHeading: 'Mastering sharpness instantly',
				featuresList: [
					'Sharp Vision',
					'Seamless Transitions',
					'wide fields of vision',
					'stability of vision in motion',
				],
			},
			{
				imrUrl: '/img/product_card_image_2.png',
				filterName: 'Sun Protection',
				bandColor: '#0088ce',
				brandLogo: '/img/varilux.avif', // Replace with your brand's logo URL
				subHeading: 'Mastering sharpness instantly',
				featuresList: [
					'Sharp Vision',
					'Seamless Transitions',
					'wide fields of vision',
					'stability of vision in motion',
				],
			},
			{
				imrUrl: '/img/product_card_image_2.png',
				filterName: 'Light Sensitivity',
				bandColor: '#0088ce',
				brandLogo: '/img/varilux.avif', // Replace with your brand's logo URL
				subHeading: 'Mastering sharpness instantly',
				featuresList: [
					'Sharp Vision',
					'Seamless Transitions',
					'wide fields of vision',
					'stability of vision in motion',
				],
			},
			{
				imrUrl: '/img/product_card_image_2.png',
				filterName: 'Lens Durability',
				bandColor: '#0088ce',
				brandLogo: '/img/varilux.avif', // Replace with your brand's logo URL
				subHeading: 'Mastering sharpness instantly',
				featuresList: [
					'Sharp Vision',
					'Seamless Transitions',
					'wide fields of vision',
					'stability of vision in motion',
				],
			},
			// More products...
		],
	},
	{
		name: 'Brands',
		categories: [
			'All',
			'Eyezen',
			'Varilux',
			'Blue UV',
			'Xperio Sun',
			'Transitions',
			'Crizal',
		],
		products: [
			// Products related to Brands
			{
				imrUrl: '/img/prodcutImage.png',
				filterName: 'Eyezen',
				bandColor: 'purple',
				brandLogo: '/img/blue_filler_system.avif', // Replace with your brand's logo URL
				subHeading: 'The new generation of single vision lenses',
				featuresList: [
					'filter blue-violet light',
					'UV protection',
					'Optimal clarity',
					'Selective Filtering',
					'Lens aesthetic',
				],
			},
			{
				imrUrl: '/img/prodcutImage.png',
				filterName: 'Varilux',
				bandColor: 'purple',
				brandLogo: '/img/blue_filler_system.avif', // Replace with your brand's logo URL
				subHeading: 'The new generation of single vision lenses',
				featuresList: [
					'filter blue-violet light',
					'UV protection',
					'Optimal clarity',
					'Selective Filtering',
					'Lens aesthetic',
				],
			},
			{
				imrUrl: '/img/prodcutImage.png',
				filterName: 'Blue UV',
				bandColor: 'purple',
				brandLogo: '/img/blue_filler_system.avif', // Replace with your brand's logo URL
				subHeading: 'The new generation of single vision lenses',
				featuresList: [
					'filter blue-violet light',
					'UV protection',
					'Optimal clarity',
					'Selective Filtering',
					'Lens aesthetic',
				],
			},
			{
				imrUrl: '/img/prodcutImage.png',
				filterName: 'Xperio Sun',
				bandColor: 'purple',
				brandLogo: '/img/blue_filler_system.avif', // Replace with your brand's logo URL
				subHeading: 'The new generation of single vision lenses',
				featuresList: [
					'filter blue-violet light',
					'UV protection',
					'Optimal clarity',
					'Selective Filtering',
					'Lens aesthetic',
				],
			},
			{
				imrUrl: '/img/prodcutImage.png',
				filterName: 'Transitions',
				bandColor: 'purple',
				brandLogo: '/img/blue_filler_system.avif', // Replace with your brand's logo URL
				subHeading: 'The new generation of single vision lenses',
				featuresList: [
					'filter blue-violet light',
					'UV protection',
					'Optimal clarity',
					'Selective Filtering',
					'Lens aesthetic',
				],
			},
			{
				imrUrl: '/img/prodcutImage.png',
				filterName: 'Crizal',
				bandColor: 'purple',
				brandLogo: '/img/blue_filler_system.avif', // Replace with your brand's logo URL
				subHeading: 'The new generation of single vision lenses',
				featuresList: [
					'filter blue-violet light',
					'UV protection',
					'Optimal clarity',
					'Selective Filtering',
					'Lens aesthetic',
				],
			},
			// More products...
		],
	},
];

export default function Products() {
	const [activeFilterCategories, setActiveFilterCategories] = useState(
		filters.find((filter) => filter.name === 'Lens Category').categories
	);
	const [activeFilter, setActiveFilter] = useState('Lens Category');
	const [activeCategory, setActiveCategory] = useState('All');
	const [displayedProducts, setDisplayedProducts] = useState([]);
	const isMobile = useMediaQuery('(max-width: 1550px)');
	const isMobileText = useMediaQuery('(max-width: 700px)');

	const handleFilterClick = (filter, categories) => {
		setActiveFilter(filter);
		setActiveFilterCategories(categories);
		setActiveCategory('All');
		// Set displayed products based on the selected filter
		const selectedFilter = filters.find((f) => f.name === filter);
		setDisplayedProducts(selectedFilter ? selectedFilter.products : []);
	};

	const handleCategoryClick = (category) => {
		setActiveCategory(category);

		console.log('category', category);
		// Find the selected filter
		const selectedFilter = filters.find((f) => f.name === activeFilter);
		console.log('selectedFilter', selectedFilter);
		if (category === 'All') {
			// If "All" is selected, show all products from the selected filter
			setDisplayedProducts(selectedFilter ? selectedFilter.products : []);
		} else {
			// Filter products based on the selected category within the filter
			const filteredProducts = selectedFilter
				? selectedFilter.products.filter(
						(product) => product.filterName === category
				  )
				: [];

			console.log('filteredProducts', filteredProducts);
			setDisplayedProducts(filteredProducts);
		}
	};

	useEffect(() => {
		// Set displayed products based on the selected filter
		const selectedFilter = filters.find((f) => f.name === activeFilter);

		if (selectedFilter) {
			setDisplayedProducts(selectedFilter.products);

			// If the active category is not "All", filter products based on the selected category
			if (activeCategory !== 'All') {
				const filteredProducts = selectedFilter.products.filter(
					(product) => product.filterName === activeCategory
				);
				setDisplayedProducts(filteredProducts);
			}
		}
	}, [activeFilter, activeCategory]);

	return (
		<>
			<Header />
			<Container className="main-container" maxWidth="xl">
				<Typography className="brand-heading-small">ESSILOR BRANDS</Typography>
				<Typography className="page-heading">Discover our brands</Typography>
				<p className="page-sub-heading">
					No matter your age or what you need in a lens, Essilor has a product
					that gives you your best vision.
				</p>
				<Typography
					sx={{
						fontSize: '20px',
						fontWeight: 'bold',
						display: isMobile ? 'block' : 'none',
					}}
				>
					Filter tab
				</Typography>
				<div
					className="filter-tabs"
					style={{ justifyContent: isMobile ? 'center' : 'left' }}
				>
					<Typography
						className="filter-tab-text"
						sx={{ display: isMobile ? 'none' : 'block' }}
					>
						Filter tab
					</Typography>
					{filters.map((filter) => (
						<Button
							key={filter.name}
							className="filter-button"
							onClick={() => handleFilterClick(filter.name, filter.categories)}
							style={{
								backgroundColor:
									activeFilter === filter.name ? '#edf7fc' : 'transparent',
								cursor: 'pointer',
							}}
						>
							<Typography
								className="filter-button-text"
								sx={{ fontSize: isMobileText ? '16px' : '20px' }}
							>
								{filter.name}
							</Typography>
						</Button>
					))}
				</div>
				{/* The Desktop and Mobile view for the filter categories */}
				{isMobile ? (
					<div
						style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
					>
						<Tabs
							value={activeFilterCategories.indexOf(activeCategory)}
							onChange={(event, newValue) =>
								handleCategoryClick(activeFilterCategories[newValue])
							}
							variant="scrollable"
							scrollButtons="auto"
							textColor="primary"
							indicatorColor="primary"
						>
							{activeFilterCategories.map((category, index) => (
								<Tab
									key={index}
									label={category}
									sx={{
										textTransform: 'capitalize',
										minWidth: 'auto',
										padding: '10px', // Adjust padding here as needed
										fontSize: '14px', // Adjust font size here as needed
										backgroundColor:
											activeCategory === category ? '#edf7fc' : 'transparent',
										marginRight: isMobileText ? '' : '2rem',
										color: '#0d52a0',
									}}
								/>
							))}
						</Tabs>
					</div>
				) : (
					<>
						{' '}
						<div className="filter-main-container">
							<div
								style={{
									display: 'flex',
									justifyContent: 'left',
									gap: '1rem',
									flexDirection: 'column',
									width: 'auto',
									minWidth: '250px',
								}}
							>
								{activeFilterCategories.map((category, index) => (
									<div
										key={index}
										className="filter-category-button"
										onClick={() => handleCategoryClick(category)}
										style={{
											backgroundColor:
												activeCategory === category ? '#edf7fc' : 'transparent',
											padding: '16px',
											textTransform: 'capitalize',
											cursor: 'pointer',
										}}
									>
										<Typography
											className="filter-category-text"
											sx={{ fontSize: '20px' }}
										>
											{category}
										</Typography>
									</div>
								))}
							</div>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									flexWrap: 'wrap',
									gap: '1rem',
									justifyContent: 'center',
								}}
							>
								{displayedProducts.map((product, index) => (
									<ProductsCard key={index} {...product} />
								))}
							</div>
						</div>
					</>
				)}
				{isMobile ? (
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							flexWrap: 'wrap',
							gap: '1rem',
						}}
					>
						{displayedProducts.map((product, index) => (
							<ProductsCard key={index} {...product} />
						))}
					</div>
				) : (
					<></>
				)}
			</Container>
			{/* Container for the Information */}
			<Container maxWidth="xl">
				<div className={'productConatiner'}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
							alignItems: 'center',
							marginTop: '2rem',
							marginBottom: '2rem',
						}}
					>
						<Typography className="info-heading">
							Discover our other vision solutions
						</Typography>
					</div>
					<div
						style={{
							display: 'flex',
							gap: '4rem',
							alignItems: 'flex-start', // Align items at the start of the flex container
							flexWrap: 'wrap',
							alignItems: 'center',
						}}
					>
						<div style={{ flex: '0 0 auto' }}>
							<Image
								src="/img/info_image.avif"
								height={isMobileText ? 300 : isMobile ? 400 : 600}
								width={isMobileText ? 300 : isMobile ? 600 : 800}
								alt="image"
							></Image>
						</div>

						<div style={{ flex: '1 1 auto', maxWidth: '500px' }}>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: '2rem',
								}}
							>
								<Typography className="info-sub-heading">
									Exceptio Special Lenses
								</Typography>
								<Typography className="info-context">
									The Special Lenses Lab in France mobilizes its unique know-how
									and technology to develop lenses with extraordinary
									characteristics. Don't settle for acceptable correction;
									rediscover the comfort of good vision thanks to the power of
									Exceptio lenses.
								</Typography>
								<Button variant="contained" className="learn-button">
									Learn More
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
}
