import styled from "styled-components";

export const LoginPage = styled.div`
  background-image: var(--color-linear);
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  .login-button {
    cursor: pointer;
    color: var(--white);
    padding: 12px;
    border-radius: 8px;
    display: inline-block;
  }

  .facebook {
    background-color: var(--color-facebook);
    color: var(--white);
    transition: var(--color-linear);

    &:hover {
      background-color: var(--color-facebook-hover);
    }
  }

  .google {
    background-color: var(--color-google);
    color: var(--white);

    &:hover {
      background-color: var(--color-google-hover);
    }
  }
`;

export const LoginCard = styled.div`
  position: relative;
  top: calc(50vh - 144px);
  left: calc(50vw - 188px);
  padding-top: 36px;
  padding-bottom: 66px;
  width: 377px;
  text-align: center;
  background-color: white;
  border-radius: 22px;
  z-index: 2;

  h2 {
    font-size: 1.6rem;
    color: var(--gray-dark);
  }

  h4 {
    font-size: 0.9rem;
    color: var(--secondary);
    margin-bottom: 1rem;
  }
`;
