import "./App.css";
import PageLogin from "./components/pages/PageLogin";
import PageRegister from "./components/pages/PageRegister";
import { Switch, Route, Link } from "react-router-dom";
import PageAdmin from "./components/pages/PageAdmin";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={PageLogin} exact />
        <Route path="/register" component={PageRegister} />
        <Route path="/Pageadmin" component={PageAdmin} />
      </Switch>
    </div>
  );
}

export default App;
