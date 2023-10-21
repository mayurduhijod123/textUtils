import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick =()=>{
   let newText = text.toUpperCase();   
    setText(newText)
   }
   const handleLoClick =()=>{
    let newText = text.toLowerCase();   
     setText(newText)
    }
    const handleClearClick =()=>{
      let newText = (" ");   
       setText(newText)
      }

   const handleOnChange =(event)=>{
  setText(event.target.value);
   
   }
   
   
   const[text,setText] = useState('Enter text here');
    return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8 "></textarea>
  </div>
  <button className="btn btn-primary mx-2"onClick={handleUpClick}>Convert to Upper case</button>
  <button className="btn btn-primary mx-2"onClick={handleLoClick}>Convert to Lower case</button>
  <button className="btn btn-primary mx-2"onClick={handleClearClick}>Convert to clear case</button>
 </div>
  )
}
    