import express from 'express';
import { Usersignup , Userlogin } from '../controller/user-controller.js';
import { GetProducts , GetProductsById } from '../controller/get-products.js'; 


const router = express.Router();

router.post('/signup' , Usersignup);
 
router.post('/login' , Userlogin);

router.post('/order' , Order);

router.get('/products' , GetProducts);

router.get('/products/:id' , GetProductsById);

const Order =(req , res)=>{
    return res.status(200).json("ok");
}




export default router;