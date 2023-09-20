import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'
import React, { useState } from 'react';

function App() {
  const [mode, setmode] = useState('light'); //whether Dark mode is enabled or not
  const [alert, setAlert] = useState(null); //whether is alert is set or not

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1800)
  }

  const togglemode = () => {                    //for Dark Mode Function
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled","success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="Textutils" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert} />
      <div className='container my-3'><TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" /></div>
      {/* <About mode={mode}/> */}
    </>
  );
}

export default App;
