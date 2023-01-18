import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [color, setColor] = useState("default");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //   const removeBodyClasses=()=>{
  //     document.body.classList.remove('bg-light')
  //     document.body.classList.remove('bg-dark')
  //     document.body.classList.remove('bg-success')
  //     document.body.classList.remove('bg-warning')
  //     document.body.classList.remove('bg-primary')
  //     document.body.classList.remove('bg-danger')
  // }

  // const toggleMode = (cls) => {
  //  removeBodyClasses();
  //  console.log(cls)
  // document.body.classList.add('bg-'+cls)

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#10375a";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'Amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Full'
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  // const colorMode = () => {
  //   if (color === "default") {
  //     setColor("beauty");
  //     document.body.style.backgroundColor = "red";
  //     showAlert("bEAUTY mode has been enabled", "success");
  //   } else {
  //     setColor("default");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light Mode has been enabled", "success");
  //   }
  // };

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
         
          <Route exact path="/"> */}
            <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze"
              mode={mode}
            />
          {/* </Route>
        </Switch> */}
      </div>
      {/* </Router> */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
