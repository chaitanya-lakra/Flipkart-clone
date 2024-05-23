import { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from "../../redux/action/productAction";
import { Box, Grid, styled } from '@mui/material';
import ActionItem from "./actionItem";
import ProductDetails from "./productDetails";

const Component = styled(Box)`
background : #ffffff ;
`

const Container = styled(Grid)`
background : #fffff;
display : flex ;
justify-content : space-between;

`

const Right = styled(Box)(({ theme})=>({
   marginTop :'50px' ,
   width : '60%',
   [theme.breakpoints.down('md')] :{
      width : '100%', 
   }
  
}))



const DetailView = () =>{
   
    const dispatch =useDispatch();
    const { id } = useParams();
    const {product} = useSelector(state => state.getProductDetails);
    useEffect(()=>{
            dispatch(getProductDetails(id))
    } , [dispatch,id]);
    return(
       <Component> 
         {
            product?
         <Container container>
         <Grid item lg={4} md={4} sm={4} xs={12}>
            <ActionItem product={product}/>
         </Grid>
         <Right item lg={8} md={8} sm={8} xs={12} >
            <ProductDetails product={product}/>
         </Right>
         </Container>
         :
         ""
         }

       </Component>
    )
}

export default DetailView;