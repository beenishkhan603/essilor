import React from 'react';
import Image from 'next/image';

import aboutImg from '@/components/assets/glasse1.webp';
import styles from './style.module.css';

const Lens = () => {
	return (
		<>
			<div className={styles.lensContainer}>
				<p className={styles.subHeading}>CORRECT, PROTECT, ENHANCE</p>
				<p className={styles.heading}>Your Essilor lenses</p>
				<Image src={aboutImg} alt="lens" className={styles.about} />
			</div>
		</>
	);
};
export default Lens;
