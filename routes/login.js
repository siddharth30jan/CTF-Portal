const route=require('express').Router()
const questionBank=require('../models/questionBank')
const User =require('../models/User')

const passport=require('../routes/passport')

route.get('/',(req,res)=>{
   res.render('login')
})

route.post('/',passport.authenticate('local',{
  failureRedirect: '/login/failure',
  successRedirect: '/login/success'
}))


route.get('/success',(req,res)=>{
	User.findByIdAndUpdate(req.user.id,{entryTime: Date.now()})
		.then(x=>{
			res.redirect('/questions')
		})
		.catch(err=>{
			res.send('Some Error! '+ err)
		})

})


route.get('/failure',(req,res)=>{
	 //req.flash("success", "Username or password is incorrect.");
    //  res.redirect("/login");	
    res.send({mes: 'failure!!'})
})

module.exports=route