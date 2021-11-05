import React from "react";
// import { Switch, Route} from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { privateRoutes } from "../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../util/const";
import Login from "./login";
const AppRouter = () => {
  const user = false;
  return user ? (
    <Switch>
      {privateRoutes.map(({ path, component }) => (
        <Route path={path} component={component} exact={true} />
      ))}

      {/* <Redirect to={CHAT_ROUTE} /> */}
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, component }) => (
        <Route path={path} component={component} exact={true} />
      ))}

      {/* <Redirect to={LOGIN_ROUTE} /> */}
    </Switch>
  );
};

export default AppRouter;
