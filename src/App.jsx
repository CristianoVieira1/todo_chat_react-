/* eslint-disable no-unused-vars */
import React from "react";
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/Signup';
import Footer from './components/Footer/Footer';
import Login from "./pages/Sign/Sign";

import { AuthProvider } from "./auth/AuthContext"

import Chats from "./pages/Chats/Chats"


function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Navbar />
        <AuthProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign" component={Login} />
			  	<Route path="/signup" exact component={SignUp} />
          <Route path="/chats" component={Chats} />
        </Switch>
        </AuthProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;