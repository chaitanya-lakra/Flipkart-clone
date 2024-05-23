
import { Box, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Addtocart } from "../../redux/action/cartAction";

const Container = styled(Box)(({ theme })=>({

    minWidth : '40% ',
    padding : '40px 0 0 80px' ,
    [theme.breakpoints.down('md')] :{
        padding : '15px 20px'
    } 
}))


const Image = styled(Box)`
    padding : '15px 20px';
    width : '90%';
    border : '1px solid #f0f0f0';
`

const Styledbutton = styled(Button)`
width : 100% ;
height : 50px ;
border-radius : 2px ;

`

const Photo = styled('img')(({ theme })=>({
    [theme.breakpoints.down('md')] : {
        width : '70%' ,
        margin: '30px 40px'
    }
}))

const ActionItem = ({product}) =>{
    const [quantity , setQuantity] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Id  = product.id;
    const AddToCart = ()=>{
        dispatch(Addtocart(Id , quantity));
        navigate('/cart');
    }

    return(
        <>  
            <Container>
                <Image>
                    <Photo src={product.detailUrl} alt="ok" style={{marginBottom : '50px'}}/>
                </Image>
            <Styledbutton  onClick={()=>AddToCart()} style={{marginRight : 10 , background : '#ff9f00'}}variant="contained">Add TO Cart</Styledbutton>
           
            </Container>
        
        </>
    )

    
}

export default ActionItem;