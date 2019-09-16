const passport=require('passport')
const Localstrategy=require('passport-local').Strategy
const User=require('../models/User')

passport.serializeUser(function(user,done){
    done(null,user.username)
})


passport.deserializeUser(function(username,done){
    User.find({userName: username}).then((user)=>{
        if(!user){
            return done(new Error("No such User!!"))
        }
        return done(null,user)
    }).catch((err)=>{
        done(err)
    })
})

passport.use(new Localstrategy((username,password,done)=>{
   User.find({userName: username}).then((user)=>{
        
        if(!user){
            return done(null,false,{message: "No such User!"})
        }
        if(user.password !== password){
            return done(null,false,{message: "Invalid Password!"})
        }
        return done(null,user)
    }).catch((err)=>{
        return done(err)
    })
}))

exports=module.exports=passport