import React from 'react';
import { Content } from '../../components/Content/Content';
import Hero from '../../components/Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../../data/HeroData';

//Components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Home = () => {
	return (
		<>
		<Navbar />
			<Hero />
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
		<Footer />
		</>
	);
};

export default Home;
