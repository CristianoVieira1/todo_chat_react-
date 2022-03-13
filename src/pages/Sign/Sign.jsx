import React from "react";
import ButtonGoogle from "../../components/button/btnGoogle";
import ButtonFacebook from "../../components/button/btnFacebook";

// styles
import { LoginPage, LoginCard } from "./style";
import Background from "../../components/background";

const Login = () => {
  return (
    <>
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
    </>
  );
};

export default Login;
