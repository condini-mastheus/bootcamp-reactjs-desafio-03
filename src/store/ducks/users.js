/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
  REMOVE_REQUEST: 'users/REMOVE_REQUEST',
  REMOVE_SUCCESS: 'users/REMOVE_SUCCESS',
  REMOVE_FAILURE: 'users/REMOVE_FAILURE',
  RESET: 'users/RESET',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  isFinished: false,
  data: [],
  error: false,
  message: '',
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        isFinished: false,
        message: '',
        error: false,
      };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data],
        isFinished: true,
        message: action.payload.message,
        error: false,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        isFinished: true,
        error: true,
        message: action.payload.message,
      };
    case Types.REMOVE_REQUEST:
      return {
        ...state,
        isFinished: false,
        message: '',
        error: false,
      };
    case Types.REMOVE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        message: action.payload.message,
        isFinished: true,
        error: false,
      };
    case Types.REMOVE_FAILURE:
      return {
        ...state,
        error: true,
        isFinished: true,
        message: action.payload.message,
      };
    case Types.RESET:
      return {
        ...state,
        isFinished: false,
        error: false,
        message: '',
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addUserRequest: user => ({
    type: Types.ADD_REQUEST,
    payload: { user },
  }),

  addUserSuccess: (data, message) => ({
    type: Types.ADD_SUCCESS,
    payload: { data, message },
  }),

  addUserFailure: message => ({
    type: Types.ADD_FAILURE,
    payload: { message },
  }),

  removeUserRequest: id => ({
    type: Types.REMOVE_REQUEST,
    payload: { id },
  }),

  removeUserSuccess: (data, message) => ({
    type: Types.REMOVE_SUCCESS,
    payload: { data, message },
  }),

  removeUserFailure: message => ({
    type: Types.REMOVE_FAILURE,
    payload: { message },
  }),

  resetUser: () => ({
    type: Types.RESET,
    payload: {},
  }),
};
