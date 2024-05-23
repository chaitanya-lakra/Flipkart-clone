import SlideProducts from "./slide";
import { Box, styled } from "@mui/material";



const Component =styled(Box)`
display : flex ; 

`


const Left = styled(Box)(({ theme}) =>({
    width : '83%',
    [theme.breakpoints.down('md')] : {
        width : '100%'
    } 
    
}));
const Right = styled(Box)(({ theme}) =>({

    background :'#ffffff',
    padding : '1px' ,
    marginTop : '10px' ,
    marginLeft : '10px ',
    textAlign : 'center' ,
    width : '17%',
    [theme.breakpoints.down('md')] : {
        display : 'none'
    } 
    
}));


const MidSlide = ({products , title , timer}) =>{

    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <Component>
            <Left>
            <SlideProducts products={products} title={title} timer={timer} />
            </Left>
            <Right>
                <img src={adURL} alt='' style={{width : 217 ,height : '100%' }}/>
            </Right>
        </Component>


    )
}

export default MidSlide;