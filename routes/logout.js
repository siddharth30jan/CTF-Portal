const route=require('express').Router()
const questionBank=require('../models/questionBank')
const User =require('../models/User')

route.get('/', function(req, res){

	User.find({id: req.user.id})
	.then(x=>{

		User.findByIdandUpdate(req.user.id,{$inc: {timeTaken: Date.now()-x.entryTime}},{new: true})
		.then(x=>{
			res.send('Success!')
		})
		.catch(err=>{
			res.send('Some Error! '+ err)
		})

	})
	.catch(err=>{
			res.send('Some Error! '+ err)
		})
	

    req.logout();
    res.redirect('/login');
  });	



module.exports=route