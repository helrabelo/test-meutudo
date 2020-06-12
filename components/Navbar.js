import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from 'styled-components';

import { Button, Menu, MenuItem } from '@material-ui/core';

const NavbarWrapper = styles.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px auto;
  width: 100%;
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
display: flex;
justify-content: space-between;
align-items: center;
`;

const Clock = styles.p`
  font-family: 'SF Pro';
  font-size: 0.8em;
  font-weight: bold;
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
          <img src="../static/images/CellularConnection.svg" />

          <img src="../static/images/Wifi.svg" style={{ marginLeft: '4px' }} />

          <img
            src="../static/images/Battery.svg"
            style={{ marginLeft: '4px' }}
          />
        </NavbarTopRight>
      </NavbarTop>
      <NavbarBottom>
        <NavbarBottomLeft>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              margin: '0',
              padding: '0',
              width: 'auto',
            }}
          >
            <img src="../static/images/menu.png" />
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
