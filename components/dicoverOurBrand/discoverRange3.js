import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import Carousel from '../dicoverOurBrand/carousel';
import DiscoverCards from '../dicoverOurBrand/discoverCards';
import { Box } from '@mui/material';

export default function discoverRange() {
  const items = [
    <DiscoverCards
      disc={'Advanced filtration technology'}
      logo={
        'https://media.essilor.com/cms/caas/v1/media/108980/data/picture/9d229e60593320bb640719010382bc4a.png'
      }
      image={
        '	https://media.essilor.com/cms/caas/v1/media/108988/data/picture/fd6b3e7a67a10130180180307ff16218.jpg'
      }
      productbtn={false}
    />,
    <DiscoverCards
      disc={'Light Intelligent Technology'}
      logo={
        '	https://media.essilor.com/cms/caas/v1/media/108982/data/picture/6d00f3bf52af7de54eba63f00ffa3f00.png'
      }
      image={
        '	https://media.essilor.com/cms/caas/v1/media/108990/data/picture/ade51e909d0b12194fb2e6fec5947024.jpg'
      }
      productbtn={false}
    />,
    <DiscoverCards
      disc={`Your lenses' invisible shield`}
      logo={
        '	https://media.essilor.com/cms/caas/v1/media/108984/data/picture/15f69837c1e414212cbe4a29ba8804e1.png'
      }
      image={
        'https://media.essilor.com/cms/caas/v1/media/108992/data/picture/80f2e41b690d912b3e8f85d44e14e0b3.jpg'
      }
      productbtn={false}
    />,
  ];
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Check if window is defined (to avoid SSR issues)
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 480);

      // Add event listener to update isMobile on window resize
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 480);
      };

      window.addEventListener('resize', handleResize);

      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  return (
    <>
      <Box width={'100%'} bgcolor={'#eff0f1'}>
        <div className={styles.completeLen}>
          <h1>Discover the Transitions range</h1>
        </div>
      </Box>
      {isMobile ? (
        <Box
          sx={{
            display: 'flex',
            width: '100%',
          }}
        >
          <Carousel items={items} />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'space-between',
          }}
          alignItems={{
            lg: 'flex-start',
            sm: 'center',
            md: 'flex-start',
            xs: 'center',
          }}
          flexDirection={{
            lg: 'row',
            md: 'row',
            sm: 'column',
            xs: 'column',
          }}
        >
          <DiscoverCards
            disc={'Advanced filtration technology'}
            logo={
              'https://media.essilor.com/cms/caas/v1/media/108980/data/picture/9d229e60593320bb640719010382bc4a.png'
            }
            image={
              '	https://media.essilor.com/cms/caas/v1/media/108988/data/picture/fd6b3e7a67a10130180180307ff16218.jpg'
            }
            productbtn={false}
          />
          <DiscoverCards
            disc={'Light Intelligent Technology'}
            logo={
              '	https://media.essilor.com/cms/caas/v1/media/108982/data/picture/6d00f3bf52af7de54eba63f00ffa3f00.png'
            }
            image={
              '	https://media.essilor.com/cms/caas/v1/media/108990/data/picture/ade51e909d0b12194fb2e6fec5947024.jpg'
            }
            productbtn={false}
          />
          <DiscoverCards
            disc={`Your lenses' invisible shield`}
            logo={
              '	https://media.essilor.com/cms/caas/v1/media/108984/data/picture/15f69837c1e414212cbe4a29ba8804e1.png'
            }
            image={
              'https://media.essilor.com/cms/caas/v1/media/108992/data/picture/80f2e41b690d912b3e8f85d44e14e0b3.jpg'
            }
            productbtn={false}
          />
        </Box>
      )}
    </>
  );
}
