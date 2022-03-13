/* eslint-disable no-undef */
import React from 'react'
import { FacebookOutlined } from '@ant-design/icons';

import 'firebase/app';
import { auth } from '../../auth/firebase';

const ButtonFacebook = () => {
  return (
  <div className="login-button facebook"
    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
    <FacebookOutlined /> Sign In with Facebook  
    </div>
  )
  // firebase.auth.FacebookAuthProvider()
}

export default ButtonFacebook