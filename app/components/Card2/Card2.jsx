'use client';
import React, { useEffect, useRef } from 'react';
import { Card, Typography } from '@mui/material';
import styles from './card2.module.css';
import Image from 'next/image';
import img1 from '../../assets/img1.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Card2 = () => {
	const cardRef = useRef(null);

	useEffect(() => {
		const card = cardRef.current;

		// Initialize the animation timeline
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: card,
				start: 'top 80%',
				end: 'bottom 20%',
				scrub: true, // Smooth scrubbing effect
			},
		});

		// Define the animations
		tl.fromTo(
			card.querySelector('.left'),
			{ x: -50, opacity: 0, scale: 0.5 },
			{ x: 0, opacity: 1, scale: 1, duration: 2, ease: 'elastic.out(1, 0.)' },
		);

		tl.fromTo(
			card.querySelector('.right'),
			{ x: 50, opacity: 0, scale: 0.5 },
			{ x: 0, opacity: 1, scale: 1, duration: 2, ease: 'elastic.out(1, 0.4)' },
			'-=0.5', // Delay the right-side animation slightly
		);

		// You can add more animations within this timeline as needed

		return () => {
			// Kill the ScrollTrigger and animations when the component unmounts
			tl.kill();
			ScrollTrigger.getById('card2Trigger').kill();
		};
	}, []);

	return (
		<Card className={styles.card2} ref={cardRef}>
			<div className={`${styles.left} left`}>
				<h4 style={{ margin: '30px' }}>Built out of frustration</h4>
				<p style={{ margin: '30px' }}>Meet the ahead app</p>
				<Image src={img1} width={550} height={350} />
			</div>
			<div className={`${styles.right} right`}>
				<Typography variant='h6' component='h6'>
					A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
					<br /> Think of it as a pocket cheerleader towards a better, more fulfilling.
				</Typography>
			</div>
		</Card>
	);
};

export default Card2;
