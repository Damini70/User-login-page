import "./Login.css";
import React,{useState} from"react";
import {useNavigate} from "react-router-dom";
import axios from "axios"; 

const Login= ({childToParent}) => {
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
        });
        
        // console.log(user);
    }
    const log=()=>{
        const {name,email,mob}=user;

       
        if(name && email && mob){
        //    console.log(user);
           childToParent(user);
        //    console.log(user);
            navigate("/home");
            axios.post("http://localhost:8000/login", user).then(res=>console.log(res))
            // setLoginUser(user);
        }else{
            alert("invalid input")
        }
       
    }

   
  
    return (
        <div className="login">
            <h1>Enter your data</h1><br/><br/><br/>
          <form onSubmit={log} method="post">
          <input type="text" placeholder="Enter Username" name="name" value={user.name}  onChange={handleChange}  required/><br/>

          
<input type="email" placeholder="Enter Email" name="email" value={user.email} onChange={handleChange}  required/><br/>


<input type="number" placeholder="Enter Mobile Number" name="mob" value={user.mob}  onChange={handleChange}required/><br/>

<input type="submit" value="Submit"></input>
          </form>
        </div>
    )
}

export default Login;