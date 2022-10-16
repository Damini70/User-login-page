import mongoose from "mongoose";
import express from "express";
import cors from "cors";



const app=express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/user",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected");

});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number
})

const User=new mongoose.model("User",userSchema)

app.post('/login',(req,res)=>{
  const{name,email,mob}=(req.body);
  const user= new User({
    name,
    email,
    mob,
  })
   if(user){
    User.save(err => {
        if(err) {
            res.send(err)
        } else {
            res.send( { message: "Successfully login." })
        }
    })
   }

  console.log(user);
})

app.post('/Home',(req,res)=>{
    res.send("home");
})





app.listen(8000,()=>{
    console.log(`Listening on port 8000`)
})








