'use client';
import React, { useEffect, useRef } from 'react';
import { Card } from '@mui/material';
import styles from './cardslider.module.css';
import Image from 'next/image';
import { gsap } from 'gsap';
import icon1 from '../../assets/icon1.png';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const CardSlider = () => {
	const pElementRef = useRef(null);
	const cardContainerRef = useRef(null);

	const [ref, inView] = useInView({
		triggerOnce: false, // Allow the animation to run each time it's in view
		threshold: 0.5, // Adjust the threshold as needed
	});

	useEffect(() => {
		const pElement = pElementRef.current;

		if (inView) {
			gsap.fromTo(
				pElement,
				{ width: '0%' }, // Start with 0% width
				{
					width: '95%',
					height: '67px',
					overflow: ' hidden', // Increase to 100% width
					opacity: 1,

					duration: 2, // Adjust the duration as needed
					ease: 'power2.out',
				},
			);
		}
	}, [inView]);

	useEffect(() => {
		const cardContainer = cardContainerRef.current;
		const pElement = pElementRef.current;

		if (inView) {
			const cardWidth = pElement.clientWidth;
			const containerWidth = cardContainer.clientWidth;

			const animation = gsap.fromTo(
				cardContainer,
				{ x: containerWidth }, // Start with initial x position outside the container
				{
					x: -containerWidth, // Move to the left by the width of the container
					duration: 10, // Adjust the duration as needed
					ease: 'linear',
					repeat: -1, // Repeat the animation infinitely
				},
			);

			// Pause the animation when not in view
			ScrollTrigger.create({
				trigger: pElement,
				start: 'top center',
				end: 'bottom center',
				onEnter: () => animation.play(),
				onLeaveBack: () => animation.pause(),
			});
		}
	}, [inView]);
	return (
		<div className={styles.cardslider}>
			<div ref={ref}>
				<p ref={pElementRef} style={{ opacity: 0, transform: 'translateX(-20px)' }}>
					Does this sound familiar...
					<Image height={60} width={70} src={icon1} />
				</p>
			</div>

			<div className={styles.cardContainer} ref={cardContainerRef}>
				{' '}
				<Card sx={{ background: '#ffc6c6', transform: 'rotate(10deg)' }}>
					{' '}
					<h1>☹️</h1>
					<br />
					<b>You argue with a colleague</b> <br /> <br />
					You get angry and defensive, instead of staying open and working towards common ground.
				</Card>
				<Card sx={{ background: '#c6eaff' }}>
					<h1>😥</h1>
					<br />
					<b> You attend a class reunion</b> <br /> <br />
					You compare yourself with your peers ochieverents, instead of making your self-judgement more independent of others
				</Card>
				<Card sx={{ background: '#c6ffc9', transform: 'rotate(350deg)' }}>
					<h1>😀</h1>
					<br />
					<b>You are at a lively dinner party</b> <br /> <br />
					You play on your phone, instead of confidently approaching strangers and striking upto a chat
				</Card>
				<Card sx={{ background: '#545aff', color: '#c6c6c6' }}>
					<h1>🤔</h1>
					<br />
					<b> You attend a class reunion</b> <br /> <br />
					You compare yourself with your peers ochieverents, instead of making your self-judgement more independent of others
				</Card>
				<Card sx={{ background: '#b3b3b3' }}>
					<h1>😋</h1>
					<br />
					<b>You hit dead end in a negotiation</b> <br /> <br />
					You get nervous, frazzled, ond frustrated, instead of staying optimistic and solution-oriented.
				</Card>
			</div>
		</div>
	);
};

export default CardSlider;
