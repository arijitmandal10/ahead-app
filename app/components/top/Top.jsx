'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import top from '../../assets/top.png';
import Image from 'next/image';
import styles from './top.module.css';

const Top = () => {
	const imageWrapperRef = useRef(null);
	const bottomDivRef = useRef(null);

	useEffect(() => {
		const imageWrapper = imageWrapperRef.current;

		// Create a GSAP animation for the rotation with a faster duration
		gsap.to(imageWrapper, {
			rotation: 360, // Rotate 360 degrees
			duration: 0.5, // Decreased duration for faster rotation
			ease: 'power1.inOut', // Easing function
		});
	}, []);

	useEffect(() => {
		const bottomDiv = bottomDivRef.current;

		// Create a GSAP timeline animation
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: bottomDiv,
				start: 'top 90%', // Adjust the start value to start the animation earlier
				end: 'bottom center',
				scrub: 1, // Adjust the scrub value for the speed of the animation
			},
		});

		// Define the animation for the entire div
		tl.from(bottomDiv, {
			y: 100, // Start position (move up from below)
			opacity: 0, // Start with opacity 0
		});

		// Define animations for the child elements (h1 and p)
		tl.from(bottomDiv.querySelector('h1'), {
			y: 50,
			opacity: 0,
		});

		tl.from(bottomDiv.querySelectorAll('p'), {
			y: 50,
			opacity: 0,
			stagger: 0.2, // Add stagger for multiple elements
		});

		// Return a cleanup function
		return () => {
			tl.kill(); // Kill the animation when the component unmounts
		};
	}, []);

	return (
		<div className={styles.card}>
			<div ref={imageWrapperRef} className={styles.imageWrapper}>
				<Image src={top} />
			</div>
			<div ref={bottomDivRef}>
				<div style={{ width: '74%' }}>
					{' '}
					<h1>EQ beats IQ</h1>
				</div>
				<div>
					<p>
						People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier
						relationships.
					</p>
				</div>
				<div>
					<p>
						They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Top;
