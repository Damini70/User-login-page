import './App.css';
import React from "react";
import Login from "./Login"
import Homepage from './Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState} from "react";


function App() {
  const [user,setLoginUser]=useState("");
 const childToParent=(childdata)=>{
    setLoginUser(childdata);
 }
//  console.log(user);

  return (
   
    <div className="App">
      <Router>

        <Routes>
        {/* <Route exact path="/login">
            {
              user? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route> */}
          <Route exact path="/login" element={<Login childToParent={childToParent}/>}/>
          <Route path="/home" element={<Homepage user={user}/>}/>
        </Routes>

      </Router>
        
     

    </div>
  );
}

export default App;
