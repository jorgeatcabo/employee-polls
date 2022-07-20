import React from 'react'
import {connect} from 'react-redux'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AnswerPage from "./AnswerPage";
import QuestionPage from "./QuestionPage";
import FourOFour from "./FourOFour"

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const returnPage=(userVotedOptions)=>{
  if (userVotedOptions.userVotedOptionOne || userVotedOptions.userVotedOptionTwo)
  {
      return <AnswerPage/> 
  }
  else
  {
    return <QuestionPage/>
  }
}

const QuestionDetailsPage  = (props) => {

  return (    
    <div>
      {Object.entries(props.question).length === 0?<FourOFour/>:
        returnPage(props.userVotedOptions)
      }
    </div>
  )
}

const mapStateToProps = ({ authedUser, questions }, props) => {
  const id = props.router.params.id;
  let question =""
  let userVotedOptions={
    userVotedOptionOne:false,
    userVotedOptionTwo:false,
  }

  if (Object.entries(questions).length !== 0 && questions[id]){
    question =questions[id];
    userVotedOptions.userVotedOptionOne=(question.optionOne.votes.includes(authedUser))
    userVotedOptions.userVotedOptionTwo=(question.optionTwo.votes.includes(authedUser))
  }

  return{
      authedUser,
      question,
      userVotedOptions,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionDetailsPage));