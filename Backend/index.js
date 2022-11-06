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

const User=new mongoose.model("User",userSchema);

app.post('/login',(req,res)=>{

    // console.log(req.body);
    const {name,email,mob}=req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message: "User already exist"})
        }else{
            const user= new User({
                name:name,
                email:email,
                mobile:mob
            })
            // console.log(user);
            user.save(err=>{
                if(err){
                    res.send(err);
                }else{
                    res.send({message:"Success"});
                }
            })
        }
    })
   
})

app.get('/login',(req,res)=>{
    User.find({},(err,user)=>{
        if(err){
            console.log(err)
        }else{
           const data=user;
        //    console.log(data);
          res.send(data);
        }
    })
})



// app.post('/Home',(req,res)=>{
//     res.send("home");
// });





app.listen(8000,()=>{
    console.log(`Listening on port 8000`);
});








