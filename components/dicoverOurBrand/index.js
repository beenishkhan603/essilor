// pages/index.js
import React from 'react';
import Image from 'next/image';
import Carousel from './carousel';

import discoverImg from '@/components/assets/discover.jpg';
import eyexenLogo from '@/components/assets/eyexen.webp';
import styles from './style.module.css';

const items = [
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={discoverImg} />
		<Image alt="logo" src={eyexenLogo} className={styles.brandLogo} />
		<p className={styles.brandName}>
			The latest iteration of single vision lenses.
		</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={discoverImg} />
		<Image alt="logo" src={eyexenLogo} className={styles.brandLogo} />
		<p className={styles.brandName}>Achieving instant sharpness mastery.</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={discoverImg} />
		<Image alt="logo" src={eyexenLogo} className={styles.brandLogo} />
		<p className={styles.brandName}>Cutting-edge filtration technology.</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={discoverImg} />
		<Image alt="logo" src={eyexenLogo} className={styles.brandLogo} />
		<p className={styles.brandName}>Surpasses mere protection.</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={discoverImg} />
		<Image alt="logo" src={eyexenLogo} className={styles.brandLogo} />
		<p className={styles.brandName}>Intelligent light technology.</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={discoverImg} />
		<Image alt="logo" src={eyexenLogo} className={styles.brandLogo} />
		<p className={styles.brandName}>Your lenses' invisible shield.</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	// Add more items as needed
];

const DiscoverBrand = () => {
	return (
		<div className={styles.discoverContainer}>
			<p className={styles.subHeading}>OUR BRANDS</p>
			<p className={styles.heading}>Discover our brands</p>
			<Carousel items={items} bulletColor={'#fff'} />
		</div>
	);
};

export default DiscoverBrand;
