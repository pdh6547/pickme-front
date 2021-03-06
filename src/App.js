import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {
  PATH_SIGN_IN,
  PATH_SIGN_UP,
  PATH_MAIN,
  PATH_JOBS,
  PATH_ENTERPRISE,
  PATH_WELCOME,
  PATH_USER_PROFILE, PATH_AUTH_CHECK,
  PATH_USER_RESUME
} from "./route/paths";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Main from "./pages/main/Main";
import Root from "./components/Root";
import AppBar, { AppBarItem } from "./components/AppBar";
import Explore from "./pages/explore/Explore";
import Enterprise from "./pages/enterprise/Enterprise";
import Welcome from "./pages/Welcome";
import Profile from "./pages/auth/Profile";
import Resume from './pages/resume/Resume';
import { PrivateRoute } from "./route/PrivateRoute";
import {AuthProvider} from "./context/AuthContext";
import AuthCheck from "./pages/auth/AuthCheck";

const App = props => {
  return (
    <div className="App">
      <AuthProvider>
        {console.log(props)}
        <Root>
          <AppBar {...props}>
            <AppBarItem title={"Main"} to={`${PATH_MAIN}`} />
            <AppBarItem title={"Explore"} to={`${PATH_JOBS}`} />
            <AppBarItem title={"Enterprise"} to={`${PATH_ENTERPRISE}`} />
          </AppBar>

          <div style={{ marginTop: 70 }} />

          <Switch>
            <Route path={PATH_AUTH_CHECK} component={AuthCheck} />
            <Route path={PATH_SIGN_IN} component={SignIn} />
            <Route path={PATH_SIGN_IN} component={SignIn} />
            <Route path={PATH_SIGN_UP} component={SignUp} />

            <Route path={PATH_MAIN} component={Main} />
            <Route path={PATH_JOBS} component={Explore} />
            <Route path={PATH_ENTERPRISE} component={Enterprise} />

            <PrivateRoute path={PATH_USER_PROFILE} component={Profile} />
            <Route path={PATH_USER_RESUME} component={Resume} />

            <Route path={PATH_WELCOME} component={Welcome} />
          </Switch>
        </Root>
      </AuthProvider>
    </div>
  );
};

export default withRouter(App);
