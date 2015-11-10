import React from 'react';
import {Route} from 'react-router';

import AppHandler from "../app";
import Login from "../components/Login";
import Contact from "../components/Contact";

let routes =(
  <Route name ="app" path='/' handler={AppHandler}>
    <Route name="login" path ="/login" handler={LoginHandler}/>
    <Route name="contact" path ="/contact" handler={Contact}/>
  </Route>
);

export default routes;
