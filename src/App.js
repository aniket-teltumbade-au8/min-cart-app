import React from "react";
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavMenu from "./components/NavMenu";
import './styles.css'

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
