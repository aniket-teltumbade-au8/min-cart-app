import React from "react";
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavMenu from "./components/NavMenu";
import "./styles.css";
import FilterByCategory from "./components/FilterByCategory";
import ProductCatFilter from "./pages/ProductCatFilter";
import ProductAttributes from "./pages/ProductAttributes";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <NavMenu />
          <FilterByCategory />
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/prodbycat/:categoryId"
            component={ProductCatFilter}
          />
          <Route
            exact
            path="/prodattributes/:productid"
            component={ProductAttributes}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
