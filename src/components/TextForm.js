import React,{useState} from 'react'

export default function TextForm(props) {
  const handleExClick=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Clear extra space","success")
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To Clickboard","success")
  }
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success")
        
    }

    const handleLoClick=()=>{
      // console.log("Uppercase was clicked" + text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase","success")
  }

  const handleClClick=()=>{
    // console.log("Uppercase was clicked" + text);
    let newText="";
    setText(newText);
    props.showAlert("Clear text","success")
}
    const handleOnChange=(event)=>{
        
        setText(event.target.value);
    }
    const[text,setText]=useState('')
    
  return (
    <>
  <div>
    
  <div className="mb-3">
    <h1>{props.headings}</h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox"  rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2"  onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2"  onClick={handleClClick}>Clear Text</button>
  <button className="btn btn-primary mx-2"  onClick={handleExClick}>Clear Extra Space</button>
  <button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy Text</button>
 </div>
 <div className="container my-3">
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <h2>Text Preview</h2>
    <p>{text.length>0?text:"Enter something above for preview it" }</p>

 </div>
 </>
  )
}
