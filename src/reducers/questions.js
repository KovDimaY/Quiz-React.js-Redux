// Actions types import
import {
  FETCH_QUESTION,
  INCREMENT_TOTAL_COUNT,
  RELOCATE_FROM_PROPOSITION_TO_BOARD
 } from '../constants/questions.js';

// Initial states for reducers
const INITIAL_STATE = {
  question: null,
  totalCount: 0,
  charsInProposition: [],
  charsOnBoard: []
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_QUESTION:
      return { ...state,
        question: action.payload,
        charsInProposition: action.payload.transformedAnswer
      }
    case INCREMENT_TOTAL_COUNT:
      return { ...state, totalCount: state.totalCount + 1}
    case RELOCATE_FROM_PROPOSITION_TO_BOARD:
      const filteredArray = state.charsInProposition.filter(
        item => item !== action.payload
      );
      return { ...state,
        charsOnBoard: [...state.charsOnBoard, action.payload],
        charsInProposition: filteredArray
      }
    default:
        return state;
  }
}
