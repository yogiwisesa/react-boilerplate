import * as types from './types';

const initialState = {
  sample: {
    status: '',
    data: {}
  }
};

export const ACTION_HANDLERS = {
  [types.SAMPLE_TYPES]: (state, action) => {
    return {
      ...state,
      data: action.payload
    }
  },
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
