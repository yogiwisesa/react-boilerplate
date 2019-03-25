import * as types from './types';

export const SetSampleAction = data => {
  return dispatch => {
    dispatch(setSample(data));
  };
};

const setSample = (data) => {
  return {
    type: types.SAMPLE_TYPES,
    payload: data
  }
}