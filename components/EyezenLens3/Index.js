import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import Carousel from '../dicoverOurBrand/carousel';
import DiscoverCards from '../dicoverOurBrand/discoverCards';
import hamImg from '../assets/hamilton1.jpg'
import discoverImg from '@/components/assets/Eyezen-lenses.jpg';
import variluxImg from '@/components/assets/beautiful-woman-sitting-chair.jpg';
import xperiaImg from '@/components/assets/fashionable-girl-cafe.jpg';
import crizalImg from '@/components/assets/stylish-businesswoman-cafe.jpg';
import nevImg from '../assets/nevis.jpg'
import { Box } from '@mui/material';

export default function EyezenLens() {
  const items = [
    <div>
      <p className={styles.headingMbl}>Correct your vision</p>
      <DiscoverCards
        disc={'Advanced filtration technology'}
        logo={
          'https://media.essilor.com/cms/caas/v1/media/108824/data/picture/e99ad6f8be401d9a340e03118038d7fa.png'
        }
        image={
          'https://media.essilor.com/cms/caas/v1/media/108858/data/picture/2bc61102fa37d6b8a38c2de43a6a7a1a.jpg'
        }
        productbtn={true}
      />
    </div>,

    <div>
      <p className={styles.headingMbl}>Correct your vision</p>
      <DiscoverCards
        disc={'Light Intelligent Technology'}
        logo={
          'https://media.essilor.com/cms/caas/v1/media/108828/data/picture/623eb9a7a9542e23e8644eb2d5700424.png'
        }
        image={
          'https://media.essilor.com/cms/caas/v1/media/108852/data/picture/d8930867df0d4b44342bc28ccdc9de0b.png'
        }
        productbtn={true}
      />
    </div>,
    <div>
      <p className={styles.headingMbl}>Enhance your vision</p>
      <DiscoverCards
        disc={`Your lenses' invisible shield`}
        logo={
          'https://media.essilor.com/cms/caas/v1/media/108822/data/picture/fa10b1d3b7f907793c7fce164c1bfa79.png'
        }
        image={
          hamImg
        }
        productbtn={true}
      />
    </div>,
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
      <Box width={'90%'}>
        <div className={styles.completeLen}>
          <h1>Combine your Ben Nevis lenses with</h1>
          {isMobile ? null : (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>Correct your vision</h3>
              {/* <h3>Enhance your vision</h3> */}
            </div>
          )}
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
          className={styles.completeLenMedia}
        >
          <DiscoverCards
            disc={'Advanced filtration technology'}
            logo={
              'https://media.essilor.com/cms/caas/v1/media/108824/data/picture/e99ad6f8be401d9a340e03118038d7fa.png'
            }
            image={
              discoverImg
            }
            title= {"Balnc"}
            productbtn={true}
          />
          <DiscoverCards
            disc={'Advanced filtration technology'}
            logo={
              null
            }
            image={
              variluxImg
            }
            productbtn={true}
            title= {"Benty"}
          />
          <DiscoverCards
            disc={`Your lenses' invisible shield`}
            logo={
              null
            }
            image={crizalImg}
            
            productbtn={true}
            title= {"Hamilton"}
          />
        </Box>
      )}
    </>
  );
}
