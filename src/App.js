// import { useState } from "react";
import "./App.css";
// import Body from "./components/Body";
import Header from "./components/Header";
import TextForm from './components/TextForm';
import Alert from "./components/Alert";

import React, {useState} from 'react'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  const [mode,setMode]= useState('light'); //whether dark mode is on or not
  const [alert,setAlert]= useState(null);
  // const [mode1,setMode1]= useState('light');
  // const []
  const showAlert = (message, type)=>{
   setAlert({
    msg: message,
    type: type
   })
   setTimeout(()=>{
    setAlert(null);
   }, 1500);
  }

  const changegreen = ()=>{
    document.body.style.backgroundColor = '#35C649'
    showAlert("Theme changed to Green", "success"); 

  }
  const changeyellow = ()=>{
    document.body.style.backgroundColor = '#CAB911'
    showAlert("Theme changed to yellow", "success"); 

  }
  const changered = ()=>{
    document.body.style.backgroundColor = '#C15031'
    showAlert("Theme changed to red", "success"); 

  }
  const changeblue = ()=>{
    document.body.style.backgroundColor = '#09a193'
    showAlert("Theme changed to blue", "success"); 

  }
  const toggleMode = ()=>{
    if (mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#4c4f52'; 
    showAlert("Dark Mode has been Enabled", "success"); 
    document.title = 'Text Converter - Dark Mode';

    // setInterval (()=>{
    //   document.title = 'Text Converter is an amazing app ';
    // },2000)
    // setInterval (()=>{
    //   document.title = 'Install Now ';
    // },1500)
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';  
    showAlert("Light Mode has been Enabled", "success"); 
    document.title = 'Text Converter - Light Mode';



  }
}
  return (
    <>
    {/* <Router> */}
      <Header title= "reacttut" changered={changered} changeblue={changeblue} changegreen={changegreen} 
      changeyellow={changeyellow} mode={mode} 
      toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route Component={Body} exact path="/body">
          </Route> */}
          {/* <Route element={<TextForm showAlert={showAlert} heading='Enter The Text to analyze' mode={mode}/>} exact path="/"> */}
          <TextForm showAlert={showAlert} heading='Enter The Text to analyze' mode={mode}/>
          {/* </Route>
         </Routes>       */}
</div>
      {/* </Router> */}
    </>
  );
}

export default App;
