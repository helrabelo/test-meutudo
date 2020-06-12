import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from 'styled-components';

import { Button, Menu, MenuItem } from '@material-ui/core';

const NavbarWrapper = styles.div`
  border: 3px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavbarTop = styles.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarTopLeft = styles.div`
`;

const NavbarTopRight = styles.div`
`;

const NavbarBottom = styles.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const NavbarBottomLeft = styles.div`
`;

const NavbarBottomRight = styles.div`
`;

const Clock = styles.p`
  font-family: 'SF Pro';
  font-size: 0.8em;
  4
`;

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavbarWrapper>
      <NavbarTop>
        <NavbarTopLeft>
          <Clock>9:41</Clock>
        </NavbarTopLeft>
        <NavbarTopRight>
          <img src="../static/images/Wifi.svg" />
          <img
            src="../static/images/CellularConnection.svg"
            style={{ marginLeft: '2px' }}
          />
          <img
            src="../static/images/Battery.svg"
            style={{ marginLeft: '2px' }}
          />
        </NavbarTopRight>
      </NavbarTop>
      <NavbarBottom>
        <NavbarBottomLeft>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Open Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </NavbarBottomLeft>
        <NavbarBottomRight>
          <img src="../static/images/notification.png" />
        </NavbarBottomRight>
      </NavbarBottom>
    </NavbarWrapper>
  );
}
