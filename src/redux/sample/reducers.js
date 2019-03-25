import * as types from './types';

const initialState = {
  sample: {
    status: '',
    data: {}
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAMPLE_TYPES:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
