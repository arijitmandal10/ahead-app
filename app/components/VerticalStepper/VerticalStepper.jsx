import styles from './verticalstepper.module.css';
import icon2 from '../../assets/icon2.png';
import Image from 'next/image';
import React from 'react';
import { Stepper, Step, StepLabel, Typography, Card } from '@mui/material';

const steps = ['Step 1', 'Step 2', 'Step 3'];

const VerticalStepper = () => {
	return (
		<div className={styles.steps}>
			<div className={styles.top}>
				<h3 style={{ margin: '10px 70px' }}>Wrong with self-improvement & how we're fixing it.</h3>
				<p style={{ margin: '10px 70px' }}>
					Self-improvement. Ugh. <Image src={icon2} height={60} width={70} />
				</p>
			</div>

			<div style={{ width: '80%', margin: ' 85px auto' }}>
				<Stepper orientation='vertical'>
					<Step>
						<StepLabel>
							<b>It's not as easy as 1-2-3.</b>
							<br /> The journey of change may be long, but our sessions are quick. We get to the point and tell you what you
							want to know (and nothing else).
						</StepLabel>
					</Step>
					<Step>
						<StepLabel>
							<b>Old habits are hard to break.</b>
							<br />
							And bad behaviors die hard. Fortunately, we give you great, science- backed techniques to use. 
						</StepLabel>
					</Step>
					<Step>
						<StepLabel>
							<b>You and your motivation don't have a long-term relationship.</b>
							<br />
							Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill
							help you stick to your goals.
						</StepLabel>
					</Step>
					<Step>
						<StepLabel>
							{' '}
							<b>Books just don't offer practical</b>
							<br />
							Remember when you learned to ride a bike just by reading? Yeah, we don't either. We help you take concrete small
							steps towards your goals. Learning just a bit, then immediately springing into action.
						</StepLabel>
					</Step>
				</Stepper>
			</div>

			<div className={styles.bottom}>
				<div style={{ width: '74%' }}>
					{' '}
					<h1>Be the best you with EQ</h1>
				</div>
				<div>
					<p>Not having your own emotions under control might be holding you back.</p>
				</div>
				<div>
					<p>Additionally, not understanding those of others stops you from being parent, friend you can be.</p>
				</div>
			</div>
		</div>
	);
};

export default VerticalStepper;
