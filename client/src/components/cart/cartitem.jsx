
import { Box, Button, Typography ,styled } from "@mui/material";
import { Addellipsis } from "../../redux/utils/comopent-utils";
import Buttongroup from "./buttongroup";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/action/cartAction";

const Wrapper = styled(Box)`
border-top : 1px #f0f0f0 solid ;
display : flex ;
background : #fff ;

`
const Left = styled(Box)`
margin : 20px ;
display : flex ;
flex-direction : column ;
`

const Remove = styled(Button)`
margin-top : 20px ;
font-size : 16px ; 
color : #000 ;
font-weight : 600 ;

`

const CartItem = ({items})=>{
    const dispatch = useDispatch();
    const id = items.id; 
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
const RemoveItems = (id)=>{
    dispatch(removeFromCart(id),[]);

}

    return(
        <Wrapper>
            <Left>
                <img src={items.url} alt="ok" style={{height : 110}}/>
                <Buttongroup/>
            </Left>
            <Box style={{margin : 20}}>
                <Typography>{Addellipsis(items.title.longTitle)}</Typography>
                <Typography style={{color : '#878787' , fontSize : 14 , marginTop : 10}}>Seller : RetailNet
                    <Box component='span'>
                        <img src={fassured} alt="" style={{width : 50 , marginLeft : 10}}/>
                    </Box>
                </Typography>
                <Typography style={{margin : '20px 0'}}>
               <Box component='span' style={{fontWeight : 600 , fontSize : 18}}>₹{items.price.cost}</Box>&nbsp;&nbsp;&nbsp;
               <Box component='span' style={{color: '#878787'}}>₹<strike>{items.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
               <Box component='span' style={{color : '#388e3c'}} >{items.price.discount}off</Box>&nbsp;&nbsp;&nbsp;
            </Typography>
            <Remove onClick={()=>{RemoveItems(id)}}>Remove</Remove>
            </Box>

        </Wrapper>
    )
}

export default CartItem;