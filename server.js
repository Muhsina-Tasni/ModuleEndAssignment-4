const express=require('express')
//importing the db
const connectDB = require('./config/db')

const userRoutes= require("./routes/userRoutes")
const customerRoutes = require("./routes/CustomerRoutes");
const caseRoutes = require("./routes/caseRoutes");
const PORT =process.env.PORT


const app = express()
app.use(express.json())

//different routes for different models
app.use("/users",userRoutes)
app.use("/api/customers", customerRoutes);
app.use("/api/cases", caseRoutes);

connectDB()

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})



