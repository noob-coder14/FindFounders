import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SaaSProductLandingPage from "demos/SaaSProductLandingPage";
import BlogIndex from "pages/BlogIndex";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Profile from "pages/Profile";
import BlogIndexLogged from "pages/BlogIndexLogged";
import Forum from "pages/Forum";
import ForumLogged from "pages/ForumLogged";
import NetworkLogged from "pages/NetworkLogged";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <Router>
      <Switch>
        <Route path="/news">
          <BlogIndex/>
        </Route>
        <Route path="/profile-news">
          <BlogIndexLogged/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/forum">
          <Forum/>
        </Route>
        <Route path="/profile-forum">
          <ForumLogged/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/profile-network">
          <NetworkLogged/>
        </Route>
        <SaaSProductLandingPage/>
      </Switch>
    </Router>
  );
}
