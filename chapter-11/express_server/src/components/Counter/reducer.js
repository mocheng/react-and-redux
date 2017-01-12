import {INCREMENT, DECREMENT} from './actionTypes.js';

export default (state = {}, action) => {
  const {counterCaption} = action;

  switch (action.type) {
    case INCREMENT:
      return {...state, [counterCaption]: state[counterCaption] + 1};
    case DECREMENT:
      return {...state, [counterCaption]: state[counterCaption] - 1};
    default:
      return state
  }
}
