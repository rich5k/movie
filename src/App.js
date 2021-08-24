import './App.css';
import Home from './Home';
import Add from './Add';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignIn from './SignIn';
import ViewMore from './ViewMore';
import SignUp from './SignUp';
import Rate from './Rate';
function App() {
  //connect to mongodb
  // const dbURI= 'mongodb+srv://netninja:test1234@nodetuts.4xoyw.mongodb.net/movierater?retryWrites=true&w=majority';
  return (
    <div className="App">
      {/* <SignIn/> */}
      <Router>
          <Switch>
          <Route path="/rate/:id">
                <Rate />
            </Route> 
          <Route path="/signup">
                <SignUp />
            </Route>
            <Route path="/login">
                <SignIn />
            </Route>
          <Route path="/viewmore/:id">
                <ViewMore />
            </Route>
          <Route path="/signin">
                <SignIn />
            </Route>
            <Route path="/add">
                <Add />
            </Route>
            <Route path="/">
                <Home />
            </Route>
          </Switch>
      </Router>
    </div>
    
  );
}

export default App;
