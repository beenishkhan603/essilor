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
import img from './imgs/img.jpg'
export default function AccordProduct() {
  const [accordionOpen2, setAccordionOpen2] = useState(false);
  console.log('img',img)
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
            padding={{ xs: '20px', sm: '20px', md: '100px', lg: '100px' }}
          >
            <p
              className={styles.heading}
            >{`Which Blanc II lenses are right for me?`}</p>

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
                  {`Is sharp vision essential for your lifestyle?`}
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
                    {`Lenses ought to adjust to your behavior, not the other way around. Enjoy instant sharpness, even during motion.`}
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
                  'https://media.essilor.com/cms/caas/v1/media/112954/data/picture/827b6943afdf4b7bd81d537442a99337.jpg'
                }
                alt={'pic'}
                className={styles.image}
              />
            ) : (
              <img
                src={img.src}
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
