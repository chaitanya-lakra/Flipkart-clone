import {Box , Typography  , styled} from '@mui/material';
import { useState , useEffect } from 'react';

 
 const Header = styled(Box)`
padding : 15px 24px ;
background : #fff ;
 border-bottom : 1px solid #f0f0f0 ;
 `
const Heading = styled(Typography)`
color : #878787 ;
`
const Container = styled(Box)`
padding : 15px 24px ; 
background : #fff ; 
& > p{
margin-bottom : 20px ; 
font-size : 14px ;
`
const Price = styled(Box)`
float : right ;
`

const Discount = styled(Typography)`
color :green ; 
margin-top : 20px ;
font-weight : 500 ;
`


const TotleView =({ cartItems })=>{

    const [price  , setPrice] = useState(0);
    const [discount , setDiscount] = useState(0);

    const Calculation=()=>{
        let price = 0 , discount = 0 ;
        cartItems.map(items=>{
                price+=items.price.mrp;
                discount+= (items.price.mrp-items.price.cost);
                return 0;
            
        });
        setPrice(price);
        setDiscount(discount);
    }
  
    useEffect(()=>{
        Calculation();
    },[cartItems]);
    
    return(
      <Box>
        <Header>
            <Heading>PRICE DETAILS</Heading>
        </Header>
        <Container>
            <Typography>Price ({cartItems?.length} items)
            <Price component='span'>₹{price}</Price>
             </Typography>

            <Typography>Discount
            <Price component='span'>₹{discount}</Price>
            </Typography>
       
            <Typography>Delivery Charges
            <Price component='span'>₹40</Price>
            </Typography>
       
            <Typography variant='h6'>Total Amount
            <Price component='span'>₹{price-discount+40}</Price>
            </Typography>
            <Discount>you will save ₹{discount-40} on this order</Discount>
        </Container>
    </Box>
    )
}

export default TotleView;