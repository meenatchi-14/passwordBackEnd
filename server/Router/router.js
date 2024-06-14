import  express  from "express";
import { generateToken, getUserByEmail } from "../Controller/user.js";
import { User } from "../model/user.js";
import bcrypt from "bcrypt"

const router=express.Router()

//login
router.post("/login",async(req,res)=>{
    try {
       //user exist
       const user= await getUserByEmail(req);
       if(!user){
        return res.status(400).json({error:"Invalid authorization"})
       }
       //validating password
       const vaildPassword=await bcrypt.compare(
        req.body.password,
        user.password
       );
       if(!vaildPassword){
        return res.status(400).json({error:"invalid password"})
       }
       const token=generateToken(user._id);
       res.status(201).json({data:"logged in successfully ",token})

    } catch (error) {
        console.log(error)
        res.status(500).json({error:"interal server error"})
    }
})


//signup
router.post("/signup", async (req, res) => {
    try {
      //  check user already exist
      let user = await getUserByEmail(req);
      if (user) {
        return res.status(400).json({ error: "User alredy exist" });
      }
      // generate hashed password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      user = await new User({
        ...req.body,
        password: hashedPassword,
        
      }).save();
     
      // generated token and giove response
       //const token = generateToken(user._id);
       res.status(201).json({data:"successfully register"})
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server" });
    }
  });
  
  export const userRouter = router;