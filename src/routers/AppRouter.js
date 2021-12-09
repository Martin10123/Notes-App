import React, { useEffect, useState } from "react";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/fireBaseConfig";
import { login } from "../actions/auth";
import { starLoadingNotes } from "../actions/notes";

import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);

        dispatch(starLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }

      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <h1>Espere...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            exact
            path="/"
            component={JournalScreen}
            isAuthenticated={isLoggedIn}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
