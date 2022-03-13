import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 70px;
  background-color: var(--color-bg-variant);

`;

export const NavLogo = styled.div`
	color: var(--white);
	-webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--gray-dark);
	text-decoration: none;
	font-size: 2rem;
	display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;


`;

export const NavIcon = styled.img`
	width: 3rem;
`;

export const LogoutTab = styled.div`
    position: absolute;
    top: 18px;
    right: 60px;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;

    @media screen and (max-width: 575px) {
      right: 25px;
  }
`;

export const  ChatsPage = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
`;


