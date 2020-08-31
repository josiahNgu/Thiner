import React, { useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";
const RedirectLink = (props: any): JSX.Element => {
  const {
    match: { params },
  } = props;
  const [shouldRedirect, setshouldRedirect] = useState(false);
  useEffect(() => {
    const getOriginalLink = async () => {
      const url = await axios.get(
        `https://9hhiphcnie.execute-api.us-east-2.amazonaws.com/Dev/thinner/${params.keyword}`
      );
      const redirectLink = url.data.originalLink;
      if (typeof redirectLink !== "undefined") {
        return (window.location.href = redirectLink);
      } else {
        setshouldRedirect(true);
        props.setMessageHandler("link not found !");
      }
    };
    getOriginalLink();
  }, [params.keyword, props]);
  return (
    <h1>
      Loading....
      {shouldRedirect ? <Redirect to="/" /> : ""}
    </h1>
  );
};
export default RedirectLink;
