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
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false,
  errorMessage: '',
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data],
        loading: false,
        error: false,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    case Types.REMOVE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case Types.REMOVE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case Types.REMOVE_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
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

  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addUserFailure: errorMessage => ({
    type: Types.ADD_FAILURE,
    payload: { errorMessage },
  }),

  removeUserRequest: id => ({
    type: Types.REMOVE_REQUEST,
    payload: { id },
  }),

  removeUserSuccess: data => ({
    type: Types.REMOVE_SUCCESS,
    payload: { data },
  }),

  removeUserFailure: errorMessage => ({
    type: Types.REMOVE_FAILURE,
    payload: { errorMessage },
  }),
};
