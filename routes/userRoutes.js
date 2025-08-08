const express = require('express')

const { authMiddleware } = require('../middleware/auth')
const { getAllUsers, register, login, getProfile, updateUser, deleteUser } = require('../controllers/userController')
const router=express.Router()



router.get('/',getAllUsers)//for read 
router.post('/register',register)//create
router.post('/login',login)
router.get('/profile',authMiddleware,getProfile)
router.put('/:id', updateUser); 
router.delete('/:id',deleteUser)

//eporting the user router
module.exports= router