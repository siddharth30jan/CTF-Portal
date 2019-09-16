const route=require('express').Router()
const questionBank=require('../models/questionBank')
const User =require('../models/User')


route.post('/',(req,res)=>{
	//Check whether current ans is correct or wrong
	let curQues=req.user.lastAttempt
	questionBank.find({No: curQues})
	.then(X=>{


		User.findByIdandUpdate(req.user.id,{$inc: {lastAttempt : 1 }},{new: true})
			.then(user=>{
				res.json({mes: 'Done!'})
			})
			.catch(err=>{
				res.json({err: err})
			})



		if(req.body.ans===X.answer){

			User.findByIdandUpdate(req.user.id,{$inc: {correctAns : 1 }},{new: true})
			.then(user=>{
				res.json({mes: 'Done!'})
			})
			.catch(err=>{
				res.json({err: err})
			})

		}
		
	})

	res.redirect('/questions')





})

module.exports=route