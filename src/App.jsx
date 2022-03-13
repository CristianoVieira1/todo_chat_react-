/* eslint-disable no-unused-vars */
import React from "react";
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Home from './pages/Home/Home';
import Login from "./pages/Sign/Sign";
import SignUp from './pages/SignUp/SignUp';
import Chats from "./pages/Chats/Chats"

//Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import { AuthProvider } from "./auth/AuthContext"



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