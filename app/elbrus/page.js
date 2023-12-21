'use client';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Image from 'next/image';
import cupIcon from '../../components/assets/cupIcon.svg';
import eyexen from '../../components/assets/eyexen.webp';
import BenifitsSummary from '../../components/benifitsSummaryElbrus';
import NewsLetter from '@/components/newsLetter';
import AccordProduct from '@/components/accordionProductElbrus';
import DiscoverRange from '@/components/dicoverOurBrand/discoverRangeelburs';

import styles from './style.module.css';
import { Box, Grid } from '@mui/material';
import Footer from '@/components/footer';
import EyezenLens from '../../components/EyezenLens1/Index';
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
                      'https://www.essilor.com/_next/image/?url=https%3A%2F%2Fmedia.essilor.com%2Fcms%2Fcaas%2Fv1%2Fmedia%2F111502%2Fdata%2Fpicture%2F70dbb1cd9b39a7097896c9142f80f620.png&w=256&q=75'
                    }
                    alt='eyexen logo'
                  />
                </div>
                <div className={styles.third_row}>
                  <p className={styles.descrip}>
                    {`Xperio® Sun Lenses go beyond glare and UV protection to allow you to see with more depth and better colour distinction as you explore the world.`}
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
              Blue-violet light is between 400 and 455nm as stated by ISO TR
              20772:2018. Xperio® sun lenses filter at least 70% of blue-violet
              light (BVCb’ lowest value measured on Agadir Blue Tint, CAT3.
              Values for Category 3, Tinted).{' '}
            </li>
            <li>Source : 2020 Study - Belvin x IPSOS.. </li>

            <li>
              Blue-violet light is between 400 and 455nm as stated by ISO TR
              20772:2018. Xperio® sun lenses filter at least 70% of blue-violet
              light (BVCb’ lowest value measured on Agadir Blue Tint, CAT3.
              Values for Category 3, Tinted).{' '}
            </li>
          </ol>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Page;
