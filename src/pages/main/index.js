import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Creators as UserAction } from '../../store/ducks/users';

// Components
import Map from '../../components/Map';
import Sidebar from '../../components/Sidebar';

// Styles
import { Container } from './styles';

class Main extends Component {
  state = {
    userInput: '',
    latitude: 0,
    longitude: 0,
    showModal: false,
  };

  componentDidMount() {}

  notify = () => {
    const { message, isFinished, error } = this.props.users;
    if (isFinished) {
      const options = {
        position: toast.POSITION.TOP_RIGHT,
      };

      if (error) {
        toast.error(message, options);
      } else {
        toast.success(message, options);
      }
    }
  };

  handleMapClick = (e) => {
    this.props.resetUser();

    const [longitude, latitude] = e.lngLat;

    this.handleOpenModal();

    this.setState({ latitude, longitude });
  };

  handleOnChange = e => this.setState({ userInput: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      alias: this.state.userInput,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
    };

    this.props.addUserRequest(userData);

    this.setState({
      userInput: '',
      latitude: 0,
      longitude: 0,
      showModal: false,
    });
  };

  handleRemoveUser = (id) => {
    this.props.removeUserRequest(id);
  };

  handleCloseModal = () => this.setState({ showModal: false });

  handleOpenModal = () => this.setState({ showModal: true });

  render() {
    return (
      <Container>
        {this.notify()}
        <ToastContainer />
        <Map markers={this.props.users.data} handleMapClick={this.handleMapClick} />
        <Sidebar users={this.props.users.data} handleRemoveUser={this.handleRemoveUser} />
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              border: '1px solid #ccc',
              borderRadius: 0,
              padding: 0,
            },
          }}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div className="modal-header">
            <h3>Adicionar novo usuário</h3>
          </div>
          <div className="modal-content">
            <form onSubmit={this.handleSubmit}>
              <input
                value={this.state.userInput}
                onChange={this.handleOnChange}
                placeholder="Usuário do Github"
              />
              <div className="modal-footer">
                <button type="button" onClick={this.handleCloseModal}>
                  Cancelar
                </button>
                <button type="submit">Salvar</button>
              </div>
            </form>
          </div>
        </Modal>
      </Container>
    );
  }
}

Main.propTypes = {
  addUserRequest: PropTypes.func.isRequired,
  removeUserRequest: PropTypes.func.isRequired,
  resetUser: PropTypes.func.isRequired,
  users: PropTypes.shape({
    isFinished: PropTypes.bool,
    error: PropTypes.bool,
    message: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        avatar: PropTypes.string,
        url: PropTypes.string,
        login: PropTypes.string,
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }),
    ),
  }).isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
