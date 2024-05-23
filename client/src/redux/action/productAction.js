import axios from "axios";

const URL ='https://flipkart-clone-sable-three.vercel.app'; 

export const getProducts = () => async(dispatch)=>{
    try{
        let {data} = await axios.get(`${URL}/products`,{
            headers : {"ngrok-skip-browser-warning" : "69420"}
            
        });
        dispatch({type : 'success' , payload : data })
    }catch(error){
        console.log(error)
        dispatch({type : 'fail' , payload : error.message})
    }

}


export const getProductDetails = (id) => async(dispatch) =>{
    try{
        dispatch({type : 'loading' });
        let {data} = await axios.get(`${URL}/products/${id}`,{
            headers :{"ngrok-skip-browser-warning" : "69420"}
        
        });
        console.log(data);
        dispatch({type : 'success1' , payload : data[0] })



    }catch(error){
                dispatch({type : 'fail1' , payload : error.message})

    }
}




