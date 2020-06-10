import React, { Component } from 'react';
import ReactModal from 'react-modal';

import Container from './Container';
import Image from './Image';
import styles from 'styled-components';

const customStyles = {
  content: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: '0',
  },
};

const PopUpWrapper = styles.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ImageWrapper = styles.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const PopUpContentWrapper = styles.div`
width: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Title = styles.h3`
  color: #3c4954;
  font-family: 'Acumin Pro';
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const SubTitle = styles.p`
color: #3c4954;
font-family: 'Roboto';
font-size: 14px;
font-weight: 300;
line-height: 20px;
letter-spacing: 0.1px;
text-align: center;
word-break: keep-all;
max-width: 338px;
padding-bottom: 30px;
padding-left: 20px;
padding-right: 20px;
`;

const PopUpButtonWrapper = styles.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ClosePopUpButton = styles.button`
margin: 10px 4px;
padding: 0;
background: #3c4954;
padding: 16px 115px;
border-radius: 12px;
font-family: 'Roboto';
color: white;
font-size: 12px;
font-weight: 100;
letter-spacing: 0.1px;
text-transform: uppercase;
text-align: center;
white-space: nowrap;
border: none;
`;

class PopUp extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  componentDidMount() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={customStyles}
        >
          <Container
            style={{
              justifyContent: 'flex-end',
              height: '100%',
            }}
            background={'../static/images/popupbackground.png'}
          >
            <PopUpWrapper>
              <ImageWrapper>
                <Image source="../static/images/popup-main.png" />
              </ImageWrapper>
              <PopUpContentWrapper>
                <Title>Covid-19</Title>
                <SubTitle>
                  Protect yourself and others around you by
                  <br /> knowing the facts and taking appropriate precautions.
                </SubTitle>
                <PopUpButtonWrapper>
                  <ClosePopUpButton onClick={this.handleCloseModal}>
                    Get started
                  </ClosePopUpButton>
                </PopUpButtonWrapper>
              </PopUpContentWrapper>
            </PopUpWrapper>
          </Container>
        </ReactModal>
      </>
    );
  }
}

export default PopUp;
