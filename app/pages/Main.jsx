import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Top from '../components/top/top';
import CardSlider from '../components/CardSlider/CardSlider';
import Card2 from '../components/Card2/Card2';
import VerticalStepper from '../components/VerticalStepper/VerticalStepper';
import Open from '../components/Open/Open';

const Main = () => {
	return (
		<>
			<Navbar />
			<Top />
			<CardSlider />
			<Card2 />
			<VerticalStepper />
			<Open />
		</>
	);
};

export default Main;
