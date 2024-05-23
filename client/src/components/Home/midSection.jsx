
import { imageURL } from "../../Constants/Data";
import { Grid, styled } from "@mui/material";

const Wrapper = styled(Grid)`
margin-top : 10px;
display : flex ;
justify-content : space-between ;
`
const Image = styled('img')(
    ({ theme }) =>({
    marginTop : '10px',
    width : '100%',
    display : 'flex', 
    justifyContent : 'space-between',
    [theme.breakpoints.down('md')] : {
        objectFit : 'cover' ,
        height : '120px' ,
        width : '100%'
    }
}));

const MidSection = ()=>{
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return(
        <>
        <Wrapper container spacing={1}>
            {
                imageURL.map(data=>{
                    return(
                        <Grid item lg={4} md={12} sm={12} xs={12}>
                        <img src={data} alt="imgBanner" style={{width : '100%'}} />
                        </Grid>
                    )
                })
            }
        
        </Wrapper>
        <Image src={url} alt="covidBanner" />

        </>
    )
}

export default MidSection;