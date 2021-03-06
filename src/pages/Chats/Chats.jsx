import React, { useRef, useState, useEffect } from "react"

import axios from 'axios'
import { useHistory } from "react-router-dom"
import { ChatEngine } from 'react-chat-engine'
import { useAuth } from "../../auth/AuthContext"
import { auth } from "../../auth/firebase"

import { FaSignOutAlt } from "react-icons/fa";
import { ChatsPage, Nav, LogoutTab, NavLogo, NavIcon } from "./styles";

export default function Chats() {
  const didMountRef = useRef(false)
  const [ loading, setLoading ] = useState(true)
  const { user } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    await auth.signOut()
    history.push("/")
  }

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: 'image/jpeg' });
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true

      if (!user || user === null) {
        // history.push("/")
        return
      }
      
      axios.get(
        'https://api.chatengine.io/users/me/',
        { headers: { 
          "project-id": process.env.REACT_APP_CHAT_ID,
          "user-name": user.email,
          "user-secret": user.uid
        }}
      )

      .then(() => setLoading(false))

      .catch(e => {
        let formdata = new FormData()
        formdata.append('email', user.email)
        formdata.append('username', user.email)
        formdata.append('secret', user.uid)

        getFile(user.photoURL)
        .then(avatar => {
          formdata.append('avatar', avatar, avatar.name)

          axios.post(
            'https://api.chatengine.io/users/',
            formdata,
            { headers: { "private-key": process.env.REACT_APP_CHAT_KEY }}
          )
          .then(() => setLoading(false))
          .catch(e => console.log('e', e.response))
        })
      })
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    }
  }, [user, history])

  // verificando se tem algum usuario

  if (!user || loading) return <div />;

  return (
    <ChatsPage>
      <Nav>
          <NavLogo>
						<NavIcon src="./assets/logo.png" alt="logo" />
						ChatOn
					</NavLogo>
        <LogoutTab onClick={handleLogout}>
           <FaSignOutAlt />
        </LogoutTab>
      </Nav>

      <ChatEngine
        height='calc(100vh - 66px)'
        projectID={process.env.REACT_APP_CHAT_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </ChatsPage>
  );
};

