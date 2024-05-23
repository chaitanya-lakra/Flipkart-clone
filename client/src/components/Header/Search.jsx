
import { useState , useEffect } from "react";
import { InputBase , Box , styled, ListItem } from "@mui/material";
import { useDispatch , useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { getProducts } from "../../redux/action/productAction";
import {List} from "@mui/material";
import  {Link} from 'react-router-dom' ;

const Container = styled(Box)`
background : #ffffff;
width : 100% ;
margin-left : 10px;
border-radius : 2px;
display : flex;
 
`
 
const Input = styled(InputBase)(({ theme })=>({
    width : '100%' , 
    paddingLeft : '20px' ,  
    fontSize : '14px' ,
}))




const IconWrapper = styled(Box)`
 color : blue;
 padding : 5px;
 display : flex;


`
const Listwrapper = styled(List)`
position : absolute ; 
background : #ffffff ; 
color : #000 ; 
margin-top : 32px ; 
`

const Search = () =>{
    const dispatch = useDispatch();

    const [ text , setText ] = useState('');
    const {products} = useSelector(state => state.getProducts); 

    useEffect(()=>{
        dispatch(getProducts());
    }
    ,[dispatch ,text])

    const getText  = text => setText(text);
    return(
        <Container>
            <Input placeholder="Search for Products , Brands and more"
            onChange={(e)=>getText(e.target.value)} value={text}/>
            <IconWrapper>
            <SearchIcon/>
            </IconWrapper>
            {
                text&&
                <Listwrapper>
                    {
                        products.filter(products => products.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(products=>{
                            return(
                                <Link to={`/products/${products.id}`} style={{textDecoration : 'none'}} onClick={()=>setText('')}>
                                <ListItem>
                                {products.title.longTitle}
                                </ListItem>
                                </Link>
                            )
                        })
                    }
                </Listwrapper>

            }
        </Container>
    );
} 

export default Search;