import {useSelector} from 'react-redux';
import {Box , Typography , Grid , styled, Button}  from '@mui/material';
import CartItem from './cartitem';
import TotleView from './totleview';
import EmptyCart from './emptycart';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Wrapper = styled(Grid)(({theme})=>({

    padding : '30px 135px',
    [theme.breakpoints.down('md')] : {
        padding : '5px 10px'
    }
}));

const Griditem = styled(Grid)(({theme})=>({
    [theme.breakpoints.down('md')] : {
        margin : '20px 0'
    }
}))

const Header = styled(Box)`
padding : 15px 20px ;
background : #fff ;
`

const Buttonwrapper = styled(Box)`
padding : 16px 22px ;
background : #fff ; 
box-shadow : 0 -2px 10px 0 rgb(0 0 0/10%) ;
border-top : 1px solid #f0f0f0;
`
const Cart =()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {cartItems} = useSelector(state=>state.cart);

    const ButtonNotification =()=>{
        toast.success('Order Place Successfully');
        dispatch({type : 'EMPTY'})
    }


    return(
      <>
      {
        cartItems.length?
            <Wrapper container>
                <Grid item lg={9} md={9} sm={12} xm={12} style={{paddingRight : 15 }}>
                    <Header>
                        <Typography>my cart({cartItems.length})</Typography>
                    </Header>
                    {
                        cartItems.map(items=> <CartItem items={items}/>)
                    }
                    <Buttonwrapper onClick={ButtonNotification}>
                        <Button style={{display : 'flex' , marginLeft : 'auto' , backgroundColor : '#fb641b' , color : '#fff' , height : '51px' , width : '250px' , borderRadius : '2px'}}>Place Order</Button>
                    </Buttonwrapper>
                

                </Grid>
                <Griditem item lg={3} md={3} sm={12} xm={12} >
                    <TotleView cartItems={cartItems}/>
                </Griditem>

            </Wrapper>
        :
        <Box>
            <EmptyCart/>
        </Box>
      }
      </>
    )
}

export default Cart;