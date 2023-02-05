import React,{useState} from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// let hacker = "<h1>dedsecboy</h1>"
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode Enable",'Success');
      document.title = "Text-Util (Dark)"
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode Enable",'Success');
      document.title = "Text-Util (Light)"

    }
  }
    // setInterval(()=>{
    //   document.title = "Text Util is Amezing dev by Roy"
    // },2000)
    // setInterval(()=>{
    //   document.title = "Text Util is Amezing dev by Dedsec" 
    // },1500)
  
  return (
    <>
    {/* <Router> */}
    <Navbar title='TextUtil' home='HOME' aboutSite='About' mode={mode} toggleMode={toggleMode} />
    <Alert Alert={alert} />
    <TextForm showAlert={showAlert} formHeading='TextUtil Online Converter'  mode={mode}/>
{/* 
    <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} formHeading='TextUtil Online Converter'  mode={mode}/>} />
            
    </Routes>
    </Router>    */}
    </>
  );
  }
export default App;
