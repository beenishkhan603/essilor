'use client';
import { useState } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import logo from '@/components/assets/logo.jpeg';

import styles from './style.module.css';
import Image from 'next/image';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const pages = [
    { name: 'About us', url: '/about-us' },
    { name: 'Our products', url: '' },
    { name: 'Help me choose', url: '' },
  ];

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        className={styles.appbar}
        //   className={
        // 	!open ? `${styles.appbar} ${styles.customNavbar}` : styles.appbar
        //   }
      >
        <Toolbar>
          <Box className={styles.navContent}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                width: '100%',
              }}
            >
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                width={'100%'}
              >
                <Box display={'flex'}>
                  <Link href='/'>
                    <Image src={logo} alt={'logo'} className={styles.logo} />
                  </Link>
                  <Box className={styles.barItem}>
                    {pages.map((page) => (
                      <Button
                        key={page.name}
                        onClick={() =>
                          page.name == 'Our products' && setDrop(!drop)
                        }
                        className={styles.barItemBtn}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                        <div className={styles.barItemContent}>
                          <p className={styles.barItemText}>
                            <Link href={page.url}>{page.name}</Link>
                          </p>
                          {page.name == 'Our products' ? (
                            <ArrowBackIosIcon
                              sx={{
                                color: '#fff',

                                fontSize: '16px !important',
                              }}
                              className={styles.barItemIcon}
                            />
                          ) : null}
                        </div>
                      </Button>
                    ))}
                  </Box>
                </Box>

                <Box className={styles.barItemGlobe}>
                  <LanguageIcon
                    sx={{
                      color: '#fff',
                      alignSelf: 'center',
                      fontSize: '42px !important',
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                width: '100%',
              }}
            >
              <Box className={styles.barItemMbl}>
                {!drawerOpen ? (
                  <DragHandleIcon
                    sx={{
                      color: '#fff',
                      alignSelf: 'center',
                      fontSize: '28px !important',
                      cursor: 'pointer',
                    }}
                    onClick={handleDrawerOpen}
                  />
                ) : (
                  <CloseIcon
                    sx={{
                      color: '#fff',
                      alignSelf: 'center',
                      fontSize: '28px !important',
                      cursor: 'pointer',
                    }}
                    onClick={handleDrawerClose}
                  />
                )}
                <Image
                  src={
                   logo
                  }
                  alt={'logo'}
                  className={styles.logo}
                />
                <LocationOnIcon
                  sx={{
                    color: '#fff',
                    alignSelf: 'center',
                    fontSize: '28px !important',
                    cursor: 'pointer',
                  }}
                />
              </Box>
            </Box>
          </Box>
          {drop && (
            <Box className={styles.navigationDropdown}>
              <Box className={styles.navigationDropdownContent}>
                <div className={styles.card}>
                  <p className={styles.cardheading}>Lenses for you</p>

                  <p className={styles.cardText}>
                    Belvin lenses are the number one brand in spectacle lenses
                    recommended by opticians around the world. We have a vision
                    solution for every lifestyle and need.
                  </p>

                  <a href='/products/'>Discover all products</a>
                </div>
                <Box className={styles.linksWrapper}>
                  <Box>
                    <Typography className={styles.detailHeading}>
                      Correct
                    </Typography>

                    <Link href='/product-detail'>
                      <Typography className={styles.detailLink}>
                        Blanc
                      </Typography>
                    </Link>
                    <Link href='/matterhorn'>
                      <Typography className={styles.detailLink}>
                        Matterhorn
                      </Typography>
                    </Link>
                  </Box>
                  <Box>
                    <Typography className={styles.detailHeading}>
                      Protection
                    </Typography>
                    <Link href='/elbrus'>
                      <Typography className={styles.detailLink}>
                        Elbrus
                      </Typography>
                    </Link>
                    <Link href='/ben'>
                      <Typography className={styles.detailLink}>
                        Ben Nevis
                      </Typography>
                    </Link>
                    {/* <Link href="/product-detail">
											<Typography className={styles.detailLink}>
												Tatra
											</Typography>
										</Link> */}
                  </Box>
                  <Box>
                    <Typography className={styles.detailHeading}>
                      Enhance
                    </Typography>
                    <Link href='/hamilton'>
                      <Typography className={styles.detailLink}>
                        Hamilton
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor='top'
        open={drawerOpen}
        onClose={handleDrawerClose}
        className={styles.drawerMain}
        classes={{
          backDrop: styles.drawerBackDrop,
          paper: styles.drawerPaper,
        }}
      >
        <List>
          <Link href='/about-us'>
            <ListItem
              button
              onClick={handleDrawerClose}
              className={styles.listItem}
            >
              <Typography variant='h6' className={styles.drawerLink}>
                About us
              </Typography>
            </ListItem>
          </Link>
          <Link href='/'>
            <ListItem button className={styles.listItem}>
              <Accordion
                onChange={() => setAccordionOpen(!accordionOpen)}
                className={styles.accordion}
              >
                <AccordionSummary
                  className={styles.accordionSummary}
                  expandIcon={accordionOpen ? <CloseIcon /> : <AddIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography variant='h6' className={styles.drawerLink}>
                    Our products
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.accordionDetail}>
                  <Typography className={styles.detailHeading}>
                    Correct
                  </Typography>
                  <Link href='/product-detail'>
                    <Typography className={styles.detailLink}>Blanc</Typography>
                  </Link>
                  <Link href='/matterhorn'>
                    <Typography className={styles.detailLink}>
                      Matterhorn
                    </Typography>
                  </Link>
                  <Typography className={styles.detailHeading}>
                    Protection
                  </Typography>
                  <Link href='/elbrus'>
                    <Typography className={styles.detailLink}>
                      Elbrus
                    </Typography>
                  </Link>
                  <Link href='/ben'>
                    <Typography className={styles.detailLink}>
                      Ben Nevis
                    </Typography>
                  </Link>
                  {/* <Link href="/product-detail">
										{' '}
										<Typography className={styles.detailLink}>Tatra</Typography>
									</Link> */}
                  <Typography className={styles.detailHeading}>
                    Enhance
                  </Typography>
                  <Link href='/hamilton'>
                    <Typography className={styles.detailLink}>
                      Hamilton
                    </Typography>
                  </Link>
                  <Typography className={styles.detailbtn}>
                    Discover all products
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </ListItem>
          </Link>
          <Link href='/products'>
            <ListItem
              button
              onClick={handleDrawerClose}
              className={styles.listItem}
            >
              <Typography variant='h6' className={styles.drawerLink}>
                Help me choose
              </Typography>
            </ListItem>
          </Link>
          {/* Add more links as needed */}
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
