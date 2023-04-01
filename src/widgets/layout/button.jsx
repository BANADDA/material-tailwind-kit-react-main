import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { KeyboardArrowDown } from "@mui/icons-material";
import { UsersIcon } from "@heroicons/react/24/solid";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="contained"
        endIcon={<KeyboardArrowDown />}
        sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "red" }, }}
        onClick={handleClick}
      >
        English
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>French</MenuItem>
        <MenuItem onClick={handleClose}>Spanish</MenuItem>
      </Menu>
    </div>
  );
}