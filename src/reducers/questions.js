// Actions types import
import {
  FETCH_QUESTION,
  INCREMENT_TOTAL_COUNT,
  RELOCATE_FROM_PROPOSITION_TO_BOARD,
  RELOCATE_FROM_BOARD_TO_PROPOSITION
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
        charsInProposition: action.payload.transformedAnswer,
        charsOnBoard: []
      }
    case INCREMENT_TOTAL_COUNT:
      return { ...state, totalCount: state.totalCount + 1}
    case RELOCATE_FROM_PROPOSITION_TO_BOARD:
      const filteredCharsInProposition = state.charsInProposition.filter(
        item => item !== action.payload
      );
      return { ...state,
        charsOnBoard: [...state.charsOnBoard, action.payload],
        charsInProposition: filteredCharsInProposition
      }
    case RELOCATE_FROM_BOARD_TO_PROPOSITION:
      const filteredCharsOnBoard = state.charsOnBoard.filter(
        item => item !== action.payload
      );
      return { ...state,
        charsInProposition: [...state.charsInProposition, action.payload],
        charsOnBoard: filteredCharsOnBoard
      }
    default:
        return state;
  }
}
