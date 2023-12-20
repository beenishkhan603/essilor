import React from 'react';
import Image from 'next/image';
import benifitIcon from '../assets/benfitOne.png';
import styles from './style.module.css';

const index = () => {
  return (
    <>
      <div className={styles.benifit_summary_main}>
        <div className={styles.benifits}>
          <div className={styles.heading}>
            Benefits of Blue UV Filter System
          </div>
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
              <div className={styles.name}>Selective filtering</div>
              <div className={styles.description}>
                No disruption of your own circadian rhythms
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Optimal clarity</div>
              <div className={styles.description}>
                Don't compromise contrast and colour perception
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Filter blue-violet light</div>
              <div className={styles.description}>
                Up to 3 times more filtering
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chooseUs}>
          <div className={styles.heading}>
            Why choose the Blue UV Filter System?
          </div>
          <div className={styles.satisfaction_cont}>
            <div className={styles.left}>
              <div className={styles.pink_heading}>88%</div>
              <div className={styles.desc}>
                {
                  'of wearers are more satisfied with Blue UV™ Capture when looking at screens'
                }
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.pink_heading}>91%</div>
              <div className={styles.desc}>
                {'of wearers would continue using them'}
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.pink_heading}>86%</div>
              <div className={styles.desc}>
                {'of wearers are satisfied with their overall visual comfort'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
