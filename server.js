const express=require('express')
const app=express()

const mongoose = require('mongoose');
const passport = require('./routes/passport');
const session=require('express-session')

app.use(express.json())
app.use(express.urlencoded({extended: true}))


 
mongoose.connect('mongodb://localhost/ctf1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(session({
    secret: 'somesecretstring'
}))
app.use(passport.initialize());
app.use(passport.session());




app.use('/questions',require('./routes/questions'))
app.use('/evaluation',require('./routes/evaluation'))
app.use('/logout',require('./routes/logout'))
app.use('/login',require('./routes/login'))
app.use('/signup',require('./routes/signup'))


app.listen(3000,()=>{
	console.log("Succesfully running on port localhost:3000")
})