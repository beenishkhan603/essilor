'use client';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Image from 'next/image';
import cupIcon from '../../components/assets/cupIcon.svg';
import eyexen from '../../components/assets/eyexen.webp';
import BenifitsSummary from '../../components/benifitsSummary 2';
import NewsLetter from '@/components/newsLetter';
import AccordProduct from '@/components/accordionProduct1';
import DiscoverRange from '@/components/dicoverOurBrand/discoverRange1';

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
                  {/* <img
                    src={
                      'https://www.essilor.com/_next/image/?url=https%3A%2F%2Fmedia.essilor.com%2Fcms%2Fcaas%2Fv1%2Fmedia%2F111502%2Fdata%2Fpicture%2F70dbb1cd9b39a7097896c9142f80f620.png&w=256&q=75'
                    }
                    alt='eyexen logo'
                  /> */}
                </div>
                <div className={styles.third_row}>
                  <p className={styles.descrip} style={{ marginTop: "2rem" }}>
                    {`The final step that enhances correction while providing protection. Each Hamilton® coating incorporates unique technologies and benefits, acting as an invisible shield to safeguard both your eyes and your lenses.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <BenifitsSummary />
      <Grid direction='row' container justifyContent={'center'}>
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
            xl: 'flex-start',
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
              Higher number of current Hamilton users who declared to be “completely satisfied” compared to the average of competitors. Analysis based on a 3-year average from Essilor Brand Tracking – BR/CN/FR/IN/US - MSW - 2020 (n=4 997 respondents).{' '}
            </li>
            <li>
              . 8/10 current Hamilton users declare to be “completely or very satisfied” vs 5/10 unbranded/generic coating wearers. Data is based on a 3-year average (Brand Tracking – MSW - 2020 – 5 countries - 4997 respondents).{' '}
            </li>

            <li>
              Within Hamilton® coatings range. External laboratories tests and internal technical tests in 2019 – compared to all previous generations of Hamilton® coatings{' '}
            </li>

          </ol>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Page;
