const mongoose=require('mongoose')

const questionBank=new mongoose.Schema({
	No: {type: Number,},
	question: {type:String},
	answer: {type: String},
	mcqs: {type: String}
})

module.exports=mongoose.model('questionBank',questionBank)