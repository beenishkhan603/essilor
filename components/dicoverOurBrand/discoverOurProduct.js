// pages/index.js
import React from 'react';
import Image from 'next/image';
import Carousel from './carousel';
import discoverImg from '@/components/assets/Eyezen-lenses.jpg';
import variluxImg from '@/components/assets/beautiful-woman-sitting-chair.jpg';
import bluevImg from '@/components/assets/overtime-work.jpg';
import crizalImg from '@/components/assets/stylish-businesswoman-cafe.jpg';
import styles from './style.module.css';

const items = [
  <div className={styles.brandSlide}>
    <Image className={styles.brandImg} alt='brand' src={discoverImg} />
    {/* <Image alt='logo' src={eyezenLogo} className={styles.brandLogo} /> */}
    <p className={styles.brandNameLogoP}>Balnc Start</p>
    <p className={`${styles.brandName} ${styles.black}`}>
    The new generation of single vision lenses
    </p>
    <button className={styles.discoverBtn}>Discover</button>
  </div>,
  <div className={styles.brandSlide}>
    <Image className={styles.brandImg} alt='brand' src={variluxImg} />
    {/* <Image alt='logo' src={xperioMLogo} className={styles.brandLogo} /> */}
    <p className={styles.brandNameLogoP}>Ben Nevis</p>
    <p className={`${styles.brandName} ${styles.black}`}>
      Ultimate visual comfort
    </p>
    <button className={styles.discoverBtn}>Discover</button>
  </div>,
  <div className={styles.brandSlide}>
    <Image className={styles.brandImg} alt='brand' src={crizalImg} />
    {/* <Image alt='logo' src={variluxLogo} className={styles.brandLogo} /> */}
    <p className={styles.brandNameLogoP}>Hamilton</p>
    <p className={`${styles.brandName} ${styles.black}`}>
      Capture every detail with instant sharp vision
    </p>
    <button className={styles.discoverBtn}>Discover</button>
  </div>,
  // <div className={styles.brandSlide}>
  //   <Image className={styles.brandImg} alt='brand' src={comfortImg} />
  //   <Image alt='logo' src={variluxCLogo} className={styles.brandLogo} />
  //   <p className={`${styles.brandName} ${styles.black}`}>
  //     Seamless vision for active lifestyles
  //   </p>
  //   <button className={styles.discoverBtn}>Discover</button>
  // </div>,
  // <div className={styles.brandSlide}>
  //   <Image className={styles.brandImg} alt='brand' src={physioImg} />
  //   <Image alt='logo' src={variluxPLogo} className={styles.brandLogo} />
  //   <p className={`${styles.brandName} ${styles.black}`}>
  //     Effortless vision for busy and active lifestyles
  //   </p>
  //   <button className={styles.discoverBtn}>Discover</button>
  // </div>,
  // <div>
  //   <Image className={styles.brandImg} alt='brand' src={xperioPImg} />
  //   <Image alt='logo' src={xperioUvLogo} className={styles.brandLogo} />
  //   <p className={`${styles.brandName} ${styles.black}`}>
  //     Supreme visual comfort.
  //   </p>
  //   <button className={styles.discoverBtn}>Discover</button>
  // </div>,
  <div className={styles.brandSlide}>
    <Image className={styles.brandImg} alt='brand' src={bluevImg} />
    {/* <Image alt='logo' src={BlueUvLogo} className={styles.brandLogo} /> */}
    <p className={styles.brandNameLogoP}>Benty</p>
    <p className={`${styles.brandName} ${styles.black}`}>
      Your lenses' invisible shield.
    </p>
    <button className={styles.discoverBtn}>Discover</button>
  </div>,
  // Add more items as needed
];

const DiscoverProduct = () => {
  return (
    <div className={styles.discoverProductContainer}>
      <p className={`${styles.heading} ${styles.black}`}>
        Discover our products
      </p>
      <Carousel items={items} />
    </div>
  );
};

export default DiscoverProduct;
