import { Box, Button, Dialog, TextField, Typography,styled } from "@mui/material";
import { useState , useContext} from "react";
import {SignupAuth , AuthLogin} from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import VisibilityIcon from '@mui/icons-material/Visibility';





    const Component = styled(Box)`
    height : 70vh ;
    width : 90vh ;
    display : flex ;
    `

    const Image = styled(Box)`
    background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat; 
    height : 80.1%;
    width : 30% ;
    padding : 45px 35px ;

    & > p , & >h5{
        color :#ffffff ; 
    }
    
    `
    const Wrapper = styled(Box)`
    display : flex ; 
    flex-direction : column;
    padding : 25px 35px ;
    flex : 1;
    & > div , & > button , & > p{
        margin-top :15px ;
    }
    `


    const Text = styled(Typography)`
    font-size : 12px ;
    color : #878787 ;
    `

    const CreateAccount = styled(Typography)`
    font-size : 12px ; 
    text-align : center ;
    color : #2874f0 ; 
    font-weight : 600 ;
    cursor : pointer ;
    
    `


    const LoingButton = styled(Button)`
    text-transform : none ;
    background : #f8641B ;
    color: #fff; 
    height : 48px
    border-radius : 2px

    `

    

    const RequestOtp = styled(Button)`
    text-transform : none ;
    background : #fff;
    color: #2874f0 ; 
    height : 48px ; 
    border-radius : 2px ;  
    box-shadow : 0 2px 4px 0 rgb(0 0 0/ 20%) ;

    `


    const Error = styled(Typography)`
    color : #ff6161; 
    font-size : 10px;
    line-height : 0;
    margin-top : 10px ;
    font-weight : 600;
    
    
    `

    const Icon = styled(VisibilityIcon)`
    position : absolute ; 
    top : 28% ;
    right : 7% ;
    cursor : pointer;
    z-index : 1;
    `


    const accountInitialValue  = {
        login : {
            view : 'login', 
            heading : 'Login',
            subHeading : 'Get access to your Order , watchlist and Recommandations'
        },
        
        signup : {
            view : 'Signup',
            heading : "Looks like you're new here",
            subHeading : 'Signup with your mobile number to get started'
        }
    }

    
    
        const signupInitialValues = {
            Firstname: '',
            Lastname: '',
            Email: '',
            Password: '',
            Phone: ''
        };

        const loginInitialValue = {
            Firstname : '',
            Password : ''
        }

const LoginDialog = (probs) => {
    const[acount , toggleAcount] = useState(accountInitialValue.login);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [login , setLogin] = useState(loginInitialValue);
    const [error , setError] = useState(false);
    const {setAccount} = useContext(DataContext);
    const [toggleVisible , setToggleVisible] = useState('password');
    

    const HandleClose = () => {
        probs.setOpen(false)
        toggleAcount(accountInitialValue.login)
        setError(false);
        setToggleVisible('password');
    }

    const handleToggle = ()=>{
        toggleAcount(accountInitialValue.signup);
    }

    

    const onInputChange = (e) =>{
        setSignup({...signup , [e.target.name] : e.target.value});
    }


    const UserSignup = async ()=>{
        let response = await SignupAuth(signup);
        if(!response) return;
        HandleClose();
        setAccount(signup.Firstname);
    }

    const OnValueChange = (e)=>{
        setLogin({...login , [e.target.name] : e.target.value});

    }

    const LoginUser =  async ()=>{
        let response = await AuthLogin(login);
        console.log(response);
        if(response.status === 200){
            HandleClose();
            setAccount(login.Firstname);
        }
        else{     
            setError(true);       
        }
    }


    const Visible = ()=>{
        if(toggleVisible ==='password') {
            setToggleVisible('string');
        }else{
            
            setToggleVisible('password');
        }
         
        
        
    }


    return (
        <Dialog open={probs.ok} onClose={HandleClose} PaperProps={{sx : {maxWidth : 'unset' , sx : {maxHeight : 'unset' }}}}>
        <Component>
             <Image>
                 <Typography variant='h5'>{acount.heading}</Typography>
                 <Typography style={{marginTop : 20 }}>{acount.subHeading}</Typography>

            </Image>
            {
                acount.view === 'login'?
                <Wrapper>
                <TextField variant='standard'  onChange={(e)=>{OnValueChange(e)}} name = 'Firstname' label=' Firstname'/>
                {error && <Error>please enter valid credentials</Error>}
                <TextField variant='standard'  onChange={(e)=>{OnValueChange(e)}}  type={toggleVisible} name = 'Password' label='password'/>
                <Icon onClick={Visible}style={{fontSize : 'medium'}}/>
                <Text>By contineuing you agree to Flipkart's terms of user and privacy policy</Text>
                <LoingButton onClick={()=>{LoginUser()}}>Login</LoingButton>
                <Typography style={{textAlign : 'center'}}>OR</Typography>
                <RequestOtp>Resquest OTP</RequestOtp>
                <CreateAccount onClick={handleToggle}>New to Flipkart? Create an acount</CreateAccount>
            </Wrapper>
            :
                
            <Wrapper>

                <TextField variant='standard' onChange={(e) => onInputChange(e)} type ='email' name ='Email' label='Email' />
                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='Firstname' label='Firstname' />
                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='Lastname' label='Lastname' />
                <TextField variant='standard' onChange={(e) => onInputChange(e)} type="password" name='Password' label='Password'/>
                <TextField variant='standard' onChange={(e) => onInputChange(e)} type="number" name='Phone' label='Phone' />
                <LoingButton onClick={UserSignup}>Continue</LoingButton>
                
            </Wrapper>
            
            }
            

        </Component>
          </Dialog>

    )
}

export default LoginDialog;