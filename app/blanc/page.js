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
      <Grid
        direction='row'
        container
        justifyContent={'center'}
        className={styles.aboutEContainer}
      >
        <Grid item md={9} lg={12} sm={12} xs={12}>
          <div className={styles.header}>
            <div className={styles.headerCon}>
              <div className={styles.header_content}>
                <div className={styles.first_row}>
                  <Image height={32} width={32} src={cupIcon} alt='icon' />
                  <div style={{ fontWeight: '700', color: '#fff' }}>
                    Correct your vision
                  </div>
                </div>
                <div className={styles.second_row}>
                  {/* <Image src={eyexen} alt='eyexen logo' /> */}
                </div>
                <div className={styles.third_row}>
                  <p className={styles.descrip} style={{ marginTop: "2rem" }}>
                    Blanc® lenses represent optimized single vision lenses designed to provide relaxation for your eyes, allowing you to thrive in today's interconnected world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <BenifitsSummary />
      <Grid
        direction='row'
        container
        justifyContent={'center'}
        className={styles.aboutEContainer}
      >
        <Grid item md={9} lg={12} xl={9} sm={12} xs={12}>
          <AccordProduct />
        </Grid>
        <Grid item md={12} lg={12} sm={12} xs={12}>
          <NewsLetter />
        </Grid>
        <Grid
          item
          md={9}
          lg={12}
          xl={9}
          sm={12}
          xs={12}
          display={'flex'}
          flexDirection={'column'}
          alignItems={{
            lg: 'center',
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
              In comparison to standard single vision lenses, the reduction in visual fatigue was observed in consumer studies conducted by independent third parties for various Blanc® products, including Blanc® Boost Crizal® Prevencia in 2015 (n=76), Blanc® Boost EPS in 2016 (n=51), Blanc® Start (Rx) in 2018 (n=49), and Blanc® Start (Stock) in 2020 (n=52).{' '}
            </li>
            <li>

              In independent third-party consumer studies conducted on Blanc® products, including Blanc® Boost Crizal® Prevencia in 2015 (n=76), Blanc® Boost EPS in 2016 (n=51), Blanc® Start (Rx) in 2018 (n=49), and Blanc® Start (Stock) in 2020 (n=52), improvements were observed when compared to regular single vision lenses.{' '}
            </li>
            <li>
              Blue-violet light falls between 400 and 455nm, as specified by ISO TR 20772:2018.
            </li>
            <li>
              Protection against UV and blue-violet light filtering (Blue-violet light is between 400 and 455nm, as stated by ISO TR 20772:2018).
            </li>
            <li>
              Blanc® in-Life consumer studies - 3rd Independent parties - [Blanc® Boost Crizal® Prevencia - 2015 - FR - n=76 / Blanc® Boost EPS - 2016 - FR - n=51 / Blanc® Start (Rx) - 2018 - FR - n=49 / Blanc® Start (Stock) - 2020 - FR - n=52 / Blanc® Kids - 2019 - US - n=58].
            </li>
            <li>
              Compared with regular single vision lenses, Blanc® in-Life consumer studies - 3rd Independent parties - [Blanc® Boost Crizal® Prevencia - 2015 - FR - n=76 / Blanc® Boost EPS - 2016 - FR - n=51 / Blanc® Start (Rx) - 2018 - FR - n=49 / Blanc® Start (Stock) - 2020 - FR - n=52].
            </li>
            <li>
              Protection against UV and blue-violet light filtering (Blue-violet light is between 400 and 455nm, as stated by ISO TR 20772:2018).
            </li>
            <li>
              Blue-violet light is between 400 and 455nm, as specified by ISO TR 20772:2018.
            </li>
            <li>
              Protection against UV and blue-violet light filtering (Blue-violet light is between 400 and 455nm, as stated by ISO TR 20772:2018). 10. Blanc® in-Life Wearers Test - 3rd independent party - FRANCE - 2015 (n=76).
            </li>

          </ol>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Page;
