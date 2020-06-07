import React, { Component } from 'react';
import ReactModal from 'react-modal';

import styles from 'styled-components';

const customStyles = {
  content: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100%',
    heigth: '100%',
    background: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
    border: '0',
    borderRadius: '0',
    padding: '0',
  },
};

const closeModal = styles.div`
  display: flex;
  align-items: center;
  background-color: green;
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
      <div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={customStyles}
        >
          <closeModal>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </closeModal>
        </ReactModal>
      </div>
    );
  }
}

export default PopUp;
