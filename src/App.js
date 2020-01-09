import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AddToDo from "./AddToDo";
import EditToDo from "./EditToDo";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";


export default function App() {
  return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/todos/:id/create-todo" component={AddToDo} />
            <Route exact path="/todos/:id/edit-todo" component={EditToDo} />

            <Route exact path="/signup" component={SignUp} />
            <Route path="/" component={SignIn} />
          </Switch>
        </div>
      </Router>
  );
}
