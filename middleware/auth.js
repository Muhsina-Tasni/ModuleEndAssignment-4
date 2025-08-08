//json web token
const jwt=require('jsonwebtoken')

//middleware
const authMiddleware=(req,res,next)=>{
   const token=req.header('Authorization')?.replace('Bearer ','')
   console.log('token',token);
   
//if there is no token
if(!token)return res.status(401).json({
    message:'no  token,access denied'
})

 try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    req.user = decoded.user;
    next();
  } catch (error) {
    console.log("Token verification error:", error);
    res.status(401).json({ message: "Invalid token" });
  }
   
}
//exporting the middleware
module.exports={authMiddleware}


