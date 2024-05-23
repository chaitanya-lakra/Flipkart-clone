
import {products} from "./constant/data.js"

import Product from "./model/product-schema.js";

const defaultData = async ()=>{
    try{
 
        await  Product.insertMany(products);
        console.log("data inserted");

    }catch(error){
        console.log("error while inserting data" , error.message);
    }


}

export default defaultData;