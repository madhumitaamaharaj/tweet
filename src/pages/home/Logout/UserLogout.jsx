import * as React from 'react';
import './UserLogout.css'

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { useNavigate } from 'react-router-dom';


export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate()


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleLogout() {
    localStorage.setItem('isUserLoggedIn', JSON.stringify(false))
    localStorage.removeItem("login-success")    
    navigate('/login')
  }

//   console.log(atomUserDetails);

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', marginTop: "40px", marginBottom: '20px' }}>
        
        <Tooltip className='userLogout_tooltip' >
          <IconButton
            onClick={handleClick}

            sx={{display: 'flex', alignItems: 'center'}}
          >
            <Avatar  sx={{ width: 32, height: 32, backgroundColor: '#1da1f2' }}>
              { 
                JSON.parse(localStorage.getItem('currentUser')) ? 
                JSON.parse(localStorage.getItem('currentUser')).userFullName.slice(0,1) : '' 
              }
            </Avatar>
            <Typography sx={{ minWidth: 100, color: 'black' }}>
              { 
                JSON.parse(localStorage.getItem('currentUser')) ?
                JSON.parse(localStorage.getItem('currentUser')).userFullName : '' 
              }
              </Typography>
            <Typography><MoreHorizIcon/></Typography>
          </IconButton>
          
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        
        <Divider />
        <MenuItem onClick={()=>{
          alert('clicked on add another account')
        }}>
          Add another account
        </MenuItem>
        
        <MenuItem onClick={handleLogout}>
          Logout
        </MenuItem>
        
      </Menu>
    </React.Fragment>
  );
}