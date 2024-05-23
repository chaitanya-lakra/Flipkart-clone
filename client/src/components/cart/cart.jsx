import {useSelector} from 'react-redux';
import {Box , Typography , Grid , styled, Button}  from '@mui/material';
import CartItem from './cartitem';
import TotleView from './totleview';
import EmptyCart from './emptycart';
import {ToastContainer , toast} from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const {cartItems} = useSelector(state=>state.cart);

    const ButtonNotification =()=>{
        toast.error('No Payment Gateway Found! , redirecting to home page', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: 'Bounce',
            closeOnClick : true
            });
        setTimeout(()=>navigate('/') , 5000)   
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
                    <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition
                    />
                    {/* Same as */}
                    <ToastContainer />

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