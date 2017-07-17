// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import questionsReducer from './questions';


// Stage holding in combine reducers
const rootReducer = combineReducers({
  questions: questionsReducer
});

export default rootReducer;
