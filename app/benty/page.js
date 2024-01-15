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
                    {`A filter positioned at the core of the lens minimizes exposure to sunlight and screen-generated light, creating an optimal, clear lens for everyone, every day. The Benty™ Filter System enhances your comfort in daily life.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <BenifitsSummary />
      <Grid direction='row' container justifyContent={'center'}>
        <Grid item xl={6} md={9} lg={12} sm={12} xs={12}>
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
          <EyezenLens title={"Complete your Benty lenses with"} />
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
              Benty Capture™ lens feature filters a minimum of 20% of blue-violet light (between 400-455nm as stated by ISO TR 20772:2018). For Polycarbonate concave lenses, the blue-violet light filtering percentage might be slightly lower. Extremely low residual tint resulting from absorbing blue-violet light.{' '}
            </li>
            <li>Benty-violet light is between 400 and 455nm as stated by ISO TR 20772:2018.</li>

            <li>
              Benty Capture™ lens feature filters a minimum of 20% of blue-violet light (between 400 and 455nm as stated by ISO TR 20772:2018). For Polycarbonate concave lenses, the blue-violet light filtering percentage might be slightly lower. Regular prescription lenses = 1.5 or Poly material (without blue filtering) with Crizal Forte® UV coating at equal center-thickness..{' '}
            </li>
            <li>% of ‘Much more satisfied’, ‘More satisfied’, ‘Somewhat more satisfied’ – 6 point comparison scale from ‘Much less satisfied’ to ‘Much more satisfied’ - n=74/74. Benty Capture - in-Life consumer study – 3rd Independent party – 2019 – France – N=74.</li>
            <li>% of wearers who answered ‘Yes’ – Yes/No question – n=74/74. Benty Capture - in-Life consumer study – 3rd Independent party – 2019 – France – N=74.</li>
            <li> % of ‘very satisfied’ or ‘satisfied’ wearers – 6 point satisfaction scale from ‘not satisfied at all’ to ‘very satisfied’ - n=74/74. Benty Capture - in-Life consumer study – 3rd Independent party – 2019 – France – N=74.</li>
          </ol>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Page;
