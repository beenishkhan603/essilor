'use client';

import React, { useState } from 'react';
import styles from './style.module.css';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@mui/material';
import img from './imgs/img.jpg'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

export default function AccordProduct() {
  const [accordionOpen2, setAccordionOpen2] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.mainSub}>
        <Grid container direction='row' height={'100%'}>
          <Grid
            item
            md={12}
            sm={6}
            xs={12}
            lg={8}
            //height={{ xs: '50%', sm: '50%', md: '100%', lg: '100%' }}
            padding={{ xs: '20px', sm: '20px', md: '44px', lg: '88px', xl: '100px' }}
          >
            <p
              className={styles.heading}
            >{`Which Blanc lenses are right for me?`}</p>

            <Accordion
              onChange={() => {
                setAccordionOpen2(!accordionOpen2);
              }}
              expanded={accordionOpen2}
              className={styles.accordion}
            >
              <AccordionSummary
                className={styles.accordionSummary}
                expandIcon={
                  accordionOpen2 ? (
                    <CloseIcon
                      sx={{
                        color: '#18b1ae',
                        fontSize: '28px !important',
                        fontWeight: 700,
                      }}
                    />
                  ) : (
                    <AddIcon
                      sx={{
                        color: '#18b1ae',
                        fontSize: '28px !important',
                        fontWeight: 700,
                      }}
                    />
                  )
                }
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography variant='p' className={styles.drawerLink}>
                  {`Looking for more than simple correction `}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordionDetail}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <Typography variant='p' className={styles.text}>
                    {`Blanc Start lenses are optimized single vision lenses crafted to provide relaxation and protection.`}
                  </Typography>
                  <Typography variant='p' className={styles.text2}>
                    {` Discover Belvin® Start.`}
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid
            item
            md={12}
            sm={6}
            xs={12}
            lg={4}
            height={{ xs: '60%', sm: '60%', md: '100%', lg: '100%' }}
          >
            {accordionOpen2 ? (
              <img
                src={
                  '#'
                }
                alt={'pic'}
                className={styles.image}
              />
            ) : (
              <img
              src={
                img.src
              }
                alt={'pic'}
                className={styles.image}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
