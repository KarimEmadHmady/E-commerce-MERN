import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String , 
        require: true ,
    } , 

    email: {
        type: String , 
        require: true ,
        unique: true ,
    } , 

    password: {
        type: String ,
        require: true ,
    } , 

    isAdmin: {  // this for admin > it is user is admin or Not 
        type: Boolean , 
        require: true ,
        default: false ,
    } , 
} , {timestamps: true}); // here for add time and date in create and update 

const User = mongoose.model('User', userSchema) ;

export default User; 