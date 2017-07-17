// Node modules import
import axios from 'axios';

// Actions types import
import { FETCH_QUESTION } from '../constants/questions.js';

// Receives a random question
export function fetchQuestion() {
  return function(dispatch) {
    return axios.get('http://jservice.io/api/random')
      .then(function(response) {
        console.log("hello from action");
        dispatch({
          type: FETCH_QUESTION,
          payload: "Hello world, this is payload"
        })
      })
  }
}
