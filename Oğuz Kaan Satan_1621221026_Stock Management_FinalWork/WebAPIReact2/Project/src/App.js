import React from 'react'
import  {Contact} from './contact';
import  {City} from './city';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      
      <h1>React Project</h1>

      <Router>
      <div>
        <ul>
          <li>
            <Link to="/dataContact">Contact Page   - ADD, UPPDATE, DELETE, LIST</Link>
          </li>
          <li>
            <Link to="/dataCity">City  Page  LIST </Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Contact />
          </Route>
          <Route path="/dataContact">
            <Contact />
          </Route>
          <Route path="/dataCity">
		  <City />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
