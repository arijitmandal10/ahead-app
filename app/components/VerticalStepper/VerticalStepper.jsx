'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './verticalstepper.module.css';
import icon2 from '../../assets/icon2.png';
import Image from 'next/image';
import gsap from 'gsap';
import { Stepper, Step, StepLabel, Typography, Card } from '@mui/material';

const steps = [
	{
		a: 'Its not as easy as 1-2-3.',
		b: 'The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else). ',
	},

	{ a: 'Old habits are hard to break.', b: 'And bad behaviors die hard. Fortunately, we give you great, science- backed techniques to use. ' },
	{
		a: 'You and your motivation dont have a long-term relationship.',
		b: 'Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill help you stick to your goals.',
	},
	{
		a: "Books just don't offer practical",
		b: "Remember when you learned to ride a bike just by reading? Yeah, we don't either. We help you take concrete smallsteps towards your goals. Learning just a bit, then immediately springing into action.",
	},
];

const VerticalStepper = () => {
	const [activeStep, setActiveStep] = useState(-1);
	const topDivRef = useRef(null);
	const bottomDivRef = useRef(null);

	useEffect(() => {
		const topDiv = topDivRef.current;

		// Create a GSAP timeline animation
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: topDiv,
				start: 'top 60%',
				end: 'bottom center',
				scrub: 2,
			},
		});

		// Define the animation
		tl.from(topDiv, {
			x: -100, // Start position (off-screen to the left)
			opacity: 0, // Start with opacity 0
		});

		tl.from(topDiv.querySelector('h3'), {
			x: -50,
			opacity: 0,
		});

		tl.from(topDiv.querySelector('p'), {
			x: -50,
			opacity: 0,
		});

		// Return a cleanup function
		return () => {
			tl.kill(); // Kill the animation when the component unmounts
		};
	}, []);

	useEffect(() => {
		const bottomDiv = bottomDivRef.current;

		// Create a GSAP timeline animation
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: bottomDiv,
				start: 'top center',
				end: 'bottom center',
				scrub: 1, // Adjust the scrub value for the speed of the animation
			},
		});

		// Define the animation for the entire div
		tl.from(bottomDiv, {
			y: 100, // Start position (move up from below)
			opacity: 0, // Start with opacity 0
		});

		// You can add more animation steps as needed

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
		<div className={styles.steps}>
			<div className={styles.top} ref={topDivRef}>
				<h3 style={{ margin: '10px 70px' }}>Wrong with self-improvement & how we're fixing it.</h3>
				<p style={{ margin: '10px 70px' }}>
					Self-improvement. Ugh. <Image src={icon2} height={60} width={70} />
				</p>
			</div>

			<div style={{ width: '80%', margin: ' 85px auto' }}>
				<Stepper orientation='vertical'>
					{steps.map((label, index) => (
						<Step
							key={label}
							onMouseEnter={() => setActiveStep(index)}
							onMouseLeave={() => setActiveStep(-1)}
							active={index === activeStep}
						>
							<StepLabel>
								<b>{label.a}</b>
								<br /> {label.b}.
							</StepLabel>
						</Step>
					))}
				</Stepper>
			</div>

			<div className={styles.bottom} ref={bottomDivRef}>
				<div style={{ width: '74%' }}>
					{' '}
					<h1>Be the best you with EQ</h1>
				</div>
				<div>
					<p>Not having your own emotions under control might be holding you back.</p>
				</div>
				<div>
					<p>Additionally, not understanding those of others stops you from being the parent, friend you can be.</p>
				</div>
			</div>
		</div>
	);
};

export default VerticalStepper;
