import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { connect } from 'react-redux';

class Toast extends Component {
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

  render() {
    return (
      <Fragment>
        {this.notify()}
        <ToastContainer />
      </Fragment>
    );
  }
}

Toast.propTypes = {
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

const mapDispatchToProps = _dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toast);
