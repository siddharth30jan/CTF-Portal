const route=require('express').Router()
const questionBank=require('../models/questionBank')
const User =require('../models/User')

route.get('/',(req,res)=>{
    res.render('signup')
})

route.post('/',(req,res)=>{
    Users.create({
        userName: req.body.username,
        password: req.body.password,
        firstName: req.body.firstname,
        lastName: req.body.lastname
    }).then((createdUser)=>{
        res.redirect('/login')
    })    
})

module.exports=route