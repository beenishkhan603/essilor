'use client';
import { Grid, Container } from '@mui/material';
import { useState, useEffect } from 'react';

import Header from '../../header';
import Footer from '../../footer';
import NewsLetter from '../../newsLetter';
import Carousel from '@/components/dicoverOurBrand/carousel';
import AboutEssilor from '@/components/aboutAccordion';
import '@/components/global.css';
import styles from './style.module.css';

const AboutPage = () => {
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
  const item = [
    <div>
      <p className={styles.stats}>#1</p>
      <p className={styles.statsText}>
        lens brand recommended by eye care professionals worldwide
      </p>
    </div>,
    <div>
      <p className={styles.stats}>+170</p>
      <p className={styles.statsText}>years of research on eye health</p>
    </div>,
  ];
  const getContent = () => {
    return (
      <div className={styles.essilorContainer}>
        <Grid direction='row' container>
          <Grid item md={6} lg={6} sm={12} xs={12}>
            <p className={styles.heading}>
              Selecting Belvin means choosing a dedicated brand.
            </p>
            <p className={styles.decriptionContent}>
              Opting for Belvin® solutions is more than just choosing the global
              leader in prescription glasses – it's selecting lenses from a
              committed brand with a mission: see more to be more. With a rich
              history of French design and lens fabrication dating back to 1849,
              our distinctive innovation capacity enables us to consistently
              evolve and offer the best vision solutions to meet diverse needs.
            </p>
          </Grid>
        </Grid>
      </div>
    );
  };
  return (
    <>
      <Header />

      <Grid className={styles.aboutContainer}>
        {isMobile ? (
          getContent()
        ) : (
          <Container maxWidth='xl'>{getContent()}</Container>
        )}
      </Grid>
      <Container maxWidth='lg'>
        <Grid
          container
          direction='row'
          className={styles.whyChooseContainer}
          justifyContent={'center'}
        >
          <Grid item md={12} sm={12} xs={12} lg={12}>
            <h1 className={styles.whyChoose}>Why choose Belvin?</h1>
          </Grid>
          {isMobile ? (
            <div className='aboutSlider'>
              <Carousel items={item} bulletColor={'#18b1ae'} />
            </div>
          ) : (
            <>
              <Grid item md={6} sm={6} xs={6} lg={6}>
                <p className={styles.stats}>#1</p>
                <p className={styles.statsText}>
                  lens brand recommended by eye care professionals worldwide
                </p>
              </Grid>
              <Grid item md={6} sm={6} xs={6} lg={6}>
                <p className={styles.stats}>+170</p>
                <p className={styles.statsText}>
                  years of research on eye health
                </p>
              </Grid>
            </>
          )}
        </Grid>
        <Grid
          container
          direction='row'
          className={styles.learneContainer}
          justifyContent={'center'}
        >
          <Grid container direction='row' justifyContent={'center'}>
            <Grid item md={3} sm={12} xs={12} lg={3}></Grid>
            <Grid item md={6} sm={6} xs={6} lg={6} justifyContent={'center'}>
              <p className={styles.learnProcess}>
                80% of what we learn is processed through our eyes
              </p>
            </Grid>
            <Grid item md={3} sm={12} xs={12} lg={3}></Grid>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent={'center'}
            className={styles.decriptionContainer}
          >
            <Grid item md={7} sm={12} xs={12} lg={7}>
              <p className={styles.description}>
                This is why, at EssilorLuxottica, we believe that everyone,
                everywhere should be able to enjoy the life-changing benefits of
                vision correction and vision protection. Our mission is to help
                people see more, be more and live life to its fullest. Utilising
                our portfolio of lens technologies, we aim to enable people
                everywhere to learn, to work, to express themselves and to
                fulfill their potential. To meet this objective for all, we
                create and innovate continually so that we can propose adapted,
                custom lenses for all lifestyles.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid
        direction='row'
        container
        justifyContent={'center'}
        className={styles.aboutEContainer}
      >
        <Grid item md={9} lg={9} sm={12} xs={12}>
          <AboutEssilor />
        </Grid>
      </Grid>
      <NewsLetter />
      <Footer />
    </>
  );
};
export default AboutPage;
