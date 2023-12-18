import { Grid, Box, Container } from '@mui/material';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Lens from '@/components/lens';
import DiscoverBrand from '@/components/dicoverOurBrand';
import DiscoverProduct from '@/components/dicoverOurBrand/discoverOurProduct';
import NewLetter from '@/components/newsLetter';

import '../../global.css';
import styles from './style.module.css';

export default function Home() {
	return (
		<>
			<Header />
			<Box className={`primaryBg m64`}>
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
