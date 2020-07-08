import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Lessons from "./pages/Lessons"
import Navigation from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navigation />
   <Router>
     <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/contact" component={Contact} /> 
        <Route exact path="/lessons" component={Lessons} /> 
     </Switch>
  </Router>
  
  <Footer />
    </div>
  );
}

export default App;
