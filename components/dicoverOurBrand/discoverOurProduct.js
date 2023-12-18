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
		<p className={`${styles.brandName} ${styles.black}`}>
			The latest iteration of single vision lenses.
		</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={discoverImg} />
		<Image alt="logo" src={eyexenLogo} className={styles.brandLogo} />
		<p className={`${styles.brandName} ${styles.black}`}>
			Seize every detail with sharp vision.
		</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={discoverImg} />
		<Image alt="logo" src={eyexenLogo} className={styles.brandLogo} />
		<p className={`${styles.brandName} ${styles.black}`}>
			Day-long visual comfort.
		</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={discoverImg} />
		<Image alt="logo" src={eyexenLogo} className={styles.brandLogo} />
		<p className={`${styles.brandName} ${styles.black}`}>
			Seamless vision for active lifestyles.
		</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={discoverImg} />
		<Image alt="logo" src={eyexenLogo} className={styles.brandLogo} />
		<p className={`${styles.brandName} ${styles.black}`}>
			Optimal protection against UV and blue-violet light filtering.
		</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	<div>
		<Image className={styles.brandImg} alt="brand" src={discoverImg} />
		<Image alt="logo" src={eyexenLogo} className={styles.brandLogo} />
		<p className={`${styles.brandName} ${styles.black}`}>
			Supreme visual comfort.
		</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	<div className={styles.brandSlide}>
		<Image className={styles.brandImg} alt="brand" src={discoverImg} />
		<Image alt="logo" src={eyexenLogo} className={styles.brandLogo} />
		<p className={`${styles.brandName} ${styles.black}`}>
			Your lenses' invisible shield.
		</p>
		<button className={styles.discoverBtn}>Discover</button>
	</div>,
	// Add more items as needed
];

const DiscoverProduct = () => {
	return (
		<div className={styles.discoverProductContainer}>
			<p className={`${styles.heading} ${styles.black}`}>
				Discover our products
			</p>
			<Carousel items={items} />
		</div>
	);
};

export default DiscoverProduct;
