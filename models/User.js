const mongoose=require('mongoose')

const User=new mongoose.Schema({
	firstName: {type: String,trim: true,defalult: ''},
	lastName: {type: String,trim: true,defalult: ''},
	username: {type: String,trim: true,defalult: ''},
	password: {type: String,trim: true,defalult: ''},
	lastAttempt: {type: Number,defalult: 0},
	correctAns: {type: Number,defalult: 0},
	entryTime: {type: Number,defalult: 0},
	timeTaken: {type: Number,defalult: 0}
})

module.exports=mongoose.model('User',User)