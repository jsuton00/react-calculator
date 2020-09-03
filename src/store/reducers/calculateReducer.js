import * as actionTypes from '../actions/actionTypes';
import {
  digitsKeys,
  operatorsKeys,
  specialOperatorsKeys,
} from '../../utils/mapKeys';
/* import math from '../../utils/mathConfig'; */
import updateObject from '../../utils/reduxUtils';

const initialState = {
  keyValue: '',
  calcKeys: {
    numbers: digitsKeys,
    operators: operatorsKeys,
    specialKeys: specialOperatorsKeys,
  },
  expression: '',
  passedExpressions: '',
  total: '',
  calcError: false,
};

const setKeyValue = (state, action) => {
  let selectedKey = action.key;
  return updateObject(state, { keyValue: selectedKey });
};

/* const addNumbers = (state, action) => {
  const calcKey = state.keyValue;
  const numbersKeys = state.calcKeys.numbers;
  const addKey = state.calcKeys.operators;
  const calcExpression = state.expression;
}; */

const calcReducer = (state = initialState, action) => {
  switch (action.types) {
    case actionTypes.SET_CALC_KEY_VALUE:
      return setKeyValue(state, action);

    default:
      return state;
  }
};

export default calcReducer;
