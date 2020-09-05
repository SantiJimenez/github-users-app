import React from "react";

import logo from "./logo.svg";
import "./App.css";
import "./tailwind.output.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Person from "./pages/person";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route
            path="/person/:name"
            render={(props) => <Person {...props.match.params} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
