import React from 'react';
import { Card, Button } from '@mui/material';
import styles from './open.module.css';
import footer from '../../assets/footer.png';
import Image from 'next/image';

const Open = () => {
	return (
		<div className={styles.container}>
			<p>Open vacancies</p>

			<div className={styles.cards}>
				<Card>
					<h2>Senior Full-Stack Engineer</h2>
					<ul>
						<li>Full-time position</li>
						<li>Berlin or Remote</li>
						<li>€65-85k, 0.5-1.50% equity share options</li>
					</ul>

					<Button
						variant='contained'
						sx={{
							background: 'black',
							borderRadius: '25px',
							textTransform: 'unset',
						}}
					>
						See Details
					</Button>
				</Card>
				<Card>
					<h2>Senior Desiner</h2>{' '}
					<ul>
						<li>Full-time position</li>
						<li>Berlin or Remote</li>
						<li>€40-55k, 0.25-0.50% equity share options</li>
					</ul>
					<Button
						variant='contained'
						sx={{
							background: 'black',
							borderRadius: '25px',
							textTransform: 'unset',
						}}
					>
						See Details{' '}
					</Button>
				</Card>
				<Card>
					<h2>Superstar intern</h2>{' '}
					<ul>
						<li>Full-time position</li>
						<li>Berlin or Remote</li>
						<li>€20-24k, 0.5-1.50% equity share options</li>
					</ul>
					<Button
						variant='contained'
						sx={{
							background: 'black',
							borderRadius: '25px',
							textTransform: 'unset',
						}}
					>
						See Details
					</Button>
				</Card>
			</div>
			<Image src={footer} />
		</div>
	);
};

export default Open;
