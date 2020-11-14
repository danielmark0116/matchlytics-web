import React from "react";
import Main from "../pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import OAuthRedirect from "../pages/OAuthRedirect";
import Login from "../pages/Login";
import MemberRoute from "./utils/MemberRoute";
import Unauthorized from "../pages/Unauthorized";
import Layout from "../layout/Layout";
import AdminRoute from "./utils/AdminRoute";
import BotControl from "../pages/BotControl";
import Users from "../pages/Users";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/oauth_redirect" component={OAuthRedirect} />
          <MemberRoute exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <AdminRoute exact path="/bot" component={BotControl} />
          <AdminRoute exact path="/users" component={Users} />
          <Route exact path="/unauthorized" component={Unauthorized} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
