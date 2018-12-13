import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as UserAction } from '../../store/ducks/users';

import { Container } from './styles';

class Sidebar extends Component {
  handleRemoveUser = (id) => {
    this.props.removeUserRequest(id);
  };

  render() {
    const { users } = this.props;
    return (
      <Container>
        {users.length === 0 && (
          <div className="empty-user">
            <p>Nenhum usuário adicionado :(</p>
          </div>
        )}
        {users.length > 0 && (
          <ul className="user-list">
            {users.map(user => (
              <li key={user.id}>
                <div>
                  <img alt={user.name} src={user.avatar} />
                </div>
                <div className="info">
                  <strong>{user.name}</strong>
                  <a href={user.url}>
@
                    {user.alias}
                  </a>
                </div>
                <div className="action">
                  <button type="button" onClick={() => this.handleRemoveUser(user.id)}>
                    <i className="fa fa-times" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Container>
    );
  }
}

Sidebar.propTypes = {
  removeUserRequest: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      avatar: PropTypes.string,
      url: PropTypes.string,
      login: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  users: state.users.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
