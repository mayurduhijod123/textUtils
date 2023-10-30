import "./App.css";
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
 
function App() {
  const[mode,setMode]= useState ('light');

  const toggleMode = ()=>{
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
  }
  else{
    setMode ('light');
    document.body.style.backgroundColor = 'white'
  }
}
  
  return (
    <>
      {/* <Navbar Title="TextUtils" About= "about" mode ={mode} /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3 ">
        <Textform heading="Enter the text to analyze below" mode={mode} />
      </div>
    </> 
  );
}

export default App;
