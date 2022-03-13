/* eslint-disable no-undef */
import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom"
import firebase from "firebase/app";

const ButtonGoogle = () => {
  const history = useHistory();

  const actionGoogle = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      let result = await firebase.auth().signInWithPopup(provider);
      if (!result == null) {
        history.push("/")
        
    } else {
      history.push('/chats')
    }
    
  }
  return (
    <div
      className="login-button google"
      onClick={actionGoogle}
    >
      <GoogleOutlined /> Logar com Google
    </div>
  );
};

export default ButtonGoogle;
