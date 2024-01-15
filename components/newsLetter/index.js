'use client';
import { TextField, Grid, Container } from '@mui/material';
import { useState, useEffect } from 'react';

import styles from './style.module.css';

const NewLetter = () => {
  const [isMobile, setIsMobile] = useState(false);
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
    <>
      <div className={styles.newsletterContainer}>
        <Grid direction='row' container>
          <Grid item md={5} lg={6} sm={12} xs={12}>
            <p className={styles.subHeading}>Find your nearest optician</p>
            <p className={styles.heading}>
              Get an Belvin lens solution at a partnered optician
            </p>
            {/*<TextField
							type="text"
							className={styles.textField}
							placeholder="Enter an address or a city"
						/>
						<br />
						<button className={styles.newsLetterBtn}>Find an optician</button> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default NewLetter;
