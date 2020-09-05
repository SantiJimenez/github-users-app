import React from "react";

import logo from "./logo.svg";
import "./App.css";
import "./tailwind.output.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AnimatedRoute, AnimatedSwitch } from "react-router-transition";

import Home from "./pages/home";
import Person from "./pages/person";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedSwitch
          atEnter={{ offset: 100 }}
          atLeave={{ offset: 0 }}
          atActive={{ offset: 0 }}
          mapStyles={(styles) => ({
            position: "sticky",
            transform: `translateX(${styles.offset}%)`,
          })}
        >
          <AnimatedRoute path="/home" component={Home} />
          <AnimatedRoute exact path="/" component={Home} />
          <AnimatedRoute
            path="/person/:name"
            render={(props) => <Person {...props.match.params} />}
          />
        </AnimatedSwitch>
      </BrowserRouter>
    </div>
  );
}

export default App;
