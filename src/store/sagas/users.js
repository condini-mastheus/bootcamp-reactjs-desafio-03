import { call, put, select } from 'redux-saga/effects';

import api from '../../services/api';
import { Creators as UserAction } from '../ducks/users';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user.alias}`);

    const userData = {
      id: data.id,
      name: data.name,
      avatar: data.avatar_url,
      url: data.html_url,
      alias: data.login,
      latitude: action.payload.user.latitude,
      longitude: action.payload.user.longitude,
    };

    yield put(UserAction.addUserSuccess(userData));
  } catch (error) {
    yield put(UserAction.addUserFailure('Usuário não encontrado!'));
  }
}

export function* removeUser(action) {
  try {
    const { id } = action.payload;

    const users = yield select(state => state.users.data.filter(user => user.id !== id));

    yield put(UserAction.removeUserSuccess(users));
  } catch (error) {
    yield put(UserAction.removeUserFailure('Usuário não encontrado!'));
  }
}
