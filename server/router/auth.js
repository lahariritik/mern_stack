const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const router=express.Router();

require('../db/conne');
const User=require('../user/users');

router.get('/', (req, res) => {
    res.send(`hii this is home page from routerjs`);
});

router.post('/register',(req,res)=>{
    const {name,email,phone, work, password, cpassword}=req.body;
   
    if(!name || !email || !phone || !work || !password || !cpassword)
   {
     return res.json({
        error:"fill the form"
     })
   }
 
   User.findOne({email:email})
   .then((userExist)=>{
    if(userExist){
        return res.status(422).json({error:"Email already exists"});
    } else if(password!=cpassword){
        return res.status(422).json({error:"password not match exists"});
    }
    const user=new User({name,email,phone, work, password, cpassword});
     
    user.save().then(()=>{
        res.status(201).json({message:"user registered"});
    }).catch((err)=>res.status(500).json({error:"Failed to register"}));
   }).catch(err=>{console.log("error")})
    // console.log(name);
    // console.log(email); 
    // console.log(req.body);
    // res.json({ message: req.body})
    // res.send('ho gaya');
})

//login
router.post('/signin',async (req,res)=>{
    let token;
//      console.log(req.body);
//      res.json({message:"welcome"});
   try { 
        const {email,password}=req.body;
       if(!email || !password)
       {
        return res.status(400).json({error:"fill all things"});
       }

       const userlogin= await User.findOne({email:email})

       if(userlogin)
       { 
           const isMatch= await bcrypt.compare(password,userlogin.password);
            token= await userlogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });
          if(!isMatch)
          {
            res.json({message:"not login"});
          }
          else{
            res.json({message:"succesfully login"})
          } 
       }else{
           res.status(400).json({message:"unsuccesfully login"})
       }
   } catch (err) {
      console.log(err);
   }
 })
module.exports=router;