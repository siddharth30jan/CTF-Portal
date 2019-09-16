const route=require('express').Router()
const questionBank=require('../models/questionBank')
const User =require('../models/User')

route.get('/',(req,res)=>{
    res.render('signup')
})

route.post('/',(req,res)=>{
    User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstname,
        lastName: req.body.lastname
    }).then((createdUser)=>{
    	res.send({mes: 'done!!',
    			user: createdUser})
        //res.redirect('/login')
    }).catch(err=>{
    	res.send('Some err '+ err)
    })   
})

module.exports=route