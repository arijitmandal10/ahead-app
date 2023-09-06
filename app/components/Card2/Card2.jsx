import React from 'react';
import styles from './card2.module.css';
import Image from 'next/image';
import img1 from '../../assets/img1.png';
import { Card, Typography } from '@mui/material';

const Card2 = () => {
	return (
		<Card className={styles.card2}>
			<div className={styles.left}>
				<h4 style={{ margin: '30px' }}>Built out of frustration</h4>

				<p style={{ margin: '30px' }}>Meet the ahead app</p>
				<Image src={img1} width={550} height={350} />
			</div>

			<div className={styles.right}>
				<Typography variant='h6' component='h6'>
					A personalized pocket coach that provides bite- sized, science-driven tools to boost emotional intelligence. <br /> Think of
					it as a pocket cheerleader towards a better, more fulfilling.
				</Typography>
			</div>
		</Card>
	);
};

export default Card2;
