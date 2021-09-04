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
        <h1>NAME : Rwed kabha </h1>
        <h1>ID : 315270793</h1>
        <h1>EMAIL : rwed.kabaha@gmail.com </h1>
        <h1>gitHub : github/rwedmedlij </h1>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>

        </Route>
        <Route path="/home">
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
