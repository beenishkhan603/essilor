import React from 'react';
import Image from 'next/image';
import benifitIcon from '../assets/benfitOne.png';
import styles from './style.module.css';
import { Grid } from '@mui/material';

const index = () => {
  return (
    <>
      <div className={styles.benifit_summary_main}>
        <div className={styles.benifits}>
          <div className={styles.heading}>Benefits of Benty Filter System</div>
          <div className={styles.benifits_box}>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>UV protection</div>
              <div className={styles.description}>
                Full protection against UV rays on the front side.
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Selective filtering</div>
              <div className={styles.description}>
                Preservation of your circadian rhythms without any disturbance.
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Optimal clarity</div>
              <div className={styles.description}>
                Avoid compromising contrast and color perception.
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Lens aesthetic</div>
              <div className={styles.description}>
                Experience optimal vision in all lighting conditions with an anti-glare finish.
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Filter blue-violet light<sup>2</sup></div>
              <div className={styles.description}>
                Enhanced filtering, up to three times more according to specifications.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chooseUs}>
          <div className={styles.heading}>
            Why choose the Benty Filter System??
          </div>
          <Grid direction='row' container justifyContent={'center'}>
            <Grid item md={4} lg={6} sm={12} xs={12}>
              <p className={styles.subheading}>
                Prioritize style and protection when purchasing sunglasses, without compromising on vision clarity. Choose the combination of style and correction with Belvin® sunglasses.
              </p>
            </Grid>
          </Grid>
          <Grid direction='row' container justifyContent={'center'}>
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <div className={styles.satisfaction_cont}>
                <div>
                  <div className={styles.pink_heading}>88%</div>
                  <div className={styles.desc}>
                    {
                      'A significant percentage of users express higher satisfaction with Blue UV™ Capture when viewing screens.'
                    }
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <div className={styles.satisfaction_cont}>
                <div>
                  <div className={styles.pink_heading}>91%</div>
                  <div className={styles.desc}>
                    {
                      'A substantial percentage of wearers express their intent to continue using them.'
                    }
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <div className={styles.satisfaction_cont}>
                <div>
                  <div className={styles.pink_heading}>86%</div>
                  <div className={styles.desc}>
                    {
                      'A notable percentage of wearers express satisfaction with their overall visual comfort.'
                    }
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

        </div>
      </div>
    </>
  );
};

export default index;
