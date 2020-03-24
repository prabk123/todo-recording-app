import React from "react";
import Landing from "./components/Landing";
import { Route, Switch } from "react-router-dom";
import ToDos from "./components/ToDos";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <ScrollToTop>
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
    </ScrollToTop>
  );
};

export default App;
