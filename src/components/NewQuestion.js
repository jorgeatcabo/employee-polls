import {connect} from 'react-redux'

const NewQuestion=(props)=>{

    console.log(props.doneQuestions)
    return(
        <div>
            New Question
        </div>
    )

}

const mapStateToProps=({authedUser,users,questions},{id})=>{
    const question =questions[id];

    const doneQuestions = Object.values(questions)
       .filter((question) => (!(question.optionOne.votes.includes(authedUser)) && !(question.optionTwo.votes.includes(authedUser))))
       

    return{
        authedUser,
        question,
        doneQuestions
    }
}

export default connect(mapStateToProps)(NewQuestion);