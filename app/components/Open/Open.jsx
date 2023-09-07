'use client';
import React, { useEffect } from 'react';
import { Card, Button } from '@mui/material';
import styles from './open.module.css';
import footer from '../../assets/footer.png';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Open = () => {
	useEffect(() => {
		const cardTextAnimations = gsap.utils.toArray('.card-text');

		cardTextAnimations.forEach((element) => {
			gsap.from(element, {
				opacity: 0,
				y: 20,
				duration: 0.8,
				scrollTrigger: {
					trigger: element,
					start: 'top 80%',
					once: true,
				},
			});
		});
	}, []);

	return (
		<div className={styles.container}>
			<p className='card-text'>Open vacancies</p>

			<div className={styles.cards}>
				<Card>
					<h2>Senior Full-Stack Engineer</h2>
					<ul>
						<li className='card-text'>Full-time position</li>
						<li className='card-text'>Berlin or Remote</li>
						<li className='card-text'>€65-85k, 0.5-1.50% equity share options</li>
					</ul>

					<Button
						variant='contained'
						sx={{
							background: 'black',
							borderRadius: '25px',
							textTransform: 'unset',
							'&:hover': {
								background: 'white',
								color: 'black',
							},
						}}
					>
						See Details
					</Button>
				</Card>
				<Card>
					<h2>Senior Desiner</h2>{' '}
					<ul>
						<li className='card-text'>Full-time position</li>
						<li className='card-text'>Berlin or Remote</li>
						<li className='card-text'>€40-55k, 0.25-0.50% equity share options</li>
					</ul>
					<Button
						variant='contained'
						sx={{
							background: 'black',
							borderRadius: '25px',
							textTransform: 'unset',
							'&:hover': {
								background: 'white',
								color: 'black',
							},
						}}
					>
						See Details{' '}
					</Button>
				</Card>
				<Card>
					<h2>Superstar intern</h2>{' '}
					<ul>
						<li className='card-text'>Full-time position</li>
						<li className='card-text'>Berlin or Remote</li>
						<li className='card-text'>€20-24k, 0.5-1.50% equity share options</li>
					</ul>
					<Button
						variant='contained'
						sx={{
							background: 'black',
							borderRadius: '25px',
							textTransform: 'unset',
							'&:hover': {
								background: 'white',
								color: 'black',
							},
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
