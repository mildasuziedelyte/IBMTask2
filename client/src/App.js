import React, { useState, useEffect } from 'react'
import "./css/main.css";
//router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//components

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import SelectedPage from "./components/selectedPage/SelectedPage";
function App() {
  return (
    <div className="App">
     <Router> 
    <Header/>
    <Switch> 
    <Route path="/" exact component={Home}/> 
    <Route path="/video/:video" exact component={SelectedPage}/> 
    </Switch>
     </Router>
    </div>
  );
}

export default App;
