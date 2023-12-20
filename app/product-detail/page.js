import React from 'react';
import Header from '../../components/header';
import Image from 'next/image';
import cupIcon from '../../components/assets/cupIcon.svg';
import eyexen from '../../components/assets/eyexen.webp';
import BenifitsSummary from '../../components/benifitsSummary';
import NewsLetter from '@/components/newsLetter';
import AccordProduct from '@/components/accordionProduct';
import DiscoverRange from '@/components/dicoverOurBrand/discoverRange';

import JourneyCard from '../../components/JourneyCard';
import styles from './style.module.css';
import { Container, Box, Grid } from '@mui/material';
import Footer from '@/components/footer';
import EyezenLens from '../../components/EyezenLens/Index';
import DiscoverCards from '@/components/dicoverOurBrand/discoverCards';

const Page = () => {
  return (
    <>
      <Header />
      <div className={styles.header}>
        <div className={styles.header_content}>
          <div className={styles.first_row}>
            <Image height={32} width={32} src={cupIcon} alt='icon' />
            <div style={{ fontWeight: '700', color: '#fff' }}>
              Correct your vision
            </div>
          </div>
          <div className={styles.second_row}>
            <Image src={eyexen} alt='eyexen logo' />
          </div>
          <div className={styles.third_row}>
            <p className={styles.descrip}>
              Essilor® Eyezen® lenses are optimised single vision lenses that
              relax your eyes so you can keep up in a connected world.
            </p>
          </div>
        </div>
      </div>
      <BenifitsSummary />
      <Grid
        direction='row'
        container
        justifyContent={'center'}
        className={styles.aboutEContainer}
      >
        <Grid item md={9} lg={9} sm={12} xs={12}>
          <AccordProduct />
        </Grid>
        <Grid item md={12} lg={12} sm={12} xs={12}>
          <NewsLetter />
        </Grid>
        <Grid
          item
          md={9}
          lg={9}
          sm={12}
          xs={12}
          display={'flex'}
          flexDirection={'column'}
          alignItems={{
            lg: 'flex-start',
            sm: 'center',
            md: 'flex-start',
            xs: 'center',
          }}
        >
          <Box width={'90%'}>
            <div className={styles.completeLen}>
              <h1>Complete your Eyezen lenses with</h1>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Protect your eyes</h3>
                <h3>Enhance your eyes</h3>
              </div>
            </div>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'space-between',
            }}
            alignItems={{
              lg: 'flex-start',
              sm: 'center',
              md: 'flex-start',
              xs: 'center',
            }}
            flexDirection={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }}
          >
            <DiscoverCards
              disc={'Advanced filtration technology'}
              logo={
                'https://media.essilor.com/cms/caas/v1/media/108820/data/picture/d30ed6b7f52abd6faae16f80d9c03a09.png'
              }
              image={
                'https://media.essilor.com/cms/caas/v1/media/108848/data/picture/0a32bbb2935711109896f3b653966f11.jpg'
              }
              productbtn={true}
            />
            <DiscoverCards
              disc={'Goes beyond protection'}
              logo={
                '	https://media.essilor.com/cms/caas/v1/media/108832/data/picture/a68cfc95885bb96717cc4e2b92b56624.png'
              }
              image={
                'https://media.essilor.com/cms/caas/v1/media/108850/data/picture/a483b831bc5b9c39f55d3766f8d22e7d.png'
              }
              productbtn={true}
            />
            <DiscoverCards
              disc={'Light Intelligent Technology'}
              logo={
                'https://media.essilor.com/cms/caas/v1/media/108828/data/picture/623eb9a7a9542e23e8644eb2d5700424.png'
              }
              image={
                'https://media.essilor.com/cms/caas/v1/media/108852/data/picture/d8930867df0d4b44342bc28ccdc9de0b.png'
              }
              productbtn={true}
            />
            <DiscoverCards
              disc={`Your lenses' invisible shield`}
              logo={
                'https://media.essilor.com/cms/caas/v1/media/108822/data/picture/fa10b1d3b7f907793c7fce164c1bfa79.png'
              }
              image={
                'https://media.essilor.com/cms/caas/v1/media/108854/data/picture/8b9408b1a90c793db84d0f424c7fffe6.png'
              }
              productbtn={true}
            />
          </Box>
        </Grid>
      </Grid>

      {/* <Container sx={{ padding: '10px', marginTop: '1rem' }}>
        <div className={styles.completeLen}>
          <h1>Complete your Eyezen lenses with</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Protect your eyes</h3>
            <h3>Enhance your eyes</h3>
          </div>
        </div>
        <Box sx={{ display: 'flex', gap: '2rem' }}>
          <EyezenLens
            imrUrl={'/img/cardImage.avif'}
            bandColor={'red'}
            context={'Advanced filtartion'}
            brandLogo={'/img/eyezen.avif'}
          ></EyezenLens>
          <EyezenLens
            imrUrl={'/img/cardImage.avif'}
            bandColor={'blue'}
            context={'Goes beyond protection'}
            brandLogo={'/img/blue_filler_system.avif'}
          ></EyezenLens>
          <EyezenLens
            imrUrl={'/img/cardImage.avif'}
            bandColor={'green'}
            context={'Light Intelligent Technology'}
            brandLogo={'/img/varilux.avif'}
          ></EyezenLens>
          <EyezenLens
            imrUrl={'/img/cardImage.avif'}
            bandColor={'purple'}
            context={"Your lenses' invisible shield"}
            brandLogo={'/img/eyezen.avif'}
          ></EyezenLens>
        </Box>
      </Container> */}

      <Grid direction='row' container>
        <Grid item md={12} lg={12} sm={12} xs={12}>
          <DiscoverRange />
        </Grid>
        <Grid
          item
          md={12}
          lg={12}
          sm={12}
          xs={12}
          className={styles.disclaimer}
        >
          <h1>Legal disclaimer</h1>
          <ol>
            <li>
              {' '}
              Compared with regular single vision lenses Eyezen® in-Life
              consumer studies - 3rd Independent parties - [Eyezen® Boost
              Crizal® Prevencia - 2015 - FR- n=76 / Eyezen Eyezen® Boost EPS -
              2016 - FR - n=51 / Eyezen® Start (Rx) - 2018 - FR - n=49 / Eyezen®
              Start (Stock) - 2020 - FR - n=52].{' '}
            </li>
            <li>
              Compared with regular single vision lenses Eyezen® in-Life
              consumer studies - 3rd Independent parties - [Eyezen® Boost
              Crizal® Prevencia - 2015 - FR- n=76 / Eyezen Eyezen® Boost EPS -
              2016 - FR - n=51 / Eyezen® Start (Rx) - 2018 - FR - n=49 / Eyezen®
              Start (Stock) - 2020 - FR - n=52].{' '}
            </li>
            <li>
              Blue-violet light is between 400 and 455nm as stated by ISO TR
              20772:2018.{' '}
            </li>
            <li>
              Protection against UV and blue-violet light filtering.
              (Blue-violet light is between 400 and 455nm as stated by ISO TR
              20772:2018).{' '}
            </li>
            <li>
              {' '}
              Eyezen® in-Life consumer studies - 3rd Independent parties -
              [Eyezen® Boost Crizal® Prevencia - 2015 - FR- n=76 / Eyezen
              Eyezen® Boost EPS - 2016 - FR - n=51 / Eyezen® Start (Rx) - 2018 -
              FR - n=49 / Eyezen® Start (Stock) - 2020 - FR - n=52 / Eyezen®
              Kids - 2019 - US - n=58].
            </li>
            <li>
              Compared with regular single vision lenses Eyezen® in-Life
              consumer studies - 3rd Independent parties - [Eyezen® Boost
              Crizal® Prevencia - 2015 - FR- n=76 / Eyezen Eyezen® Boost EPS -
              2016 - FR - n=51 / Eyezen® Start (Rx) - 2018 - FR - n=49 / Eyezen®
              Start (Stock) - 2020 - FR - n=52].{' '}
            </li>
            <li>
              {' '}
              Protection against UV and blue-violet light filtering.
              (Blue-violet light is between 400 and 455nm as stated by ISO TR
              20772:2018).{' '}
            </li>
            <li>
              {' '}
              Blue-violet light is between 400 and 455nm as stated by ISO TR
              20772:2018.{' '}
            </li>
            <li>
              Protection against UV and blue-violet light filtering.
              (Blue-violet light is between 400 and 455nm as stated by ISO TR
              20772:2018). 10. EyezenTM in-Life Wearers Test - 3rd independent
              party - FRANCE - 2015 (n=76).
            </li>
          </ol>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Page;
