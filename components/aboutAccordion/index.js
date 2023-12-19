'use client';

import React, { useState } from 'react';
import styles from './style.module.css';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid,
	Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

export default function Accord() {
	const [accordionOpen1, setAccordionOpen1] = useState(false);
	const [accordionOpen2, setAccordionOpen2] = useState(false);
	return (
		<div className={styles.main}>
			<div className={styles.mainSub}>
				<Grid container direction="row" height={'100%'}>
					<Grid
						item
						md={12}
						sm={6}
						xs={12}
						lg={6}
						//height={{ xs: '50%', sm: '50%', md: '100%', lg: '100%' }}
						padding={{ xs: '20px', sm: '20px', md: '100px', lg: '100px' }}
					>
						<p className={styles.heading}>About Essilor</p>
						<Accordion
							onChange={() => {
								if (accordionOpen2) {
									setAccordionOpen2(false);
								}
								setAccordionOpen1(!accordionOpen1);
							}}
							expanded={accordionOpen1}
							className={styles.accordion}
						>
							<AccordionSummary
								className={styles.accordionSummary}
								expandIcon={
									accordionOpen1 ? (
										<CloseIcon
											sx={{
												color: '#18b1ae',
												fontSize: '28px !important',
												fontWeight: 700,
											}}
										/>
									) : (
										<AddIcon
											sx={{
												color: '#18b1ae',
												fontSize: '28px !important',
												fontWeight: 700,
											}}
										/>
									)
								}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography variant="p" className={styles.drawerLink}>
									Providing optical solutions for all
								</Typography>
							</AccordionSummary>
							<AccordionDetails className={styles.accordionDetail}>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										gap: '16px',
									}}
								>
									<Typography variant="p" className={styles.text}>
										{`Your eyes are a precious resource. Detecting vision problems,
                  protecting one's eyes and preserving one's eye health are
                  essential for everyone. There are almost 8 billion people in
                  the world, and they all need to take care of their visual
                  health.`}
									</Typography>
									<Typography variant="p" className={styles.text2}>
										Learn more about our mission.
									</Typography>
								</div>
							</AccordionDetails>
						</Accordion>
						<Accordion
							onChange={() => {
								if (accordionOpen1) {
									setAccordionOpen1(false);
								}
								setAccordionOpen2(!accordionOpen2);
							}}
							expanded={accordionOpen2}
							className={styles.accordion}
						>
							<AccordionSummary
								className={styles.accordionSummary}
								expandIcon={
									accordionOpen2 ? (
										<CloseIcon
											sx={{
												color: '#18b1ae',
												fontSize: '28px !important',
												fontWeight: 700,
											}}
										/>
									) : (
										<AddIcon
											sx={{
												color: '#18b1ae',
												fontSize: '28px !important',
												fontWeight: 700,
											}}
										/>
									)
								}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography variant="p" className={styles.drawerLink}>
									Innovation is in our DNA
								</Typography>
							</AccordionSummary>
							<AccordionDetails className={styles.accordionDetail}>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										gap: '16px',
									}}
								>
									<Typography variant="p" className={styles.text}>
										{`Essilor® lenses do more than correct your vision, because you're more than the numbers on your prescription. For us, an innovation is meaningless unless it has a real impact on your life and the health of your eyes.`}
									</Typography>
									<Typography variant="p" className={styles.text2}>
										Discover Essilor® innovation.
									</Typography>
								</div>
							</AccordionDetails>
						</Accordion>
					</Grid>
					<Grid
						item
						md={12}
						sm={6}
						xs={12}
						lg={6}
						height={{ xs: '50%', sm: '50%', md: '100%', lg: '100%' }}
					>
						{accordionOpen1 ? (
							<img
								src={
									'https://media.essilor.com/cms/caas/v1/media/109456/data/picture/1d8b8eeb2556134ff9dd1714b1692388.jpg'
								}
								alt={'pic'}
								className={styles.image}
							/>
						) : accordionOpen2 ? (
							<img
								src={
									'https://media.essilor.com/cms/caas/v1/media/109458/data/picture/296be10e71775209297dd48c5b4693ee.jpg'
								}
								alt={'pic'}
								className={styles.image}
							/>
						) : (
							<img
								src={
									'https://media.essilor.com/cms/caas/v1/media/109460/data/picture/751f95fe05bf4498dbbb6daacb668d5c.jpg'
								}
								alt={'pic'}
								className={styles.image}
							/>
						)}
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
