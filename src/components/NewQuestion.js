import {connect} from 'react-redux'
import {Card, Button} from 'react-bootstrap'
import { formatDate } from "../utils/helpers";

const NewQuestion=(props)=>{

    return(
        <div>

            <Card>
                <Card.Header>{props.author}</Card.Header>
                    <Card.Body>
                        <Card.Title>{formatDate(props.timestamp)}</Card.Title>
                        <Button variant="primary">Show</Button>
                    </Card.Body>
            </Card>
            
        </div>
    )

}

// const mapStateToProps=({authedUser,users,questions},{id})=>{
//     const question =questions[id];

//     const newQuestions = Object.values(questions)
//        .filter((question) => (!(question.optionOne.votes.includes(authedUser)) && !(question.optionTwo.votes.includes(authedUser))))
       

//     return{
//         authedUser,
//         question,
//         newQuestions
//     }
// }

export default NewQuestion;