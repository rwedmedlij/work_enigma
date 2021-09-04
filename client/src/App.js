import logo from './logo.svg';
import './App.css';
import react,{ useState,useEffect } from 'react';
import  Home from './pages/Home' 
import  EditPage from './pages/Edit' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {



   return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/edit">
          <EditPage />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
