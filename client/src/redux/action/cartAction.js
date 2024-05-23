
import axios from 'axios' ;

const URL ='https://flipkart-clone-sable-three.vercel.app'; 

export const Addtocart = (id ,quantity) => async(dispatch)=>{
    try{
        let {data} = await axios.get(`${URL}/products/${id}`);
        dispatch({type : 'success3' , payload :{...data[0] , quantity}});
    }catch(error){
        dispatch({type : 'fail3' , payload : error.message});
    }

}

export const removeFromCart = (id)=> (dispatch)=>{
    dispatch({type : 'remove' , payload : id});

}