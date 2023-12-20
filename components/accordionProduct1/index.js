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
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

export default function AccordProduct() {
  const [accordionOpen2, setAccordionOpen2] = useState(true);
  return (
    <div className={styles.main}>
      <div className={styles.mainSub}>
        <Grid container direction='row' height={'100%'}>
          <Grid
            item
            md={12}
            sm={6}
            xs={12}
            lg={6}
            //height={{ xs: '50%', sm: '50%', md: '100%', lg: '100%' }}
            padding={{ xs: '20px', sm: '20px', md: '100px', lg: '100px' }}
          >
            <p
              className={styles.heading}
            >{`Do I need anti blue light glasses?`}</p>

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
                  {`Recommended for everyone `}
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
                    {`Light is everywhere. We are exposed to blue light all day long, all year long, from the sun, artificial lighting and screens. However you lead your life, managing your UV and blue light exposure is recommended for everyone. Keep your vision at its best every day.`}
                  </Typography>
                  <Typography variant='p' className={styles.text2}>
                    {` Discover Essilor® Start.`}
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
            lg={6}
            height={{ xs: '60%', sm: '60%', md: '100%', lg: '100%' }}
          >
            {accordionOpen2 ? (
              <img
                src={
                  '	https://media.essilor.com/cms/caas/v1/media/111456/data/picture/68aa7d111200fe9412f7266eec9b372b.png'
                }
                alt={'pic'}
                className={styles.image}
              />
            ) : (
              <img
                src={
                  'https://media.essilor.com/cms/caas/v1/media/112960/data/picture/0f62b8667fe7fef721a101377f73ab17.jpg'
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
