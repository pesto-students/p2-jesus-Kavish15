const mongoose=require('mongoose')

const expenseSchema=mongoose.Schema({
    userid:{
        type:String,
        required:true,
    },
    asset:{
        type:Number,
        required:true,
    },
    fixedIncome:{
        type:Number,
        required:true,
        min:6,
    },
    extraIncome:{
        type:Number,
        required:true
    },
    year:{
    type:String,
    }
})

module.exports=mongoose.model('Expense',expenseSchema);