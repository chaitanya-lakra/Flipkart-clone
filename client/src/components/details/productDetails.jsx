
import { Box , Typography , styled , Table , TableBody , TableRow , TableCell } from "@mui/material";
import { LocalOffer as Badge } from '@mui/icons-material';


const SmallText = styled(Box)(({theme}) =>({
    [theme.breakpoints.down('md')] : {
        marginLeft : '20px'
    }
    
}))


const Stylebadge = styled(Badge)`
font-size : 14px ; 
margin-right : 10px ; 
color : #00cc00;
  
`



const ProductDetails = ({product})=>{
    const date = new Date(new Date().getTime()+(5*24*60*60*1000))
    
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    return(
        <>
            {
                product.id?
                <Box>
                <SmallText>
        <Typography>{product?.title.longTitle}</Typography>
            <Typography style={{marginTop : 5 , color : '#878787' , fontSize : 14}}>
               82 Ratings and 2 Reviews
               <Box component='span'><img src={fassured} alt="ok" style={{width :77 , marginLeft : 20}}/></Box>
            </Typography>
            <Typography>
               <Box component='span' style={{fontSize : 28}}>₹{product?.price.cost}</Box>&nbsp;&nbsp;&nbsp;
               <Box component='span' style={{color: '#878787'}}>₹<strike>{product?.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
               <Box component='span' style={{color : '#388e3c'}} >{product?.price.discount}off</Box>&nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography>Available Offers</Typography>
                <Typography style={{marginTop : '10px'}}><Stylebadge/> Get extra 20% off upto ₹50 on 1 item(s) T&C</Typography>
                <Typography style={{marginTop : '10px'}}><Stylebadge/> Get extra 30% off (price inclusive of discount) T&C</Typography>
                <Typography style={{marginTop : '10px'}}><Stylebadge/> Sign up for Flipkart Pay Later and get Flipkart Gift card worth ₹100* Know more </Typography>
                <Typography style={{marginTop : '10px'}}><Stylebadge/>Buy 2 items save 5% ; Buy 3 items save 10% T&C</Typography>
                <Typography style={{marginTop : '10px'}}><Stylebadge/>5% Cashback on Flipkart Axis bank Credit card</Typography>
                <Typography style={{marginTop : '10px'}}><Stylebadge/>No cosr EMI on bajaj Finserv EMI card on cart value above ₹2999 T&C</Typography>
            </SmallText>
            <Table style={{borderBottom : 'none'}}>
                <TableBody>
                    <TableRow>
                        <TableCell style={{color : '#878787'}}>
                            Delivery by
                        </TableCell>
                        <TableCell style={{fontWeight : 600}}>
                            Delivery by {date.toDateString()} | ₹40
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color : '#878787'}}>
                           Warrenty
                        </TableCell>
                        <TableCell style={{fontWeight : 600}}>
                           No Warrenty
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color : '#878787'}}>
                            Seller
                        </TableCell>
                        <TableCell >
                            <Box component='span' style={{color : '#2874f0'}}>
                                SupercomNet
                            </Box>
                            <Typography>GST Invoice Available</Typography>
                            <Typography>View more Seller starting from ₹{product[0]?.price.cost}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colspan={2}>
                            <img src={adURL} alt="supercoin" style={{width : '390px'}} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color : '#878787' }}>
                            Description
                        </TableCell>
                        <TableCell>
                            
                            {product?.description}
                        
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </Box>
            :
            ""
        }

            </>
    )



}

export default ProductDetails ;