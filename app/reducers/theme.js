import { CHANGE_PRIMARY_COLOR } from '../actions/theme';

const initialState = {
  primaryColor: '#4F6D7A',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: payload.color,
      };

    default:
      return state;
  }
};

export default reducer;
