/* eslint-disable no-undef */
import React from "react";
import { GoogleOutlined } from "@ant-design/icons";

import firebase from "firebase/app";
import { auth } from "../../auth/firebase";

const ButtonGoogle = () => {
  return (
    <div
      className="login-button google"
      onClick={() =>
        auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      }
    >
      <GoogleOutlined /> Sign In with Google
    </div>
  );
};

export default ButtonGoogle;
