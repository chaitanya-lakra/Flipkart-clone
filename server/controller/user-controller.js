
import user from "../model/user-schema.js";




export const Usersignup = async (resquest , response) =>{
    try{
        const User = resquest.body;
        const newUser = new user(User);
        await newUser.save();
        response.status(200).json({message : 'hei gala '});
    }catch(error){
        response.status(500).json({messgae : error.message});
    }
    

}


export const Userlogin = async (resquest , response) =>{
    try{
        const Firstname = resquest.body.Firstname;
        const Password = resquest.body.Password; 
        let User = await user.findOne({Firstname : Firstname , Password : Password}); 
        if(User){
            return response.status(200).json(`${Firstname} login successfull`);
        }
        else{
            return response.status(401).json('invalid login');
        }

    }catch(error){
        response.status(500).json({messgae : error.message});
    }
}

