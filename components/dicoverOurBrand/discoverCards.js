import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

import discoverImg from '@/components/assets/discover.jpg';
import eyexenLogo from '@/components/assets/eyexen.webp';

import styles from './style.module.css';

export default function DiscoverCards(props) {
  const { disc, textbtn, image, logo, productbtn, title } = props;
  console.log(image)
  return (
    <Box className={styles.brandSlideCard}>
      <img className={styles.brandImg} alt='brand' src={image.src || discoverImg} />
      <p className={styles.brandNameLogoP} style={{marginTop: "1rem"}}> {title} </p>
      {/* <img
        alt='logo'
        src={logo || eyexenLogo}
        width={'130px'}
        style={{ padding: '16px 0' }}
      /> */}
      <p className={`${styles.brandName} ${styles.black}`}>{disc}</p>
      <button
        className={!productbtn ? styles.discoverBtn : styles.discoverProductBtn}
      >
        {textbtn || 'Discover'}
      </button>
    </Box>
  );
}
