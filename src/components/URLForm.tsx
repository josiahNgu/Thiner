import React, { useState } from "react";
import "./URLForms.scss";
type FormElem = React.FormEvent<HTMLFormElement>;
type InputElem = React.FormEvent<HTMLInputElement>;
const URLForm = (): JSX.Element => {
  const [originalURL, setOriginalURL] = useState<string>("");
  const [keyword, setKeyword] = useState("");
  const submitHandler = (event: FormElem): void => {
    event.preventDefault();
  };
  const keywordHandler = (event: InputElem): void => {
    setKeyword(event.currentTarget.value.substring(0, 5));
  };
  // const linkHandler = (event: InputElem): void => {
  //   const linkRegex = "";
  // };
  return (
    <div id="URLFormMain">
      <div></div>
      <form onSubmit={submitHandler} className="Form">
        <h1>Thiner</h1>
        <label>URL</label>
        <br />
        <input
          type="text"
          value={originalURL}
          required
          onChange={(event) => {
            setOriginalURL(event.target.value);
          }}
        />
        <br />
        <label>Magic Word (Max Chars: 5)</label>
        <br />
        <input value={keyword} onChange={keywordHandler} />
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};
export default URLForm;
