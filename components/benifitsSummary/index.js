import React from 'react';
import Image from 'next/image';
import benifitIcon from '../assets/benfitOne.png';
import styles from './style.module.css';

const index = () => {
  return (
    <>
      <div className={styles.benifit_summary_main}>
        <div className={styles.benifits}>
          <div className={styles.heading}>Advantages of Blanc® Lenses</div>
          <div className={styles.benifits_box}>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Alleviate visual fatigue.</div>
              <div className={styles.description}>
              Mitigate and proactively ward off symptoms of eye fatigue.
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Enhanced clarity and contrast.</div>
              {/* <div className='description'>Reduce and prevent eye fatigue symptoms</div> */}
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Cutting-edge filtration technology.</div>
              <div className={styles.description}>
              Filtering of blue-violet light for eye protection.</div>
            </div>
          </div>
        </div>
        <div className={styles.chooseUs}>
          <div className={styles.heading}>Why choose Blanc?</div>
          <div className={styles.satisfaction_cont}>
            <div className={styles.left}>
              <div className={styles.pink_heading}>88%</div>
              <div className={styles.desc}>of wearers satisfied</div>
            </div>
            <div className={styles.right}>
              <div className={styles.pink_heading}>3%</div>
              <div className={styles.desc}>
              Three out of four wearers reported a reduction in visual fatigue.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
