import React from 'react';
import { Grid } from '@mui/material';
import DiscoverCards from './discoverCards';

import style from './style.module.css';

export default function discoverRange() {
	return (
		<div className={style.rangeMain}>
			<Grid direction="row" container>
				<Grid item md={1} lg={1} sm={12} xs={12}></Grid>
				<Grid item md={9} lg={9} sm={12} xs={12}>
					<p className={style.heading1}>{`Discover the Xperio range`}</p>
				</Grid>
			</Grid>
			<Grid container direction="row" justifyContent={'center'}>
				<Grid
					item
					md={9}
					lg={9}
					sm={12}
					xs={12}
					paddingY={{ xs: '20px', sm: '20px', md: '100px', lg: '100px' }}
					display={'flex'}
					justifyContent={{
						lg: 'flex-start',
						sm: 'center',
						md: 'flex-start',
						xs: 'center',
					}}
				>
					<DiscoverCards
						disc={'Ultimate visual comfort'}
						width={'20% !important'}
						logo={
							'https://media.essilor.com/cms/caas/v1/media/108896/data/picture/317a6be1f91ad8662031c633cc22794c.png'
						}
						image={
							'https://media.essilor.com/cms/caas/v1/media/108904/data/picture/ca158195c0fbdec39ebf67ac545eabed.jpg'
						}
						productbtn={false}
					/>
				</Grid>
			</Grid>
		</div>
	);
}
