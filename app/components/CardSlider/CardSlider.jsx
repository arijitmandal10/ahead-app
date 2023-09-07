'use client';
import React, { useEffect, useRef, useState } from 'react';
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
	const [animationTriggered, setAnimationTriggered] = useState(false);

	useEffect(() => {
		const pElement = pElementRef.current;
		const cardContainer = cardContainerRef.current;

		if (!animationTriggered) {
			const cardWidth = pElement.clientWidth;
			const containerWidth = cardContainer.clientWidth;

			const animation = gsap.fromTo(
				cardContainer,
				{ x: containerWidth },
				{
					x: -containerWidth,
					duration: 10,
					ease: 'linear',
					repeat: -1,
				},
			);

			ScrollTrigger.create({
				trigger: pElement,
				start: 'top center',
				end: 'bottom center',
				onEnter: () => {
					gsap.fromTo(
						pElement,
						{ width: '0%' },
						{
							width: '95%',
							height: '67px',
							overflow: 'hidden',
							opacity: 1,
							duration: 2,
							ease: 'power2.out',
						},
					);
					animation.play();
					setAnimationTriggered(true);
				},
				onLeaveBack: () => animation.pause(),
			});
		}
	}, [animationTriggered]);
	return (
		<div className={styles.cardslider}>
			<div>
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
