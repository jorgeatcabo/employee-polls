import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import newQuestions from "./newQuestions";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  authedUser,
  users,
  questions,
  newQuestions,
  loadingBar: loadingBarReducer,
});
