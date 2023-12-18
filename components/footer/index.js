'use client';
import { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import {
	Box,
	Container,
	Grid,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ContactForm from '../contact';

import '@/components/global.css';
import styles from './style.module.css';

const Footer = () => {
	const [isMobile, setIsMobile] = useState(false);
	const brands = [
		{ name: 'Blanc', url: '' },
		{ name: 'Matterhorn', url: '' },
		{ name: 'Elbrus', url: '' },
		{ name: 'Ben Nevis', url: '' },
		{ name: 'Tatra', url: '' },
		{ name: 'Hamilton', url: '' },
	];
	useEffect(() => {
		// Check if window is defined (to avoid SSR issues)
		if (typeof window !== 'undefined') {
			setIsMobile(window.innerWidth <= 480);

			// Add event listener to update isMobile on window resize
			const handleResize = () => {
				setIsMobile(window.innerWidth <= 480);
			};

			window.addEventListener('resize', handleResize);

			// Remove event listener on component unmount
			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	}, []);
	return (
		<Box className={`primaryBg ${styles.footerContainer}`} component="footer">
			<Container maxWidth="lg">
				<Grid container spacing={5}>
					{isMobile ? (
						<>
							<Accordion className={styles.footerAccordian}>
								<AccordionSummary
									expandIcon={<AddIcon style={{ color: '#fff' }} />}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<p className={styles.footerHeading}>Brand</p>
								</AccordionSummary>
								<AccordionDetails>
									<ul className={styles.list}>
										{brands.map((item, index) => (
											<li key={index} className={styles.listItem}>
												<Link href={item.url}>{item.name}</Link>
											</li>
										))}
									</ul>
								</AccordionDetails>
							</Accordion>
						</>
					) : (
						<>
							<Grid item xs={12} sm={4}>
								<p className={styles.footerHeading}>Brand</p>
								<ul className={styles.list}>
									{brands.map((item, index) => (
										<li key={index} className={styles.listItem}>
											<Link href={item.url}>{item.name}</Link>
										</li>
									))}
								</ul>
							</Grid>
						</>
					)}
					<Grid item xs={12} sm={4} style={{ marginBottom: '1%' }}>
						<p className={styles.footerHeading}>Contct Us</p>
						<ContactForm />
					</Grid>
					<Grid item xs={12} sm={4}></Grid>
				</Grid>
				<Box mt={2} className={styles.subFooter}>
					<p>{'Privacy policy | Terms and conditions of use'}</p>
				</Box>
			</Container>
		</Box>
	);
};
export default Footer;
