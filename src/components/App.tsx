import Navbar from "./utils/navbar/Navbar";
import Home from "./home/Home";
import Web from "./web/Web";
import Tool from "./tools/Tools";
import NotFound from "./utils/not-found/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="h-100 bx">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route path="/web/:name/:content?" component={Web} />
          <Route path="/herramientas/:name/:content?" component={Tool} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
