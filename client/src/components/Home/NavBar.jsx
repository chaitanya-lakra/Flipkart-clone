


import { Box, Typography , styled } from "@mui/material";
import {navData} from "../../Constants/Data"

const Container = styled(Box)(({ theme}) =>({
    margin : '0 130px 0 130px',
    display :'flex',
    justifyContent:'space-between',
    overflow : 'overlay',
    [theme.breakpoints.down('md')] : {
        margin : '0' ,
        flexWrap : 'wrap'

        
    } 
    
  }));

const Text = styled(Typography)(({ theme })=>({

    fontSize : '14px',
    fontWeight : '600',
    fontFamily : 'inherit' , 
    [theme.breakpoints.down('md')] : {
        fontSize : '10px'
    } 
    
}))


const Component = styled(Box)`
padding : 12px 8px;
text-align : center;
`
const Image = styled('img')(({ theme })=>({
    width : '100%',
    [theme.breakpoints.down('md')] : {
        width : '52px' 
    }
}))

const NavBar = () =>{
    return(
        <Box style={{background : '#fff'}}>

        <Container>
            {
                navData.map(data => {
                    return(
                        <Component>
                            <Box  style={{background : 'linear-gradient(106.5deg, rgba(255, 215, 185, 0.91) 23%, rgba(223, 159, 247, 0.8) 93%)' ,
                             borderRadius : '50%' , margin : 'auto',width : '64px' }}>
                            <Image src={data.url} alt="" />
                            </Box>
                            <Text>{data.text}</Text>
                        </Component>

)
})
}
        </Container>
</Box>
    )

}

export default NavBar ;
