// Actions types import
import {
  FETCH_QUESTION,
  DELETE_CURRENT_QUESTION,
  INCREMENT_TOTAL_COUNT,
  INCREMENT_CORRECT_COUNT,
  RELOCATE_FROM_PROPOSITION_TO_BOARD,
  RELOCATE_FROM_BOARD_TO_PROPOSITION,
  CHECK_ANSWER,
  CHANGE_SCORE,
  SHOW_ERROR,
  HIDE_ERROR
 } from '../constants/questions.js';

// Functions import
import { arrayToString } from '../helpers/functions'

// Initial states for reducers
const INITIAL_STATE = {
  question: null,
  totalCount: 0,
  correctCount: 0,
  score: 0,
  charsInProposition: [],
  charsOnBoard: [],
  checkAnswerCondition: null,
  showError: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_QUESTION:
      return { ...state,
        question: action.payload,
        charsInProposition: action.payload.transformedAnswer,
        charsOnBoard: [],
        checkAnswerCondition: null
      }

    case SHOW_ERROR:
      return { ...state, showError: true}

    case HIDE_ERROR:
      return { ...state, showError: false}

    case DELETE_CURRENT_QUESTION:
      return { ...state, question: null}

    case INCREMENT_TOTAL_COUNT:
      return { ...state, totalCount: state.totalCount + 1}

    case INCREMENT_CORRECT_COUNT:
      return { ...state, correctCount: state.correctCount + 1}

    case CHANGE_SCORE:
      let newScore = state.score;
      if (state.score + action.payload < 0) {
        newScore = 0;
      } else {
        newScore += action.payload;
      }
      return { ...state, score: newScore}

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
        charsOnBoard: filteredCharsOnBoard,
        checkAnswerCondition: null
      }

    case CHECK_ANSWER:
      let result = null;
      const userAnswer = arrayToString(state.charsOnBoard);
      const correctAnswer = state.question.answer;
      if (userAnswer.length === correctAnswer.length) {
        result = userAnswer === correctAnswer;
      }
      return { ...state,
        checkAnswerCondition: result
      }

    default:
        return state;
  }
}
