import styled from 'styled-components';
import { Button } from '../../styles/globalStyles';

export const HeroSection = styled.section`
	height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
	background: linear-gradient( rgba(18, 30, 33, 0.6), rgba(0, 0, 0, 0.1));
`;

export const HeroImg = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
	top: 0;
	position: fixed;
  background-attachment: fixed;
	z-index: -1;
`;

export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #fff;
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
	color: var(--white);

	&:before {
		background: var(--info);
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: white;
	}
`;
