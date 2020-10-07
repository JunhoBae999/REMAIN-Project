import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import Theme from "Routes/Theme";
import RelatedPoster from "Routes/RelatedPoster";
import Mypage from "Routes/Mypage";
import Alarm from "Routes/Alarm";
import Token from "Routes/Token";
import Tour from "Routes/Tour";
import Donation from "Routes/Donation";
import Login from "Routes/login";
import Header from "Components/Header";


export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route exact path="/theme" component={Theme} />
        <Route exact path="/theme/:id" component={RelatedPoster} />
        <Route exact path="/theme/:id/TOUR" component={Tour} />
        <Route exact path="/theme/:id/DONATION" component={Donation} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/alarm" component={Alarm} />
        <Route path="/token" component={Token} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);