import React, { Fragment, useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import URLForm from "./components/URLForm";
import RedirectLink from "./components/RedirectLink";
import "./App.scss";

type TParams = { id: string };

function App(): JSX.Element {
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const setMessageHandler = (value: string) => {
    setMessage(value);
  };
  const setLinkHandler = (value: string) => {
    setLink(value);
  };
  return (
    <Fragment>
      <div className={message ? "alert_box" : ""}>
        {message}
        {link}
      </div>
      <BrowserRouter>
        <Switch>
          <Route
            path="/:keyword"
            render={(props) => (
              <RedirectLink
                {...props}
                setMessageHandler={setMessageHandler}
                setLinkHandler={setLinkHandler}
              />
            )}
          />
          <Route
            path="/"
            render={(props) => (
              <URLForm {...props} setMessageHandler={setMessageHandler} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
