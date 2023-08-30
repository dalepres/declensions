
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



//MobileNav including selected screen name to state.
export const MobileNav = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
      setAnchorEl(null);
      alert(event.target.id)
    };
  
    return (
        <Stack alignItems="flex-start">
            <IconButton aria-label='Menu' size='large'
                id="nav-button"
                aria-controls={open ? 'mobile-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon sx={{ width: '60px', height: '60px' }} />
            </IconButton>
            <Menu
                id="mobile-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'nav-button',
                }}
            >
                <MenuItem dense id="home" onClick={handleClose}>Home Screen</MenuItem>
                <MenuItem dense id="config" onClick={handleClose}>Configuration</MenuItem>
                <MenuItem dense={true} id="exercise" onClick={handleClose}>Exercise</MenuItem>
                
            </Menu>
        </Stack>
    );
}