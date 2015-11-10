import React from 'react';
import {Route} from react-router;

import AppHandler from "./components/appHandler";
import LoginHandler from ".components/app/loginHandler";
import Contact from "./components/app/Contact";

let routes (
  <Route name ="app" path='/' handler={AppHandler}>
    <Route name="login" path ="/login" handler={LoginHandler}/>
    <Route name="contact" path ="/contact" handler={Contact}/>
  </Route>
);

export default routes;
