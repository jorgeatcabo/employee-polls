import {  saveQuestion,saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_NEW_QUESTIONS = "RECEIVE_NEW_QUESTIONS";
export const TOGGLE_QUESTION = "TOGGLE_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}



function addQuestionAnswer(question) {
  return {
    type: ADD_QUESTION_ANSWER,
    question,
  };
}

export function handleQuestionAnswer(info) {
  return (dispatch) => {

    dispatch(showLoading());

    const authedUser=info.authedUser
    const qid=info.qid
    const answer=info.answer

    return saveQuestionAnswer({      
      authedUser,
      qid,
      answer,
    })
      .then((question) => dispatch(addQuestionAnswer(question)))
      .then(() => dispatch(hideLoading()));
  };
}
