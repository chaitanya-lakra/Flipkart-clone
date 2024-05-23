import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    Firstname : {
        type : String,
        required : true,
        trim : true
    },
    Lastname :{
        type : String,
        required : true,
        trim : true
    },
    Email : {
        type : String,
        trim : true,
        unique : true ,
        lowercase : true
    },
    Password :{
        type : String,
        trim : true
    },
    Phone : {
        type : Number,
        trim : true
    }
})

const user = mongoose.model('user' , UserSchema);

export default user;