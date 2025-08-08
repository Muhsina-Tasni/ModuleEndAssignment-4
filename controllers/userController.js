//  user controller
 const User=require ('../model/User')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


//for to get all users
const getAllUsers=async (req,res)=>{
    try{
   const users= await User.find()
   res.json({users})
 
    }catch(error){
  console.log(error);
  res.status(500).json({ message: "Server error" });
}

 } 
//for registration
 const register=async(req,res)=>{
  
    const {name,email,password,role}=req.body
    try{
const existingUser=await User.findOne({email})
if(existingUser)
  return res.status(400).json({ message: "User already registered" });
        //hashing the password
const hashedpassword = await bcrypt.hash(password,10)


  const registered= await User.create({name,email,password:hashedpassword,role})
    res.status(201).json(registered);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }

 }

///for login

const login=async (req,res)=>{

    const {email,password}=req.body

    try{
   const user= await User.findOne({email})
   if(!user) return res.status(400).json({
    message:"invalid credential"
   })
   
//compare the password
   const isMatch = await bcrypt.compare(password,user.password)
   if(!isMatch) return res.status(400).json({
    message:"invalid credentials"
   })


   const payload={user:{id:user.id}}
   //take token from the env file
   const token = jwt.sign(payload, process.env.JWT_SECRET || "secret", { expiresIn: "1h" })

   res.json({message:"successfully registered",token})
    }catch(error){
  console.log(error);
  res.status(500).json({ message: "Server error" });
}

 }

//for to get profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch(error){
  console.log(error);
  res.status(500).json({ message: "Server error" });
}

};

//for update user

const updateUser= async (req,res)=>{
    try{
const updatedUser = await User.findByIdAndUpdate
(req.params.id,
  req.body,
{new:true,runValidators:true})

if(!updatedUser) return res.status(404).json({
    message:"user not found"
})
res.status(200).json(updatedUser)

    }catch(error){
  console.log(error);
  res.status(500).json({ message: "Server error" });
}
}

//for delete user
const deleteUser= async (req,res)=>{
    try{
const deleted = await User.findByIdAndDelete(req.params.id)

//if not ge the searched user
if(!deleted) return res.status(404).json({
    message:"user not found"
})
res.status(200).json({message:"user deleted successfully"})
    }catch(error){
  console.log(error);
  res.status(500).json({ message: "Server error" });
}

}
//exporting
module.exports= {getAllUsers,register,login,getProfile,updateUser,deleteUser}



