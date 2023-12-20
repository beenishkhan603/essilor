import React from 'react';
import Image from 'next/image';
import benifitIcon from '../assets/benfitOne.png';
import styles from './style.module.css';
import { Grid } from '@mui/material';

const index = () => {
	return (
		<>
			<div className={styles.benifit_summary_main}>
				<div className={styles.benifits}>
					<div className={styles.heading}>Benefits of Xperio Sun Lenses</div>
					<div className={styles.benifits_box}>
						<div className={styles.benifits_box_child}>
							<Image src={benifitIcon} alt="Icon" />
							<div className={styles.name}>Sun protection</div>
							<div className={styles.description}>
								Protect your eyes from UV rays and filter the blue-violet light1
							</div>
						</div>
						<div className={styles.benifits_box_child}>
							<Image src={benifitIcon} alt="Icon" />
							<div className={styles.name}>Vision correction</div>
							<div className={styles.description}>
								Prescription polarised glasses for clearer outdoor vision
							</div>
						</div>
						<div className={styles.benifits_box_child}>
							<Image src={benifitIcon} alt="Icon" />
							<div className={styles.name}>Vision comfort</div>
							<div className={styles.description}>
								Enjoy activities in bright light conditions
							</div>
						</div>
						<div className={styles.benifits_box_child}>
							<Image src={benifitIcon} alt="Icon" />
							<div className={styles.name}>Glare cut</div>
							<div className={styles.description}>
								Discover Xperio® polarised lenses for enhanced contrast and
								better comfort
							</div>
						</div>
						<div className={styles.benifits_box_child}>
							<Image src={benifitIcon} alt="Icon" />
							<div className={styles.name}>Style</div>
							<div className={styles.description}>
								Enjoy a wide range of frames and styles
							</div>
						</div>
					</div>
				</div>
				<div className={styles.chooseUs}>
					<div className={styles.heading}>
						Why choose the Xperio Sun Lenses?
					</div>
					<Grid direction="row" container justifyContent={'center'}>
						<Grid item md={4} lg={4} sm={12} xs={12}>
							<p className={styles.subheading}>
								Style and protection come first when buying sunglasses, but it
								doesn’t have to be at the expense of correction. Don't
								compromise on vision clarity when you can choose stylish
								Essilor® sunglasses
							</p>
						</Grid>
					</Grid>
					<div className={styles.satisfaction_cont}>
						<div>
							<div className={styles.pink_heading}>32%</div>
							<div className={styles.desc}>
								{
									'of people who need visual correction wear non-prescription sunglasses2'
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default index;
