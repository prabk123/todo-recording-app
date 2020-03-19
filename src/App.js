import React from "react";
import Landing from "./Components/Landing";
import { Route, Switch } from "react-router-dom";
import ToDos from "./Components/ToDos";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";

const App = () => {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={routerProps => (
                  <div className="page">
                    <Landing {...routerProps} />
                  </div>
                )}
              />
              <Route
                exact
                path="/todos"
                render={routerProps => (
                  <div className="page">
                    <ToDos {...routerProps} />
                  </div>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default App;
