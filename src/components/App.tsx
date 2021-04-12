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
            <div className="col-3 col-md align-self-center">
              <a href="https://discord.gg/mxcx6dQVSC" target="_blank">
                <img src="/icons/discord.png" width="40" height="40" />
              </a>
            </div>
            <div className="col-3 col-md align-self-center">
              <a href="https://wa.me/59175364642" target="_blank">
                <img src="/icons/whatsapp.png" width="40" height="40" />
              </a>
            </div>
            {/* <div className="col-3 col-md align-self-center">
              <a href="mailto:jorgerodrigotorrez@gmail.com" target="_blank">
                <img src="/icons/gmail.png" width="40" height="40" />
              </a>
            </div> */}
            <div className="col-3 col-md align-self-center">
              <a href="https://www.github.com/JrogeT" target="_blank">
                <img src="/icons/github.png" width="40" height="40" />
              </a>
            </div>
            <div className="col-12 col-md-3 align-self-center">
              <small>
                Cuñapesitos
                </small>
            </div>
            <div className="col-3 col-md align-self-center">
              <a href="https://www.facebook.com/JorgeRodrigoTorrezAramayo" target="_blank">
                <img src="/icons/facebook.png" width="40" height="40" />
              </a>
            </div>
            <div className="col-3 col-md align-self-center">
              <a href="https://www.instagram.com/jroge_t" target="_blank">
                <img src="/icons/instagram.png" width="40" height="40" />
              </a>
            </div>
            <div className="col-3 col-md align-self-center">
              <a href="https://www.youtube.com/channel/UCSLi91PW9oH9LETcTsDs-5Q" target="_blank">
                <img src="/icons/youtube.png" width="40" height="40" />
              </a>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
