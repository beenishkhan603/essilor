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
            Benefits of Hamilton coatings
          </div>
          <div className={styles.benifits_box}>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Enhanced visual experience</div>
              <div className={styles.description}>
                Minimize distracting light reflections.
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Increased lens resistance</div>
              <div className={styles.description}>
              Enhance the resistance of your lenses against scratches.
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Hassle-free lenses</div>
              <div className={styles.description}>
                Resistant to smudges, and repels water and dust.
              </div>
            </div>
            <div className={styles.benifits_box_child}>
              <Image src={benifitIcon} alt='Icon' />
              <div className={styles.name}>Optimal UV protection</div>
              <div className={styles.description}>
                UV protection on both sides.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chooseUs}>
          <div className={styles.heading}>
            Why choose Hamilton?
          </div>
          <div className={styles.satisfaction_cont}>
            <div className={styles.left}>
              <div className={styles.pink_heading}>6</div>
              <div className={styles.desc}>
                {
                  '9 out of 10 Hamilton® wearers are very satisfied versus only'
                }
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.pink_heading}>4</div>
              <div className={styles.desc}>
                {'9 out of 10 unbranded/generic coating wearers'}
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.pink_heading}>20</div>
              <div className={styles.desc}>
                {'years of innovation'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
