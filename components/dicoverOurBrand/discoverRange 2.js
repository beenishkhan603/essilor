import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import Carousel from '../dicoverOurBrand/carousel';
import DiscoverCards from '../dicoverOurBrand/discoverCards';
import { Box } from '@mui/material';

export default function discoverRange() {
  const items = [
    <DiscoverCards
      disc={'Instant sharpness even in motion'}
      logo={
        'https://media.essilor.com/cms/caas/v1/media/109008/data/picture/e57842de5b858baae624f4c3295c3948.png'
      }
      image={
        'https://media.essilor.com/cms/caas/v1/media/498200/data/picture/d1668089e1da751e6db4a51cbbdc3ba4.png'
      }
      productbtn={false}
    />,
    <DiscoverCards
      disc={'Capture every detail with instant sharp vision'}
      logo={
        'https://media.essilor.com/cms/caas/v1/media/109008/data/picture/e57842de5b858baae624f4c3295c3948.png'
      }
      image={
        'https://media.essilor.com/cms/caas/v1/media/108904/data/picture/ca158195c0fbdec39ebf67ac545eabed.jpg'
      }
      productbtn={false}
    />,
    <DiscoverCards
      disc={`Your lenses' invisible shield`}
      logo={
        '	https://media.essilor.com/cms/caas/v1/media/109004/data/picture/5637fe212b1592919b040274d3bc0490.png'
      }
      image={
        'https://media.essilor.com/cms/caas/v1/media/109012/data/picture/d69997f14aa9276617a66836037d4728.jpg'
      }
      productbtn={false}
    />,
    <DiscoverCards
      disc={`Effortless vision for busy and active lifestyles `}
      logo={
        'https://media.essilor.com/cms/caas/v1/media/115414/data/picture/a2488ffde0cdcbd4c979e4a007b14d70.png'
      }
      image={
        '	https://media.essilor.com/cms/caas/v1/media/109014/data/picture/d37abedd42de32adc70005bdafd44995.png'
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
            disc={'Instant sharpness even in motion'}
            logo={
              'https://media.essilor.com/cms/caas/v1/media/109008/data/picture/e57842de5b858baae624f4c3295c3948.png'
            }
            image={
              'https://media.essilor.com/cms/caas/v1/media/498200/data/picture/d1668089e1da751e6db4a51cbbdc3ba4.png'
            }
            productbtn={false}
          />
          <DiscoverCards
            disc={'Capture every detail with instant sharp vision'}
            logo={
              'https://media.essilor.com/cms/caas/v1/media/109008/data/picture/e57842de5b858baae624f4c3295c3948.png'
            }
            image={
              'https://media.essilor.com/cms/caas/v1/media/108904/data/picture/ca158195c0fbdec39ebf67ac545eabed.jpg'
            }
            productbtn={false}
          />
          <DiscoverCards
            disc={`Your lenses' invisible shield`}
            logo={
              '	https://media.essilor.com/cms/caas/v1/media/109004/data/picture/5637fe212b1592919b040274d3bc0490.png'
            }
            image={
              'https://media.essilor.com/cms/caas/v1/media/109012/data/picture/d69997f14aa9276617a66836037d4728.jpg'
            }
            productbtn={false}
          />
          <DiscoverCards
            disc={`Effortless vision for busy and active lifestyles `}
            logo={
              'https://media.essilor.com/cms/caas/v1/media/115414/data/picture/a2488ffde0cdcbd4c979e4a007b14d70.png'
            }
            image={
              '	https://media.essilor.com/cms/caas/v1/media/109014/data/picture/d37abedd42de32adc70005bdafd44995.png'
            }
            productbtn={false}
          />
        </Box>
      )}
    </>
  );
}
