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
	const imageRef = useRef(null);

	useEffect(() => {
		const card = cardRef.current;
		const image = imageRef.current;

		// Initialize the animation timeline
		const tl = gsap.timeline({
			scrollTrigger: {
				id: 'card2Trigger', // Add an ID to the ScrollTrigger instance
				trigger: card,
				start: 'top 60%',
				end: 'bottom 50%',
				once: true, // Trigger the animation only once
			},
		});

		// Define the animations
		tl.fromTo(
			card.querySelector('.left'),
			{ x: -50, opacity: 0, scale: 0.5 },
			{ x: 0, opacity: 1, scale: 1, duration: 2, ease: 'elastic.out(1, 0.5)' },
		);

		tl.fromTo(
			card.querySelector('.right'),
			{ x: 50, opacity: 0, scale: 0.5 },
			{ x: 0, opacity: 1, scale: 1, duration: 2, ease: 'elastic.out(1, 0.5)' },
			'-=2', // Delay the right-side animation by 2 seconds
		);

		// 3D rotation animation for the image
		tl.to(
			image,
			{
				duration: 4, // Adjust the duration for a slower rotation
				rotationY: 360, // Rotate around the Y-axis (360 degrees)
				rotationX: 360, // Rotate around the X-axis (360 degrees)
				transformOrigin: 'center center', // Rotate around the center of the image
				ease: 'power4.inOut', // Use easing for a smoother rotation effect
			},
			'-=2', // Same delay as the right-side animation
		);

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
				<Image
					ref={imageRef}
					src={img1}
					width={550}
					height={350}
					style={{
						transformStyle: 'preserve-3d', // Enable 3D rendering for the image
						perspective: '1000px', // Set a perspective value for 3D space
					}}
				/>
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
