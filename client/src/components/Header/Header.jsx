

import {AppBar , Toolbar , styled , Box , Typography , Badge } from '@mui/material';
import Search from './Search';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';



const Navbar = styled(AppBar)(({theme})=>({
  background : '#2873f0',  
  height : '55px',
  [theme.breakpoints.down('md')] : {
    height : '100px'
  }
}))


const Component = styled(Link)(({ theme })=>({
  marginLeft : '12%',
  lineHeight : '0',
  textDecoration : 'none',
  color : 'inherit', 
  [theme.breakpoints.down('md')] : {
    margin : '2% 80% 2% 2%'
    
  }
}))

const ToolbarStyle = styled(Toolbar)(({theme})=>({
  [theme.breakpoints.down('md')] : {
    display : 'flex' , 
    flexDirection : 'column'
  }
}))


const Subheading = styled(Typography)`
font-size : 10px;
font-style : italic ;
`
const CustomButtonstyle = styled(Box)(({ theme })=>({
  margin:'0 5% 0 auto',
  [theme.breakpoints.down('md')] : {
    display : 'none'
  }
}))

const Mobilecart = styled(Box)(({ theme })=>({
  display : 'none',
  [theme.breakpoints.down('md')] : {
    display : 'block',
    position : 'absolute',
    right : '6%',
    top : '14%'
  }
}))

function Header(){
  const navigate = useNavigate();
  const { cartItems } = useSelector(state=> state.cart); 

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return(
    <Navbar>
      <ToolbarStyle style={{minHeight: 55}}>
        <Component to={'/'}>
        <img src={logoURL} alt="ok no problem"  style={{width : 75}}></img>
        <Box style={{display : 'flex'}}>
          <Subheading>
            Explore&nbsp;
            <Box component='span' style={{color : '#ffe500'}}>plus</Box>
          </Subheading>
          <img src={subURL} alt="" style={{width:10 , height:10 , marginLeft:4}}/>
   
        </Box>
        </Component>
        <Search/>
        <CustomButtonstyle>
        <CustomButton/>
        </CustomButtonstyle>
      </ToolbarStyle>
        <Mobilecart onClick={()=>{ navigate('/cart');}}>
        <Box style={{display:'flex' , cursor : 'pointer' , float : 'right'}}>
                <Badge badgeContent={cartItems?.length} color='secondary'>
                 <ShoppingCartIcon/>
                </Badge>
                <Typography>cart</Typography>
            </Box>
        </Mobilecart>

    </Navbar>
  );
}

export default Header;