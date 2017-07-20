// Actions types import
import { FETCH_QUESTION } from '../constants/questions.js';

// Initial states for reducers
const INITIAL_STATE = {
  question: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_QUESTION:
      return { ...state, question: action.payload}
    default:
        return state;
  }
}
