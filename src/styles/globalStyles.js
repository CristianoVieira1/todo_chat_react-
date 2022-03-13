import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

:root {
  --color-bg: #1f1f38;
  --color-bg-variant: #2c2c6c;
  --color--primary: #db4f09;
  --color--primary-variant: rgba(77, 181, 255, 0.1);
  --secondary: #6c757d;
  --color-facebook: #3b5998;
  --color-facebook-hover: #224081;
  --color-google: #4285f4;
  --color-google-hover: #276ddf;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: rgba(255, 255, 255, 0.6);
  --container-width-lg: 75%;
  --container-width-md: 86%;
  --container-width-sm: 90%;
  --font-family-poppins: 'Poppins', sans-serif;
  --transition: all 400ms ease;
  --color-linear: linear-gradient(to left, #8942a8, #4439a7);
}

*,
::after,
::before {
  box-sizing: border-box
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.7;
}

/* efeito background login  */

.box-area {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.box-area li {
	position: absolute;
	display: block;
	list-style: none;
	width: 25px;
	height: 25px;
	background: rgba(255, 255, 255, 0.2);
	animation: animate 20s linear infinite;
	bottom: 0;
}
.box-area li:nth-child(1) {
	left: 86%;
	width: 80px;
	height: 80px;
	animation-delay: 0s;
}
.box-area li:nth-child(2) {
	left: 12%;
	width: 30px;
	height: 30px;
	animation-delay: 1.5s;
	animation-duration: 10s;
}
.box-area li:nth-child(3) {
	left: 70%;
	width: 100px;
	height: 100px;
	animation-delay: 5.5s;
}
.box-area li:nth-child(4) {
	left: 42%;
	width: 150px;
	height: 150px;
	animation-delay: 0s;
	animation-duration: 15s;
}
.box-area li:nth-child(5) {
	left: 65%;
	width: 40px;
	height: 40px;
	animation-delay: 0s;
}
.box-area li:nth-child(6) {
	left: 15%;
	width: 110px;
	height: 110px;
	animation-delay: 3.5s;
}
@keyframes animate {
	0% {
		transform: translateY(0) rotate(0deg);
		opacity: 1;
	}
	100% {
		transform: translateY(-800px) rotate(360deg);
		opacity: 0;
	}
}

.chats-page {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
}

.nav-bar {
  width: 100%;
  height: 66px;
  background-color: #002766;
}

.logo-tab {
  position: absolute;
  left: 22px;
  top: 12px;
  font-size: 32px;
  font-weight: 700;
  color: white;
}

.logout-tab {
  position: absolute;
  top: 22px;
  right: 22px;
  color: white;
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}

#loading-container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgb(255, 255, 255, 0.22);
}

#loading-icon {
  font-size: 66px;
  position: relative;
  left: calc(50vw - 33px);
  top: calc(50vh - 22px);
}

`;

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;

	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;
export const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`;

export const Heading = styled.h2`
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: center;
	width: ${({ width }) => (width ? width : '100%')};
`;
export const TextWrapper = styled.span`
	color: ${({ color }) => (color ? color : '')};
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
`;
export const Section = styled.section`
	padding: ${({ padding }) => (padding ? padding : '140px 0')};
	margin: ${({ margin }) => (margin ? margin : '')};
	background: ${({ inverse }) => (inverse ? 'white' : `var(--color-linear)`)};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};

	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;

export const Row = styled.div`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;

export const Button = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	color: #fff;
	outline: none;
	border: 2px solid #fff;
	cursor: pointer;
	overflow: hidden;
	position: relative;

	&:before {
		background: var(--info);
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: var(--white);
	}
`;


export default GlobalStyle;