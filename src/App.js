import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Changepassword from "./components/auth/Changepassword";
import Dashboard from "./components/dashboard/Dashboard";
import Formbuilder from "./components/formbuilder/Formbuilder";
import ManageEmails from "./components/pages/ManageEmails";

import "./App.css";

import store from "./store";
store.subscribe(() => console.log("store in index ", store.getState()));

function App() {
  return (
    <Router>
      <HashRouter basename="/">
        <Fragment className="App">
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/signup" component={Signup}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/build" component={Formbuilder}></Route>
              <Route
                exact
                path="/changepassword"
                component={Changepassword}
              ></Route>
              <Route exact path="/dashboard" component={Dashboard}></Route>
              <Route exact path="/managemails" component={ManageEmails}></Route>
            </Switch>
          </div>
        </Fragment>
      </HashRouter>
    </Router>
  );
}

export default App;
