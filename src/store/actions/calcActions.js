import * as actionTypes from './actionTypes';

export const setCalcKeyValue = (key) => ({
  type: actionTypes.SET_CALC_KEY_VALUE,
  key,
});

export const addNumbers = (sum) => ({
  type: actionTypes.ADD_NUMBERS,
  sum,
});

export const subtractNumbers = (difference) => ({
  type: actionTypes.SUBTRACT_NUMBERS,
  difference,
});

export const multiplyNumbers = (product) => ({
  type: actionTypes.MULTIPLY_NUMBERS,
  product,
});

export const divideNumbers = (quotient) => ({
  type: actionTypes.DIVIDE_NUMBERS,
  quotient,
});

export const applyPercent = (percentage) => ({
  type: actionTypes.APPLY_PERCENT,
  percentage,
});

export const switchOperators = (switched) => ({
  type: actionTypes.SWITCH_OPERATORS,
  switched,
});

export const calculate = (expression) => ({
  type: actionTypes.CALCULATE,
  expression,
});

export const evaluateError = () => ({
  type: actionTypes.EVALUATE_ERROR,
});

export const evaluateSuccess = (expression) => ({
  type: actionTypes.EVALUATE_SUCCESS,
  expression,
});

export const showTotal = (total) => ({
  type: actionTypes.SHOW_TOTAL_VALUE,
  total,
});

export const clearCalcExpression = (expression) => ({
  type: actionTypes.CLEAR_CALC_EXPRESSION,
  expression,
});

export const clearLastEntry = (key) => ({
  type: actionTypes.CLEAR_LAST_ENTRY,
  key,
});
