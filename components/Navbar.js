import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from 'styled-components';

import { Button, Menu, MenuItem } from '@material-ui/core';

const NavbarWrapper = styles.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px auto;
  padding: 0;
  width: 100%;
`;

const NavbarTop = styles.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  margin: 0;

`;

const NavbarTopLeft = styles.div`
margin: 0;

`;

const NavbarTopRight = styles.div`
  margin: 0;
`;

const NavbarBottom = styles.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 20px 0 10px 0;
width: 100%;
padding: 0;
`;

const NavbarBottomLeft = styles.div`
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;

`;

const NavbarBottomRight = styles.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0;
padding: 0 20px;


`;

const Clock = styles.p`
  font-family: 'SF Pro';
  font-size: 0.8em;
  font-weight: bold;
`;

const Container = styles.div`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
      <Container>
        <NavbarTop>
          <NavbarTopLeft>
            <Clock>9:41</Clock>
          </NavbarTopLeft>
          <NavbarTopRight>
            <img src="/CellularConnection.svg" />

            <img src="/Wifi.svg" style={{ marginLeft: '4px' }} />

            <img src="/Battery.svg" style={{ marginLeft: '4px' }} />
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
              <img
                src="/menu.png"
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  margin: '0',
                  padding: '0',
                  width: 'auto',
                }}
              />
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
            <img src="/notification.png" />
          </NavbarBottomRight>
        </NavbarBottom>
      </Container>
    </NavbarWrapper>
  );
}
