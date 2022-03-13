/* eslint-disable no-unused-vars */
import React from "react";
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Chats from "./pages/Chats/Chats"



import { AuthProvider } from "./auth/AuthContext"

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <AuthProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/chats" component={Chats} />
        </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;