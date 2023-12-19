import { Grid, Box, Container } from '@mui/material';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Lens from '@/components/lens';
import DiscoverBrand from '@/components/dicoverOurBrand';
import DiscoverProduct from '@/components/dicoverOurBrand/discoverOurProduct';
import NewLetter from '@/components/newsLetter';
import Slider from '@/components/slider';
import JourneySection from '@/components/JourneySection';

import '../../global.css';
import styles from './style.module.css';

export default function Home() {
	return (
		<>
			<Header />
			<Box className={`primaryBg m64`}>
				<Grid direction={'row'} justifyContent={'center'}>
					<Grid md={10} lg={10} sm={12} xs={12}>
						<Slider />
					</Grid>
				</Grid>
				<Container maxWidth="lg">
					<Lens />
					<DiscoverBrand />
				</Container>
			</Box>
			<Box>
				<NewLetter />
				<Box className={styles.discoverProductContainer}>
					<Container maxWidth="lg">
						<DiscoverProduct />
					</Container>
				</Box>
			</Box>
			<Footer />
		</>
	);
}
