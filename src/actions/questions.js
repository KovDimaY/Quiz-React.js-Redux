// Node modules import
import axios from 'axios';

// Actions types import
import {
  FETCH_QUESTION,
  INCREMENT_TOTAL_COUNT,
  RELOCATE_FROM_PROPOSITION_TO_BOARD,
  RELOCATE_FROM_BOARD_TO_PROPOSITION
 } from '../constants/questions.js';

// Finctions import
import { stringToArray } from '../helpers/functions.js'

// Receives a random question
export function fetchQuestion() {
  return function(dispatch) {
    return axios.get('http://jservice.io/api/random')
      .then(function(response) {
        dispatch({
          type: FETCH_QUESTION,
          payload: {
            id: response.data[0].id,
            category: response.data[0].category,
            question: response.data[0].question,
            answer: response.data[0].answer,
            value: response.data[0].value,
            transformedAnswer: stringToArray(response.data[0].answer)
          }
        })
      })
  }
}

// Increments the total questions count
export function incrementTotalCount() {
  return function(dispatch) {
    dispatch({
      type: INCREMENT_TOTAL_COUNT
    })
  }
}

// Relocates character from  "charsInProposition" to "charsOnBoard"
export function relocateToBoard(char) {
  return function(dispatch) {
    dispatch({
      type: RELOCATE_FROM_PROPOSITION_TO_BOARD,
      payload: char
    })
  }
}

// Relocates character from  "charsOnBoard" to "charsInProposition"
export function relocateToProposition(char) {
  return function(dispatch) {
    dispatch({
      type: RELOCATE_FROM_BOARD_TO_PROPOSITION,
      payload: char
    })
  }
}
