import React from "react";
import Main from "../pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import OAuthRedirect from "../pages/OAuthRedirect";
import Login from "../pages/Login";
import MemberRoute from "./utils/MemberRoute";
import Unauthorized from "../pages/Unauthorized";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/oauth_redirect" component={OAuthRedirect} />
        <MemberRoute exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/unauthorized" component={Unauthorized} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
