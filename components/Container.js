import React, { Component } from 'react';
import styles from 'styled-components';

const ContainerWrapper = styles.div`
width: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
margin: 0 20px;
`;

const ContainerDiv = styles.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 0 20px;
  z-index: 400;
`;

const ContainerBackground = styles.div`
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  z-index: 100;
  }
`;

class Container extends Component {
  render() {
    return (
      <ContainerWrapper>
        <ContainerDiv>{this.props.children}</ContainerDiv>
        <ContainerBackground>
          <img src={this.props.background} />
        </ContainerBackground>
      </ContainerWrapper>
    );
  }
}

export default Container;
