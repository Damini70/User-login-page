import React from "react";
import {useNavigate} from "react-router-dom";

const Homepage = (props) => {
    const navigate=useNavigate();
   
    return (
       
        <div className="homepage">
            <h1>Hello {props.setLoginUser.name}</h1>
            <button onClick={()=>navigate("/login")}>LogOut</button>
            
        </div>
    )
}

export default Homepage