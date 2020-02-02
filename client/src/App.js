import React, {useState} from "react";
import {BrowsderRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import "./App.css";

const App = () => {
  return(
    <div className = "App">
      <Router>
        <div className="App-Router">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact}/>
            <Route path="/projects" component={Projects}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;