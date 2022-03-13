import React from 'react';
import { Content } from '../../components/Content/Content';
import Hero from '../../components/Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../../data/HeroData';

// Hero Feature Content Carousel

const Home = () => {
	return (
		<>
			<Hero />
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
		</>
	);
};

export default Home;
