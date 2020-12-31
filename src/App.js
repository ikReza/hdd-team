import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/home/homePage";
import StopInvert from "./components/stopInvert/stopInvert";
import StartInvert from "./components/startInvert/startInvert";
import Slope from "./components/slope/slope";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/stop-invert" component={StopInvert} />
        <Route path="/start-invert" component={StartInvert} />
        <Route path="/slope" component={Slope} />
      </Switch>
    </div>
  );
}

export default App;
