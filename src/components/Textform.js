import React, {useState} from 'react'

export default function Textform(props) {

  const[text,setText] = useState('Enter text here');

  const handleUpClick =()=>{
    let newText = text.toUpperCase()
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
   
   
   
    return (
    <>
      
      <div className="mb-3" style={{color:props.mode === 'dark'? 'white':'black'}} >
      <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'dark'? 'grey':'white'}} onChange={handleOnChange} id="myBox" rows="8 "></textarea>
    <button className="btn btn-primary mx-2"onClick={handleUpClick}>Convert to Upper case</button>
    <button className="btn btn-primary mx-2"onClick={handleLoClick}>Convert to Lower case</button>
    <button className="btn btn-primary mx-2"onClick={handleClearClick}>Convert to clear case</button>
   </div>
   <div className="container" style={{color:props.mode === 'dark'? 'white':'black'}} >
    <h1>Your Text Summary</h1>
    <p>{text.split(' ').length} word and {text.length} charchters</p>
    <p>{0.08* text.split(' ').length}minute read</p>
    <h2>Preview</h2>
    <p>{text}</p>

   </div>

  
     </>
  )
}
    