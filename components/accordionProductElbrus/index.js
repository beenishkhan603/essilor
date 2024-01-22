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
import img from './imgs/img.jpg'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

export default function AccordProduct() {
	const [accordionOpen1, setAccordionOpen1] = useState(true);
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
						lg={8}
						//height={{ xs: '50%', sm: '50%', md: '100%', lg: '100%' }}
						padding={{ xs: '20px', sm: '20px', md: '100px', lg: '100px' }}
					>
						<p
							className={styles.heading}
						>{`Is it necessary for me to use glasses that block blue light?
						?`}</p>

						<Accordion
							onChange={() => {
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
									{`Recomended for everyone `}
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
										{`Light surrounds us constantly. Whether it's from the sun, artificial lighting, or screens, we are consistently exposed to blue light throughout the day and year. Regardless of your lifestyle, it is advisable for everyone to regulate their exposure to UV and blue light. Prioritize maintaining optimal vision every day.`}
									</Typography>
									<Typography variant="p" className={styles.text2}>
										{` Discover Belvin® Start. `}
									</Typography>
								</div>
							</AccordionDetails>
						</Accordion>
						{/* <Accordion
							onChange={() => {
								setAccordionOpen2(!accordionOpen2);
								setAccordionOpen1(false);
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
									{`Style is my priority when outdoors `}
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
										{`Tinted sun lenses offer great UV protection1. Why stick to grey or black when you can choose from a wide array of colour tints and mirror effects?`}
									</Typography>
									<Typography variant="p" className={styles.text2}>
										{` Discover Benty Tinted`}
									</Typography>
								</div>
							</AccordionDetails>
						</Accordion> */}
					</Grid>
					<Grid
						item
						md={12}
						sm={6}
						xs={12}
						lg={4}
						height={{ xs: '60%', sm: '60%', md: '100%', lg: '100%' }}
					>
						{accordionOpen2 ? (
							<img
								src={
									'	https://media.essilor.com/cms/caas/v1/media/111456/data/picture/68aa7d111200fe9412f7266eec9b372b.png'
								}
								alt={'pic'}
								className={styles.image}
							/>
						) : (
							<img
								src={
									img.src
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
