import React from 'react';
import { Typography } from '@mui/material';
import NewsLetter from '@/components/newsLetter';
import Image from 'next/image';

import './style.css';

function GridComponent() {
	return (
		<>
			<div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
				<div style={{ flexBasis: '50%' }}>
					<div
						style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
					>
						<Typography
							sx={{
								fontSize: '32px',
								lineHeight: '42px',
								letterSpacing: 0,
								fontWeight: 'bold',
							}}
						>
							Which Blanc lenses are right for me?
						</Typography>
						<Typography
							sx={{
								fontSize: '18px',
								lineHeight: '28px',
								letterSpacing: 0,
								fontWeight: 'bold',
							}}
						>
							Looking for more than simple correction
						</Typography>
						<Typography
							sx={{
								fontSize: '14px',
								color: 'black',
								lineHeight: '24px',
								fontFamily: 'sans-serif',
							}}
						>
							Eyezen® Start lenses are optimised single vision lenses designed
							to relax and protect8 your eyes, from 12 years old and up.
							Discover Eyezen® Start
						</Typography>
					</div>
				</div>
				<div style={{ flexBasis: '50%' }}>
					<div>
						<Image
							src="/img/grid_image.avif"
							height={600}
							width={600}
							alt="grid_image"
						/>
					</div>
				</div>
			</div>
			<NewsLetter />
		</>
	);
}

export default GridComponent;
