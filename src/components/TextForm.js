import React, { useState } from "react";
import copy from "copy-to-clipboard";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase Clicked:' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case!", "success");
  };

  const handleLoClick = () => {
    // console.log('Uppercase Clicked:' + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!", "success");
  };
  const handleClearClick = () => {
    // console.log('Uppercase Clicked:' + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  const handleOnChange = (event) => {
    // console.log('On Change');
    setText(event.target.value);
  };

  const copyToClipboard = () => {
    copy(text);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed", "success");
  };

  const [text, setText] = useState("Enter Text here");

  return (
    <>
      {" "}
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#10375a" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Data
        </button>

        <button className="btn btn-primary mx-2" onClick={copyToClipboard}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> Your Text Summary</h1>
        <p>
          {
            text.split(" ").filter(function (n) {
              return n !== "";
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter(function (n) {
              return n !== "";
            }).length}{" "}
          minutes read{" "}
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
}
