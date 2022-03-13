import React from "react";
import ButtonGoogle from "../../components/button/btnGoogle";
import ButtonFacebook from "../../components/button/btnFacebook";

// styles
import { LoginPage, LoginCard } from "./style";
import Background from "../../components/background";

//Components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Login = () => {
  return (
    <>
    <Navbar />
    <LoginPage>
      <LoginCard>
        <h2>Bem Vindo</h2>
        <h4>Faça seu Login</h4>

        <ButtonGoogle />
        <br />
        <br />
        <ButtonFacebook />
      </LoginCard>
    </LoginPage>
    <Background />
    <Footer />
    </>
  );
};

export default Login;
