import { Route, Switch } from "react-router-dom";

import "./App.css";
import FlowCalculation from "./components/flowCalculation/flowCalculation";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={FlowCalculation} />
      </Switch>
    </div>
  );
}

export default App;
