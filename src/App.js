import "./App.css";
import PageLogin from "./components/pages/PageLogin";
import PageRegister from "./components/pages/PageRegister";
import { Switch, Route, Link } from "react-router-dom";
import PageAdmin from "./components/pages/PageAdmin";
import AdminCreate from "./components/utils/AdminCreate";
import AdminService from "./components/utils/AdminService";
import ServiceCreate from "./components/utils/ServiceCreate";
import { useState } from "react";
import AdminUtils from "./components/utils/AdminUtils";
import UpdateUser from "./components/utils/UpdateUser";

function App() {
  const [id, setId] = useState();
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={PageLogin} exact />
        <Route path="/register" component={PageRegister} />
        <Route path="/Pageadmin">
          <AdminUtils setId={setId} />
        </Route>
        <Route path="/admincreate" component={AdminCreate} />
        <Route path="/adminservice" component={AdminService} />
        <Route path="/create_service" component={ServiceCreate} />
        <Route path="/update_user">
          <UpdateUser id={id} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
