'use client';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Image from 'next/image';
import cupIcon from '../../components/assets/cupIcon.svg';
import eyexen from '../../components/assets/eyexen.webp';
import BenifitsSummary from '../../components/benifitsSummary';
import NewsLetter from '@/components/newsLetter';
import AccordProduct from '@/components/accordionProduct';
import DiscoverRange from '@/components/dicoverOurBrand/discoverRange';

import styles from './style.module.css';
import { Box, Grid } from '@mui/material';
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
          py={'7%'}
        >
          <EyezenLens />
        </Grid>
      </Grid>

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
