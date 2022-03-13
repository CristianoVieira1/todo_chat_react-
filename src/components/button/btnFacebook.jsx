/* eslint-disable no-undef */
import React from 'react'
import { useHistory } from "react-router-dom"

import firebase from "firebase/app";
import 'firebase/app';

import { FacebookOutlined } from '@ant-design/icons';

const ButtonFacebook = () => {
  const history = useHistory();

  const actionFacebook = async () => {
      const provider = new firebase.auth.FacebookAuthProvider();
      let result = await firebase.auth().signInWithPopup(provider);
      if (!result == null) {
        history.push("/")
        
    } else {
      history.push('/chats')
    }
    
  }
  return (
  <div className="login-button facebook"
  onClick={actionFacebook}>
    <FacebookOutlined /> Logar com Facebook  
    </div>
  )
  // firebase.auth.FacebookAuthProvider()
}

export default ButtonFacebook