import React , { useRef,useEffect} from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Header from './components/header';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import AppRoutes from './appRoutes';
import { findDOMNode } from 'react-dom';
import SideBar from './components/sidebar';


const  App=()=> {
  const { t } = useTranslation();
  const toggle = useRef('');
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  
  }
  const togglee=()=>{
    
    document.getElementById('app').className = 'dark-theme';
  }

  return (
  
    <div className="App" id='app'>
    
    <Header/>
  
   {/* <div className="container">
  

      <div className="row"> */}
        {/* <div className="col-md-2  border-right">

        <SideBar/>
        </div>
        <div className="col-md-10"> */}
       <AppRoutes/>

        {/* </div> */}


       {/* </div>
    </div> */}
      </div>
     
  );
}

export default App;