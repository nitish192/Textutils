
import './App.css';

 
 import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
//  import About from './components/About';
 
 import React, { useState } from 'react';
 import Alert from './components/Alert';
 

//  import {
//   BrowserRouter as Router,
//   Switch,
//   Route
  
// } from "react-router-dom";

function App() {
  const [mode, setMode]=useState('dark');
  const [alert, setAlert]=useState('null');
  const showAlert=(message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(() => {
      setAlert('null');
      
    }, 3000);
  }
  
  

  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      showAlert("Dark mode has been enabled","success")
    }else{
      setMode('light');
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>

   {/* <Router> */}
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
   {/* <Switch> */}
          {/* <Route  exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
             <TextForm showAlert={showAlert} headings="Enter The Text" />
          </Route>
    </Switch> */}
                 <TextForm showAlert={showAlert} headings="Enter The Text" />
   </div>
    {/* </Router> */}
    </>
 
  );
}

export default App;
