import React from 'react';
import { Grid } from '@mui/material';
import DiscoverCards from './discoverCards';
import img from './imgs/img.jpg'
import style from './style.module.css';

export default function discoverRange() {
  return (
    <div className={style.rangeMain}>
      <Grid direction='row' container>
        <Grid item md={1} lg={1} sm={12} xs={12}></Grid>
        <Grid item md={9} lg={9} sm={12} xs={12}>
          <p className={style.heading1}>{`Discover the  lens range`}</p>
        </Grid>
      </Grid>
      <Grid container direction='row' justifyContent={'center'}>
        <Grid
          item
          md={9}
          lg={12}
          xl={9}
          sm={12}
          xs={12}
          paddingY={{ xs: '20px', sm: '20px', md: '100px', lg: '100px' }}
          paddingX={{lg: '20px'}}
          display={'flex'}
          justifyContent={{
            lg: 'flex-start',
            sm: 'center',
            md: 'flex-start',
            xs: 'center',
          }}
          
        >
          <DiscoverCards
            disc={'The new generation of single vision lenses'}
            width={'20% !important'}
            logo={
              '	https://media.essilor.com/cms/caas/v1/media/108954/data/picture/92e19318e219365f76fd58ded659d571.png'
            }
            image={
              img
            }
            productbtn={false}
          />
        </Grid>
      </Grid>
    </div>
  );
}
