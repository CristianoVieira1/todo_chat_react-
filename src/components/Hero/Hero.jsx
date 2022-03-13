import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../styles/globalStyles';
import { HeroImg, HeroSection, HeroText, ButtonWrapper } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroImg src='./assets/hero.png' alt='Hero' />
			<Container>
				<MainHeading>Converse com seus amigos</MainHeading>
				<HeroText>
					Com o ChatOn tudo fica divertido
				</HeroText>
				<ButtonWrapper>
					<Link to="/login">
						<Button>Logar</Button>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
