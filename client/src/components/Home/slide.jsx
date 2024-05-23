import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Box, Button, Divider, Typography, styled} from '@mui/material';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';


const Component = styled(Box)`
margin-top : 10px;
background : #ffffff;

`

const Deal = styled(Box)`
padding : 15px 20px ;
display : flex;


`

const Timer = styled(Box)(({ theme })=>({

    display : 'flex' , 
    marginLeft : '10px',
    alignItems : 'center', 
    color : '#7f7f7f',
    [theme.breakpoints.down('md')] : {
        fontSize : '10px' , 

    }
    
}))


const Dealtext = styled(Typography)(({ theme })=>({

    fontSize : '22px' ,
    fontWeight : '600' , 
    marginRight : '25px' ,
    lineHeight : '32px' ,
    [theme.breakpoints.down('md')] : {
        fontSize : '15px',
        marginRight : '0px'
    }

}))



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 4
    }
};

const ViewallButton = styled(Button)`
margin-left : auto ;
backgrounf-color : #2874f0 ; 
border-radius : 2px ;
font-size : 13px ;
font-weight : 600 ;


`
const Image = styled('img')(({ theme })=>({
    width : 'auto' ,
    height : '150px' , 
    [theme.breakpoints.down('md')] : {
        width : '60px' , 
        height : '60px'
    }

}))

const Text  = styled(Typography)(({ theme })=>({
    fontSize : '14px ',
    marginTop : '5px' ,
    [theme.breakpoints.down('md')] : {
        fontSize : '8px'
    }

}))



const renderer = ({ hours , minutes , seconds}) =>{
    return <Box variant='span'>{hours} : {minutes} : {seconds} left</Box>
}


const SlideProducts = ({ products , title , timer}) => {

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    return (
        <>
            {
                products&&
                <Component>
                    <Deal>
                        <Dealtext>{title}</Dealtext>
                        {
                            timer &&
                            <Timer>
                            <img src={timerURL} alt="timer" style={{width :24, marginRight : '5px'}} />
                            <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
                        </Timer>
                        }
                        <ViewallButton variant="contained" >View All</ViewallButton>
                    </Deal>
                    <Divider/>

                    <Carousel responsive={responsive}
                        infinite={true}
                        disableSwipeOnMobile
                        disableDrag
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        removeArrowOnDeviceType={["tablet" , "mobile"]}
                        >
                        {
                            products.map(data => {
                                return (
                                    <Link style={{textDecoration : 'none'}} to={`/products/${data.id}`}>
                                    <Box textAlign='center' style={{padding : '25px 15px'}}>
                                        <Image src={data.url} alt="balo na"></Image>
                                        <Text style={{fontWeight : 600 , color : '#212121'}}>{data.title.shortTitle}</Text>
                                        <Text style={{color : 'green'}}>{data.discount}</Text>
                                        <Text style={{color :'#212121' , opacity : '.6'}}>{data.tagline}</Text>
                                    </Box>
                                    </Link>
                                )
                            })
                        }

                    </Carousel>
                </Component>
                   
            }
        </>
    )

}

export default SlideProducts;
