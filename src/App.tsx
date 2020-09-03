import React, { Fragment, useState, useRef } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import URLForm from "./components/URLForm";
import RedirectLink from "./components/RedirectLink";
import "./App.scss";

type TParams = { id: string };

function App(): JSX.Element {
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const linkRef = useRef<any>(null);
  const setMessageHandler = (value: string) => {
    setMessage(value);
  };
  const setLinkHandler = (value: string) => {
    setLink(value);
  };
  const copyToClipBoard = (event: any) => {
    console.log("linkRef.current.innerText :>> ", linkRef.current.textContent);
    navigator.clipboard.writeText(linkRef.current.textContent);
  };
  return (
    <Fragment>
      <div className={message ? "alert_box" : "hidden"}>
        <span>{message}</span>
        <div className="copy_link" ref={linkRef} onClick={copyToClipBoard}>
          {link}
          <span className="tooltiptext">Copy</span>
        </div>
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
              <URLForm
                {...props}
                setMessageHandler={setMessageHandler}
                setLinkHandler={setLinkHandler}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
