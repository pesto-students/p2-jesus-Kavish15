const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    uname:{
        type:String,
        required:true,
        min:6
    },
    email:{
        type:String,
        required:true,
        max:20,
        min:6
    },
    password:{
        type:String,
        required:true,
        min:6,
    },
    date:{
    type:Date,
    default:Date.now
    }
})

module.exports=mongoose.model('User',userSchema);