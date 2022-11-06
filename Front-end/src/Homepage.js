import "./Homepage.css";
import React,{useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios"; 

const Homepage = (props) => {
    const navigate=useNavigate();
    const [data,setData]=useState([]);

    useEffect(()=>{
       axios.get("http://localhost:8000/login").then(res=>setData(res.data))
    //    console.log(data);
    },[])
   
   
    return (
       
        <div className="homepage">
            <h1>Hello {props.user.name}</h1>
            <button onClick={()=>navigate("/login")}>LogOut</button><br/><br/><br/>
             <h1>All Data</h1> 

            <table>
                <thead><tr><th>Name</th><th>Email</th><th>Mobile</th></tr></thead>
                <tbody>
                {data.map((item)=>{
                    return <tr><td>{item.name}</td><td>{item.email}</td><td>{item.mobile}</td></tr>
                })}
                </tbody>
               
            </table>
            
        </div>
    )
}

export default Homepage;