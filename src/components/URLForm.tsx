import React, { useState } from "react";
import "./URLForms.scss";
import Axios from "axios";
type FormElem = React.FormEvent<HTMLFormElement>;
type InputElem = React.FormEvent<HTMLInputElement>;
const URLForm = (props: any): JSX.Element => {
  const [originalURL, setOriginalURL] = useState<string>("");
  const [keyword, setKeyword] = useState("");

  const submitHandler = async (event: FormElem): Promise<any> => {
    event.preventDefault();
    const response = await Axios.post(
      "https://9hhiphcnie.execute-api.us-east-2.amazonaws.com/Dev/thinner",
      { originalLink: originalURL, motto: keyword }
    );
    console.log(response.data.statusCode);
    if (response.data.statusCode === "201") {
      props.setMessageHandler("Link Created Successfully !");
      props.setLinkHandler(`localhost:3000/${keyword}`);
    }
  };
  const keywordHandler = (event: InputElem): void => {
    setKeyword(event.currentTarget.value.substring(0, 5));
  };
  // const linkHandler = (event: InputElem): void => {
  //   const linkRegex = "";
  // };
  return (
    <div id="URLFormMain">
      <form onSubmit={submitHandler} className="Form">
        <h1>Thiner</h1>
        <label>URL</label>
        <br />
        <input
          type="text"
          value={originalURL}
          data-testid="originalURL"
          required
          onChange={(event) => {
            setOriginalURL(event.target.value);
          }}
        />
        <br />
        <label>Magic Word (Max Chars: 5)</label>
        <br />
        <input
          value={keyword}
          onChange={keywordHandler}
          data-testid="keyword"
        />
        <button type="submit" className="submit_btn">
          Submit
        </button>
      </form>
    </div>
  );
};
export default URLForm;
