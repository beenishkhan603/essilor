import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

import discoverImg from '@/components/assets/discover.jpg';
import eyexenLogo from '@/components/assets/eyexen.webp';

import styles from './style.module.css';

export default function DiscoverCards(props) {
  const { disc, textbtn, image, logo, productbtn } = props;
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={{
        lg: 'flex-start',
        sm: 'center',
        md: 'flex-start',
        xs: 'center',
      }}
      justifyContent={'center'}
      height={'65vh'}
      width={{
        lg: '20% !important',
        md: '20% !important',
        sm: '80% !important',
        xs: '80% !important',
      }}
    >
      <img className={styles.brandImg} alt='brand' src={image || discoverImg} />
      <img
        alt='logo'
        src={logo || eyexenLogo}
        width={'130px'}
        style={{ padding: '16px 0' }}
      />
      <p className={`${styles.brandName} ${styles.black}`}>{disc}</p>
      <button
        className={!productbtn ? styles.discoverBtn : styles.discoverProductBtn}
      >
        {textbtn || 'Discover'}
      </button>
    </Box>
  );
}
