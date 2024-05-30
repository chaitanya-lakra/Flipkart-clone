 import NavBar from  './NavBar'
 import Banner from './Banner'
 import { useEffect } from 'react'
 import { getProducts } from '../../redux/action/productAction'
 import {useDispatch , useSelector} from 'react-redux'
 import SlideProducts from './slide'
 import MidSlide from './midSlide'
 import MidSection from './midSection'
 import axios from 'axios'

 import { Box , styled } from '@mui/material'

const Component = styled(Box)`
padding : 10px ;
background : #f2f2f2 ;

`

const Home = ()=>{
    const {products} = useSelector(state => state.getProducts);
    const URL ='https://tasks45-ochre.vercel.app'; 
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])    



    return (
        <>
        <NavBar/>
        <Component>
        <Banner/>
        {
            products[0]?
            <MidSlide products={products} title='Deal Of The Day' timer={true} />
            :""

        }
        <MidSection/>
        <SlideProducts products={products} title = 'Discount For You' />
        <SlideProducts products={products} title='Top Selections' />
        <SlideProducts products={products} title ='Recommanded Items'/>
        <SlideProducts products={products} title = 'Trending Offers' />
        <SlideProducts products={products} title ='Recommanded Items'/>
        <SlideProducts products={products} title='Top Selections' />
        </Component>
        </>
    )
}

export default Home;