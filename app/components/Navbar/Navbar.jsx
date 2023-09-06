import React from 'react';
import logo from '../../../public/logo.png';
import { Button } from '@mui/material';
import Image from 'next/image';
import styles from './navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<Image height={50} width={50} src={logo} alt='img' />

			<ul>
				<li>Emotions</li>
				<li>Manifesto</li>
				<li>Self-awareness test</li>
				<li>Work With Us</li>
			</ul>

			<Button
				variant='contained'
				sx={{
					background: 'black',
					borderRadius: '25px',
					textTransform: 'unset',
				}}
			>
				Download App
			</Button>
		</nav>
	);
};

export default Navbar;
