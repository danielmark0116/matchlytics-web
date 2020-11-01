import React from "react";
import Main from "../pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
