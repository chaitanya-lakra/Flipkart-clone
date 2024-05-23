import { useState , useContext} from "react";
import { Button , Box , Typography , styled , Badge} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/loginDialog';
import { DataContext } from "../../context/DataProvider";
import Profile from "./profile";
import { useNavigate } from "react-router-dom"; 
import { useSelector } from "react-redux";



const Container = styled(Box)`
display : flex ;
margin : 0 3% 0 30px;
& > button , & > p {
    margin-right : 40px;
    font-size : 14px;

}

`

const LoginButton  = styled(Button)`
color : #2874f0;    
background : #fff;
text-transform : none;
border-radius : 2px;
padding : 5px 40px;
box-shadow : none;
font-weight :600;
height : 32px;
`

const CustomButton =()=>{
    const { cartItems } = useSelector(state=> state.cart); 
    
    const navigate = useNavigate();
    const[open , setOpen] = useState(false);
    const{ account , setAccount} = useContext(DataContext);

    const openDialog = ()=>{
        setOpen(true)
    }


    return(
        <>
        <Container>
            {
                account? <Profile account={account}  setAccount={setAccount}/>
                :
            <LoginButton variant="contained" onClick={openDialog} >Login</LoginButton >
            }
            <Typography style={{marginTop : 3 , width : 135 }}>Become a Seller </Typography>
            <Typography style={{marginTop : 3}}>More</Typography>
            <Box style={{display:'flex' , cursor : 'pointer'}} onClick={()=>{ navigate('/cart');}}>
                <Badge badgeContent={cartItems?.length} color='secondary'>
                 <ShoppingCartIcon/>
                </Badge>
                <Typography>cart</Typography>
            </Box>
        <LoginDialog ok={open} setOpen={setOpen}/>
        </Container>
        </>


    );

}

export default CustomButton;