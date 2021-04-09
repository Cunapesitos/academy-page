import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Web from "./web/Web";
import NotFound from "./not-found/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home" component={Home} />
            <Route path="/web/:name" component={Web} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
