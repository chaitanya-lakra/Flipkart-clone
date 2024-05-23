import { Typography , Box } from "@mui/material";
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Profile = ({account , setAccount}) =>{
    const [open , setOpen] = useState(false);

    const handleClick = (event)=>{
        setOpen(event.currentTarget);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const Logout  = () =>{
        setAccount('');
    }


    return(
        <>
        <Box onClick={handleClick}>
            <Typography style={{margin : '2px 20px 0px -100px' , cursor : 'pointer'}}>{account}</Typography>
        </Box>
        <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >

        <MenuItem onClick={()=>{handleClose(); Logout();}}>Logout</MenuItem>
      </Menu>
        </>
    );
};

export default Profile;