import {connect} from 'react-redux'

const DoneQuestion=(props)=>{

    return(
        <div>
            Done Question
        </div>
    )

}

const mapStateToProps=({authedUser,users,questions},{id})=>{
    const question =questions[id];

    const doneQuestions = Object.values(questions)
       .filter((question) => question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
       

    return{
        authedUser,
        question,
        doneQuestions
    }
}

export default connect(mapStateToProps)(DoneQuestion);