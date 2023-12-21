import React from 'react';
import Image from 'next/image';
import benifitIcon from '../assets/benfitOne.png';
import styles from './style.module.css';

const index = () => {
  return (
    <>
      <div className={styles.benifit_summary_main}>
        <div className={styles.benifits}>
          <div className={styles.heading}>Benefits of Transitions lenses</div>
          <div className={styles.benifits_box}>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>UV protection</div>
              <div className={styles.description}>
                100% UV protection on front side
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Style booster</div>
              <div className={styles.description}>
                Choose from a wide range of colours
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Blue-violet light</div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Seamless fabulous</div>
              <div className={styles.description}>
                Change from clear indoors to dark outdoors
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chooseUs}>
          <div className={styles.heading}>
            Why choose Transitions Light Intelligent lenses?
          </div>
          <div className={styles.satisfaction_cont}>
            <div className={styles.left}>
              <div className={styles.pink_heading}>9</div>
              <div className={styles.desc}>
                {'out of 10 people declare they are light sensitive'}
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.pink_heading}>75%</div>
              <div className={styles.desc}>
                {
                  'of eyeglass wearers agree the lenses should protect from both UV light and blue light'
                }
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.pink_heading}>91%</div>
              <div className={styles.desc}>
                {
                  'want their lenses not only to correct their vision but also to protect their eyes'
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
