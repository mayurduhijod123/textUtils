import logo from "./logo.svg";
import "./App.css";
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  
  return (
    <>
      
      <Navbar Title="TextUtils" About="About"/>
      <div className="container my-3 ">
        <Textform heading="Enter the text to analyze below" />
     
      </div>
      
    </> 
  );
}

export default App;
