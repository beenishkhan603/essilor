import React from 'react';
import Image from 'next/image';
import benifitIcon from '../assets/benfitOne.png';
import styles from './style.module.css';

const index = () => {
	return (
		<>
			<div className={styles.benifit_summary_main}>
				<div className={styles.benifits}>
					<div className={styles.heading}>Benefits of Eyezen lenses</div>
					<div className={styles.benifits_box}>
						<div className={styles.benifits_box_child}>
							<Image src={benifitIcon} alt="Icon" />
							<div className={styles.name}>Visual fatigue reduction</div>
							<div className={styles.description}>
								Reduce and prevent eye fatigue symptoms
							</div>
						</div>
						<div className={styles.benifits_box_child}>
							<Image src={benifitIcon} alt="Icon" />
							<div className={styles.name}>Improved contrast</div>
							{/* <div className='description'>Reduce and prevent eye fatigue symptoms</div> */}
						</div>
						<div className={styles.benifits_box_child}>
							<Image src={benifitIcon} alt="Icon" />
							<div className={styles.name}>Advanced Filter</div>
							<div className={styles.description}>
								Blue-violet light filtering
							</div>
						</div>
					</div>
				</div>
				<div className={styles.chooseUs}>
					<div className={styles.heading}>Why choose Eyezen?</div>
					<div className={styles.satisfaction_cont}>
						<div className={styles.left}>
							<div className={styles.pink_heading}>88%</div>
							<div className={styles.desc}>of wearers satisfied</div>
						</div>
						<div className={styles.right}>
							<div className={styles.pink_heading}>3%</div>
							<div className={styles.desc}>
								out of 4 wearers experienced visual fatigue reduction
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default index;
