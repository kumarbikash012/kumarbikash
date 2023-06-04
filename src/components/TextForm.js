import React, { useState } from "react";

export default function TextForm(props) {
  const handleLoClick = () => {
    // console.log ("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  // const handleBoldChange = () =>{
  //   console.log ("Uppercase was clicked" + text);
  //   let newText = text.BoldText();
  //   setText(newText)
  // }

  const handleUpClick = () => {
    // console.log ("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");

  };

  const handleCopyText =() =>{
    navigator.clipboard.writeText(text);
    props.showAlert("copied to clipboard", "success")
  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleExtraSpace = () =>{
let newText = text.split(/[ ]+/);
setText(newText.join(" "));
props.showAlert("Extra Space Removed", "success");
  }

  const handleClearText = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "success")
  }

  const [text, setText] = useState("");
  // setText("bikash"); to chandge the state variable

  return (
    <>
      <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}  >
        <h1> {props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} 
          style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black' }} 
           id="myBox" rows="8" ></textarea>
        </div>
        <button disabled={text.length===0} className={`btn btn-primary mx-2 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Space</button> 
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear Text</button> 
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyText}>Copy Text</button> 


      </div>
      <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1>Text Summery</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words & {text.length}charecters
        </p>
        <p>
          {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes will take for you to read
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to see preview here"}</p>
      </div>
    </>
  );
}

