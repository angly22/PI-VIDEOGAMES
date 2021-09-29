import React from "react"
import './App.css';
import { Route,BrowserRouter, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage";
import Home from "./components/Home/Home";
import CreateVideo from "./components/CreateVideo/CreateVideo.js";
import Details from "./components/Details/Details";


export default function App() {
  return (
    <BrowserRouter>
      <div >
        <Switch>
        <Route exact path="/" component ={LandingPage} />
        <Route  path="/home" component ={Home} />
        <Route  path="/videogames" component ={CreateVideo} />
        <Route  path="/videogame/:id" component ={Details} />
        </Switch>
      </div>
        
      </BrowserRouter>
  );
}

