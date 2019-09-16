const route=require('express').Router()
const questionBank=require('../models/questionBank')
const User =require('../models/User')


route.get('/',(req,res)=>{

	//Find the user 
	User.find({id: req.user.id})
	.then(X=>{
		//Find the question to be sent
		questionBank.find({No: X.lastAttempt})
		.then(Y=>{
			res.send(Y)
		})
		.catch(err=>{
			res.send('Some Error! '+ err)
		})


	})
	.catch(err=>{
		res.send("Some err "+ err)
	})

})

module.exports=route

