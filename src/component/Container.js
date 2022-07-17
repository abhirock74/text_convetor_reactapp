import React, { useState } from "react";
import "../App.css"
export default function Container(prop) {

  const [text, setText] = useState("");

  const handelOnChange = (event) => {
    // console.log('handelonchange click');
    setText(event.target.value);
    // let newText = text.toLocaleUpperCase();
    
  };

  const handelUpClick = () => {
    // console.log("Up click" + text);
    let newText = text.toLocaleUpperCase();
    setText(newText);
    
  };
  const handelLocase = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    
  };
  const reset = () => {
    let newText = "";
    setText(newText)
  }
  return (
    <>
      <div className="container form-floating my-4">
        <textarea
          className="text-area form-control"
          id="floatingTextarea" 
          onChange={handelOnChange}
          value={text}
          rows="10"
        ></textarea>
        <label htmlFor="floatingTextarea">{prop.title}</label>
        <button
          type="button"
          className="mt-3 mx-2 btn btn-primary"
          onClick={handelUpClick}
        >
          Convert To UpperCase
        </button>
        <button type="button" className="mt-3 mx-2 btn btn-primary"  onClick={handelLocase}>
          Convert To LowerCase
        </button>
        <button type="reset" className="mt-3 mx-2 btn btn-primary" onClick={reset}>
         Reset
        </button>
      </div>
      <div className="container my-5">
        <h2>{prop.preview}</h2>
        <p> {text.split(' ').length -1} Words and {text.length} Characters</p>
      </div>
      <div className="container border rounded p-3 my-4">
        <h3 className="p-3">Preview</h3>
        <div>
          <p className="over">{text }</p>
        </div>
      </div>
    </>
  );
}
