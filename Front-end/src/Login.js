import React,{useState} from"react";
import {useNavigate} from "react-router-dom";
import axios from "axios"; 

const Login= ({setLoginUser}) => {
    const navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",
        email:"",
        mob:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        // console.log(user);
    }
    const log=()=>{
        const {name,email,mob}=user;
       
        if(name && email && mob){
            navigate("/home");
            axios.post("http://localhost:8000/login", user).then(res=>{setLoginUser(res.data.user)})
            setLoginUser(user);
        }else{
            alert("invalid input")
        }
       
    }

   
  
    return (
        <div className="login">
           
          <input type="text" placeholder="Enter Username" name="name" value={user.name}  onChange={handleChange}  required/><br/>

          
          <input type="email" placeholder="Enter Email" name="email" value={user.email} onChange={handleChange}  required/><br/>

         
          <input type="number" placeholder="Enter Mobile Number" name="mob" value={user.mob}  onChange={handleChange}required/><br/>
      
          <button type="submit" onClick={log}>Login</button>
        </div>
    )
}

export default Login;