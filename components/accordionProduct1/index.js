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
  const [accordionOpen1, setAccordionOpen1] = useState(true);
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
            padding={{ xs: '20px', sm: '20px', md: '50px', lg: '50px' }}
          >
            <p
              className={styles.heading}
            >{`Which Hamilton coating will benefit me the most?`}</p>

            <Accordion
              onChange={() => {
                setAccordionOpen1(!accordionOpen1);
                setAccordionOpen2(false);
              }}
              expanded={accordionOpen1}
              className={styles.accordion}
            >
              <AccordionSummary
                className={styles.accordionSummary}
                expandIcon={
                  accordionOpen1 ? (
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
                  {`In search of enduring aesthetics`}
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
                    {`You desire your lenses to maintain a polished appearance in any situation. The Crizal® anti-reflective coating not only safeguards your vision from scratches and smudges but also diminishes reflections from the front, back, and sides. Experience clear vision while effortlessly presenting a tidy and composed look at all times. Explore the performance of Crizal® Sapphire™ HR anti-reflective coating.`}
                  </Typography>
                  <Typography variant='p' className={styles.text2}>
                    {` Discover Belvin® Start.`}
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              onChange={() => {
                setAccordionOpen2(!accordionOpen2);
                setAccordionOpen1(false);
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
                  {`Seeking tranquility and assurance`}
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
                    {`In the midst of a hectic day, your glasses shouldn't be a concern. Enhance your vision seamlessly within your busy lifestyle by incorporating the durable and easy-to-clean Hamilton® anti-reflective coating. This coating offers high resistance to smudges and scratches, requiring minimal maintenance. Explore the performance of Hamilton® Rock™ anti-reflective coating.`}
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
                  '	https://media.essilor.com/cms/caas/v1/media/111456/data/picture/68aa7d111200fe9412f7266eec9b372b.png'
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
