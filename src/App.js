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
import Dashboard from "./components/utils/Dashboard";
import PageView from "./components/utils/PageView";
import StationView from "./components/utils/StationView";
import UpdateStation from "./components/utils/UpdateStation";

function App() {
  const [id, setId] = useState();
  const [viewUser, setViewUser] = useState([]);

  return (
    <div className="App">
      <Switch>
        <Route path="/" component={PageRegister} exact />
        <Route path="/login" component={PageLogin} />
        <Route path="/Pageadmin">
          <AdminUtils
            setId={setId}
            setViewUser={setViewUser}
            viewUser={viewUser}
          />
        </Route>
        <Route path="/admincreate" component={AdminCreate} />
        <Route path="/adminservice">
          <AdminService
            setId={setId}
            setViewUser={setViewUser}
            viewUser={viewUser}
          />
        </Route>{" "}
        <Route path="/create_service" component={ServiceCreate} />
        <Route path="/update_user">
          <UpdateUser id={id} />
        </Route>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/view_user">
          <PageView viewUser={viewUser} />
        </Route>
        <Route path="/station_user">
          <StationView viewUser={viewUser} />
        </Route>
        <Route path="/update_station">
          <UpdateStation id={id} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
