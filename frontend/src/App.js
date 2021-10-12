import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import NavBar from "./components/NavBar/NavBar";
import UploadPage from "./components/UploadPage/UploadPage";
import SuggestionContainer from"./components/SuggestionContainer/SuggestionContainer"
import ProfilePage from "./components/ProfilePage/ProfilePage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/api/photos/upload">
            <UploadPage />
          </Route>
          <Route path="/api/photos">
            <ProfilePage />
          </Route>
          <Route exact path="/">
          <SuggestionContainer />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
