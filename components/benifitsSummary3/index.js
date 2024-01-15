import React from 'react';
import Image from 'next/image';
import benifitIcon from '../assets/benfitOne.png';
import styles from './style.module.css';

const index = () => {
  return (
    <>
      <div className={styles.benifit_summary_main}>
        <div className={styles.benifits}>
          <div className={styles.heading}>Benefits of Ben Nevis lenses</div>
          <div className={styles.benifits_box}>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Protection from the sun.</div>
              <div className={styles.description}>
                Shield your eyes from UV rays and selectively filter out blue-violet light.
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Correction of vision.</div>
              <div className={styles.description}>
                Polarized prescription glasses for enhanced clarity in outdoor vision
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Comfort in vision.</div>
              <div className={styles.description}>
              Experience activities in well-lit conditions.
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Reduced glare</div>
              <div className={styles.description}>
                Explore Ben Nevis® polarized lenses for improved contrast and enhanced comfort
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chooseUs}>
          <div className={styles.heading}>
            Why choose Ben Nevis Sun Lenses?
          </div>
          <div className={styles.satisfaction_cont} hidden>
            {/* <div className={styles.left}>
              <div className={styles.pink_heading}>9</div>
              <div className={styles.desc}>
                {'out of 10 people declare they are light sensitive'}
              </div>
            </div> */}
            <div className={styles.right}>
              <div className={styles.pink_heading}>33%</div>
              <div className={styles.desc}>
                {
                  'A significant percentage of individuals requiring visual correction choose to wear non-prescription sunglasses.'
                }
              </div>
            </div>
            {/* <div className={styles.right}>
              <div className={styles.pink_heading}>91%</div>
              <div className={styles.desc}>
                {
                  'want their lenses not only to correct their vision but also to protect their eyes'
                }
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
