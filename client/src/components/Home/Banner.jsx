import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {bannerData} from '../../Constants/Data'
import { styled } from "@mui/material";

const Image = styled('img')(({ theme}) =>({

  width : '100%',
  height : '200px',
  
  [theme.breakpoints.down('md')] : {
      objectFit : 'cover' ,
      height : '150px'
  } 
  
}));
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Banner = ()=>{
    return(
       <Carousel responsive={responsive}
       infinite={true}
       disableSwipeOnMobile
       disableDrag
       autoPlay={true}
       autoPlaySpeed={3000}
       removeArrowOnDeviceType={["tablet" , "mobile"]}
       >
        {
            bannerData.map(data=>{
                return(
                    <Image src={data.url} alt="" />

                )
            })
        }

       </Carousel>
    )
}

export default Banner;