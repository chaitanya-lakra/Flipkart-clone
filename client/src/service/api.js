import axios from 'axios';


const URL = 'https://flipkart-clone-sable-three.vercel.app'; 
 export const SignupAuth = async (data) =>{
    try{
        return await axios.post(`${URL}/signup` , data);
    }catch(error){
        console.log(error.message , 'kha konda gara ke')
    }

}



export const AuthLogin = async (data) =>{
    try{
        return await axios.post(`${URL}/login` , data);
    }catch(error){
        console.log(error.message , 'kha konda gara ke')
        return error.response;
    }

}

export const PayWithPaytm = async(data)=>{
    try{
        let response = axios.post(`${URL}/payment` , data);
        console.log(response.data);
    }catch(error)
    {
        console.log(error.message);
    }
}