import React, {useState} from "react";
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


export default ({ isLoggedIn, userObj }) => {
  const user = userObj;
  return (
  <Router>
       <Switch>    
      {!isLoggedIn ? (          
          <Route path="/" component={Login} />          
        ) : (   
        <>
        <Header />        
          <Route exact path="/"  component={Home} />
          <Route exact path="/theme" component={Theme} />
          <Route exact path="/theme/:id" component={RelatedPoster} />
          <Route exact path="/theme/:id/TOUR" component={Tour}  />
          <Route exact path="/theme/:id/DONATION" component={Donation} />
          <Route path="/mypage">
              <Mypage user={user} />
          </Route>
          <Route path="/alarm" component={Alarm} />
          <Route path="/token" component={Token}  />
        <Redirect from="*" to="/" /> 
        </>      
        )}      
      </Switch>
  </Router>
)};