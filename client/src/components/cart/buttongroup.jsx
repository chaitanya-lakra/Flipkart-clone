import { Button ,ButtonGroup  , styled} from "@mui/material";


const Wrapper = styled(ButtonGroup)`
margin-top  : 30px ;
`

const StyleButton = styled(Button)`
border-radius : 50% ;
`

const Buttongroup = ()=>{
    return(
        <Wrapper>
        <StyleButton>-</StyleButton>
        <Button disabled>1</Button>
        <StyleButton>+</StyleButton>
        </Wrapper>
    )
}

export default Buttongroup;