// Actions types import
import { FETCH_QUESTION, INCREMENT_TOTAL_COUNT } from '../constants/questions.js';

// Initial states for reducers
const INITIAL_STATE = {
  question: null,
  totalCount: 0,
  arrayInProposition: []
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_QUESTION:
      return { ...state,
        question: action.payload,
        arrayInProposition: action.payload.transformedAnswer
      }
    case INCREMENT_TOTAL_COUNT:
    console.log(state.totalCount)
      return { ...state, totalCount: state.totalCount + 1}
    default:
        return state;
  }
}
