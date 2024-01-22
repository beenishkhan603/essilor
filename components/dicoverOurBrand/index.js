// pages/index.js
import React from 'react';
import Image from 'next/image';
import Carousel from './carousel';

import discoverImg from '@/components/assets/Eyezen-lenses.jpg';
import variluxImg from '@/components/assets/beautiful-woman-sitting-chair.jpg';
import bluevImg from '@/components/assets/overtime-work.jpg';
import xperiaImg from '@/components/assets/fashionable-girl-cafe.jpg';
import transitionImg from '@/components/assets/transitionImg.jpg';
import crizalImg from '@/components/assets/stylish-businesswoman-cafe.jpg';
import eyexenLogo from '@/components/assets/eyexen.webp';
import variluxLogo from '@/components/assets/varilux.webp';
import bluevLogo from '@/components/assets/bluev.webp';
import xperioLogo from '@/components/assets/xperio.webp';
import transitionLogo from '@/components/assets/transition.png';
import crizalLogo from '@/components/assets/crizal.png';
import styles from './style.module.css';

const items = [
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={discoverImg} />
		{/* <Image alt="logo" src={eyexenLogo} className={styles.brandLogo} /> */}
		<p className={styles.brandNameLogo}>Balnc</p>
		<p className={styles.brandName}>
			The latest iteration of single vision lenses.
		</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={variluxImg} />
		{/* <Image alt="logo" src={variluxLogo} className={styles.brandLogo} /> */}
		<p className={styles.brandNameLogo}>Balnc II</p>
		<p className={styles.brandName}>Achieving instant sharpness mastery.</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={bluevImg} />
		{/* <Image alt="logo" src={bluevLogo} className={styles.brandLogo} /> */}
		<p className={styles.brandNameLogo}>Benty</p>
		<p className={styles.brandName}>Cutting-edge filtration technology.</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={xperiaImg} />
		{/* <Image alt="logo" src={xperioLogo} className={styles.brandLogo} /> */}
		<p className={styles.brandNameLogo}>Ben Nevis</p>
		<p className={styles.brandName}>Surpasses mere protection.</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	// <div className={styles.brandSlide}>
	// 	<Image className={styles.brandImg} alt="brand" src={transitionImg} />
	// 	{/* <Image alt="logo" src={transitionLogo} className={styles.brandLogo} /> */}
	// 	<p className={styles.brandNameLogo}>Benty</p>
	// 	<p className={styles.brandName}>Intelligent light technology.</p>
	// 	<button className={styles.discoverBtn}>Discover</button>
	// </div>,
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={crizalImg} />
		{/* <Image alt="logo" src={crizalLogo} className={styles.brandLogo} /> */}
		<p className={styles.brandNameLogo}>Hamilton</p>
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
