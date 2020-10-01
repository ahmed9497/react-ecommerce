import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";



const appRoutes = () => {
    return (
      
    <>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
    </>
       

    );
}

export default appRoutes;