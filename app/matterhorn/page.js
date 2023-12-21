'use client';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Image from 'next/image';
import cupIcon from '../../components/assets/cupIcon.svg';
import eyexen from '../../components/assets/eyexen.webp';
import BenifitsSummary from '../../components/benifitsSummary1';
import NewsLetter from '@/components/newsLetter';
import AccordProduct from '@/components/accordionProduct2';
import DiscoverRange from '@/components/dicoverOurBrand/discoverRange 2';

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
        <Grid item md={9} lg={9} sm={12} xs={12}>
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
                  <img
                    src={
                      'https://www.essilor.com/_next/image/?url=https%3A%2F%2Fmedia.essilor.com%2Fcms%2Fcaas%2Fv1%2Fmedia%2F114936%2Fdata%2Fpicture%2Fc8aa6208f168c9bed31481aa84acd233.png&w=256&q=75'
                    }
                    alt='eyexen logo'
                  />
                </div>
                <div className={styles.third_row}>
                  <p className={styles.descrip}>
                    {
                      'Starting around age 40, you might have trouble focusing on nearby objects or reading in dim light. This is called presbyopia and is a natural part of ageing. Varilux® progressive lenses are designed for people aged 40+, offering sharp vision at every distance with seamless transitions from near to far.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <BenifitsSummary />
      <Grid direction='row' container justifyContent={'center'}>
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
        <Grid
          direction='row'
          container
          justifyContent={'center'}
          item
          bgcolor={'#eff0f1'}
          md={12}
          lg={12}
          sm={12}
          xs={12}
        >
          <Grid
            item
            md={9}
            lg={9}
            sm={12}
            xs={12}
            display={'flex'}
            flexDirection={'column'}
            bgcolor={'#eff0f1'}
            alignItems={{
              lg: 'flex-start',
              sm: 'center',
              md: 'flex-start',
              xs: 'center',
            }}
            py={'5%'}
          >
            <DiscoverRange />
          </Grid>
        </Grid>
      </Grid>

      <Grid direction='row' container>
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
              Compared with regular single vision lenses Eyezen® in-Life
              consumer studies - 3rd Independent parties - [Eyezen® Boost
              Crizal® Prevencia - 2015 - FR- n=76 / Eyezen Eyezen® Boost EPS -
              2016 - FR - n=51 / Eyezen® Start (Rx) - 2018 - FR - n=49 / Eyezen®
              Start (Stock) - 2020 - FR - n=52].{' '}
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
