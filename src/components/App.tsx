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
        <footer className="bg-dark text-white text-center container-fluid">
          <div className="row">
            <div className="col-4 col-md align-self-center">
              <a href="https://discord.gg/mxcx6dQVSC" target="_blank" rel="noreferrer">
                <img src="/icons/discord.png" width="40" height="40" alt="..." />
              </a>
            </div>
            <div className="col-4 col-md align-self-center">
              <a href="https://chat.whatsapp.com/B8yxfloXD9i3mkKwov2OR1" target="_blank" rel="noreferrer">
                <img src="/icons/whatsapp.png" width="40" height="40" alt="..." />
              </a>
            </div>
            <div className="col-4 col-md align-self-center">
              <a href="https://www.github.com/Cunapesitos" target="_blank" rel="noreferrer">
                <img src="/icons/github.png" width="40" height="40" alt="..." />
              </a>
            </div>
            <div className="col-12 col-md-3 align-self-center">
              <small>
                Cuñapesitos
                </small>
            </div>
            <div className="col-4 col-md align-self-center">
              <a href="https://facebook.com/cunapesitos" target="_blank" rel="noreferrer">
                <img src="/icons/facebook.png" width="40" height="40" alt="..." />
              </a>
            </div>
            <div className="col-4 col-md align-self-center">
              <a href="https://www.instagram.com/cunapesitos_devs" target="_blank" rel="noreferrer">
                <img src="/icons/instagram.png" width="40" height="40" alt="..." />
              </a>
            </div>
            <div className="col-4 col-md align-self-center">
              <a href="https://www.youtube.com/channel/UCfCMXWA0JN-ljoLBsDHEmqg" target="_blank" rel="noreferrer">
                <img src="/icons/youtube.png" width="40" height="40" alt="..." />
              </a>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
