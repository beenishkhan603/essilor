import React from 'react';
import Image from 'next/image';
import benifitIcon from '../assets/benfitOne.png';
import styles from './style.module.css';

const index = () => {
  return (
    <>
      <div className={styles.benifit_summary_main}>
        <div className={styles.benifits}>
          <div className={styles.heading}>Benefits of Varilux lenses</div>
          <div className={styles.benifits_box}>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Sharp vision</div>
              <div className={styles.description}>
                At all distances, for any activity
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Seamless transitions</div>
              <div className={styles.description}>
                From near to far and in-between
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Wide fields of vision</div>
              <div className={styles.description}>
                To enjoy your environment
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Stability of vision in motion</div>
              <div className={styles.description}>
                For faster adaptation with fewer distortions
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chooseUs}>
          <div className={styles.heading}>Why choose Varilux?</div>
          <div className={styles.satisfaction_cont}>
            <div className={styles.left}>
              <div className={styles.pink_heading}>#1</div>
              <div className={styles.desc}>
                {'progressive lens brand recommended by eye care professionals'}
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.pink_heading}>93%</div>
              <div className={styles.desc}>
                {
                  'of wearers are satisfied with the quality of vision their Varilux® presbyopia lenses give them'
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
