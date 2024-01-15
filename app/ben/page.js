'use client';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Image from 'next/image';
import cupIcon from '../../components/assets/cupIcon.svg';
import BenifitsSummary from '../../components/benifitsSummary3';
import NewsLetter from '@/components/newsLetter';
import AccordProduct from '@/components/accordionProduct1';
import DiscoverRange from '@/components/dicoverOurBrand/discoverRange3';

import styles from './style.module.css';
import { Box, Grid } from '@mui/material';
import Footer from '@/components/footer';
import EyezenLens from '../../components/EyezenLens3/Index';

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
                    Protect your eyes
                  </div>
                </div>
                <div className={styles.second_row}>
                  {/* <img
                    src={
                      'https://www.essilor.com/_next/image/?url=https%3A%2F%2Fmedia.essilor.com%2Fcms%2Fcaas%2Fv1%2Fmedia%2F114184%2Fdata%2Fpicture%2F331c56c2f838e55329ef7f006c1c292c.png&w=256&q=75'
                    }
                    alt='eyexen logo'
                  /> */}
                  {/* <label className={styles.descrip} style={{ marginTop: "0.3rem", marginBottom: "2rem" }}><h3>Ben Nevis</h3></label> */}
                </div>
                <div className={styles.third_row} style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                  <p className={styles.descrip}>
                    {`Ben Nevis® Light Intelligent Lenses™ seamlessly adapt to changing light situations, darkening when outdoors and returning to clear when indoors. All Ben Nevis lenses protect your eyes from UV rays and help filter blue-violet light1. Available in a range of colours and mirror finishes.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <BenifitsSummary />
      <Grid direction='row' container justifyContent={'center'}>
        {/* <Grid item md={9} lg={9} sm={12} xs={12}>
          <AccordProduct />
        </Grid> */}
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
            lg={12}
            xl={9}
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
        {/* <Grid item md={12} lg={12} sm={12} xs={12}>
          <DiscoverRange />
        </Grid> */}
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
              Blue-violet light falls between 400 and 455nm, according to ISO TR 20772:2018. Xperio® sun lenses effectively block a minimum of 70% of blue-violet light (BVCb' lowest value measured on Agadir Blue Tint, CAT3. Values for Category 3, Tinted).{' '}
            </li>
            <li>
              Source: 2020 Study - Essilor x IPSOS.{' '}
            </li>

            <li>
              Blue-violet light is within the range of 400 to 455nm, as specified by ISO TR 20772:2018. Xperio® sun lenses provide a filtration of at least 70% of blue-violet light (BVCb' lowest value measured on Agadir Blue Tint, CAT3. Values for Category 3, Tinted).{' '}
            </li>

          </ol>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Page;
