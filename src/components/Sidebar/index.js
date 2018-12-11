import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Sidebar = ({ users, handleRemoveUser }) => (
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
              <button type="button" onClick={() => handleRemoveUser(user.id)}>
                <i className="fa fa-times" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    )}
  </Container>
);

Sidebar.propTypes = {
  handleRemoveUser: PropTypes.func.isRequired,
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

export default Sidebar;
