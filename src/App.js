import React from 'react';
import Header from "./components/Header";
import Home from "./Pages/Home";
import Character from "./Pages/Character";
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
function App() {
  return (
    
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Character" component={Character}/>
        </Switch>
      </Router>
    
  );
}

export default App;
