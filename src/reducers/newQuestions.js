import { RECEIVE_NEW_QUESTIONS, ADD_QUESTION } from "../actions/questions";

export default function newQuestions(state = {}, action) {
  switch (action.type) {
      case RECEIVE_NEW_QUESTIONS:
        return {
          ...state,
          ...action.questions.filter((question) => question.optionOne.votes.includes(state.authedUser) || question.optionTwo.votes.includes(state.authedUser))
        };
  
    // case TOGGLE_QUESTION:
    //   return {
    //     ...state,
    //     [action.id]: {
    //       ...state[action.id],
    //       likes:
    //         action.hasLiked === true
    //           ? state[action.id].likes.filter(
    //               (uid) => uid !== action.authedUser
    //             )
    //           : state[action.id].likes.concat([action.authedUser]),
    //     },
    //   };
    // case ADD_QUESTION:
    //   const { question } = action;

    //   let replyingTo = {};
    //   if (question.replyingTo !== null) {
    //     replyingTo = {
    //       [question.replyingTo]: {
    //         ...state[question.replyingTo],
    //         replies: state[question.replyingTo].replies.concat([question.id]),
    //       },
    //     };
    //   }

    //   return {
    //     ...state,
    //     [action.question.id]: action.question,
    //     ...replyingTo,
    //   };
    default:
      return state;
  }
}
