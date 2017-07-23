// Node modules import
import axios from 'axios';

// Actions types import
import {
  FETCH_QUESTION,
  INCREMENT_TOTAL_COUNT,
  INCREMENT_CORRECT_COUNT,
  RELOCATE_FROM_PROPOSITION_TO_BOARD,
  RELOCATE_FROM_BOARD_TO_PROPOSITION,
  CHECK_ANSWER
 } from '../constants/questions.js';

// Functions import
import { stringToArray, shuffleArray } from '../helpers/functions.js'

// Receives a random question
export function fetchQuestion() {
  return function(dispatch) {
    return axios.get('http://jservice.io/api/random')
      .then(function(response) {
        console.log(response.data[0].answer)
        const arrayOfCharacters = stringToArray(response.data[0].answer);
        const shuffledArray = shuffleArray(arrayOfCharacters);
        const data = {
          id: response.data[0].id,
          category: response.data[0].category,
          question: response.data[0].question,
          answer: response.data[0].answer,
          value: response.data[0].value,
          transformedAnswer: shuffledArray
        }
        dispatch({
          type: FETCH_QUESTION,
          payload: data
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

// Increments the correct questions count
export function incrementCorrectCount() {
  return function(dispatch) {
    dispatch({
      type: INCREMENT_CORRECT_COUNT
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

// Checks if the answer provided by user is correct
export function checkAnswer(char) {
  return function(dispatch) {
    dispatch({
      type: CHECK_ANSWER,
      payload: char
    })
  }
}
