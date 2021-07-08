import './App.css';
import Home from './Home';
import Add from './Add';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignIn from './SignIn';
function App() {
  return (
    <div className="App">
      {/* <SignIn/> */}
      <Router>
          <Switch>
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
