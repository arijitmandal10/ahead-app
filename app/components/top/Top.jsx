import React from 'react';
import top from '../../assets/top.png';
import Image from 'next/image';
import styles from './top.module.css';
const Top = () => {
	return (
		<div className={styles.card}>
			<Image src={top} />
			<div>
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
