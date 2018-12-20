import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as UserAction } from '../../store/ducks/users';

import { Container } from './styles';

class CustomModal extends Component {
  state = {
    userInput: '',
  };

  handleOnChange = e => this.setState({ userInput: e.target.value });

  handleCloseModal = () => this.props.closeModal();

  handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      alias: this.state.userInput,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
    };

    this.props.addUserRequest(userData);
    this.handleCloseModal();
    this.setState({ userInput: '' });
  };

  render() {
    const { isModalOpen } = this.props;

    return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={this.handleCloseModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            width: 320,
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: 5,
            padding: 0,
          },
        }}
        contentLabel="Adicionar novo usuário"
        ariaHideApp={false}
      >
        <Container>
          <div className="modal-header">
            <h3>Adicionar novo usuário</h3>
          </div>
          <div className="modal-content">
            <form onSubmit={this.handleSubmit}>
              <input
                value={this.state.userInput}
                onChange={this.handleOnChange}
                placeholder="Usuário do Github"
                autoFocus="on"
              />
              <div className="modal-footer">
                <button type="button" onClick={this.handleCloseModal}>
                  Cancelar
                </button>
                <button type="submit">Salvar</button>
              </div>
            </form>
          </div>
        </Container>
      </Modal>
    );
  }
}

CustomModal.propTypes = {
  addUserRequest: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  isModalOpen: state.users.isModalOpen,
  latitude: state.users.latitude,
  longitude: state.users.longitude,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomModal);
