import {connect} from "react-redux";
import  {useState} from 'react'
import {  Form,Container,Row,Col } from "react-bootstrap"
import NewQuestion from "./NewQuestion";
import DoneQuestion from "./DoneQuestion";

const Dashboard=(props)=>{
  
  const [userId, setUserId]=useState("")

  const handleChange=(event)=>{

    setUserId(event.target.value)

    //dispatch(setAuthedUser(userId));
  }

    return( 
        <div >
        
        <Container className='text-center'>

          <Row>
            <Col>
                <h4>Select an User</h4>
            </Col>
          </Row>

          <Row>
            <Col>
            <Form.Select size="lg">
              {props.usersIds.map((id)=>(                
                  <option key={id} value={id} onChange={handleChange} >
                    {id}
                  </option>
                ))}
            </Form.Select>
            </Col>
          </Row>

         
          <h3>New Questions</h3>
            <Row>
            {props.newQuestions.map((x) => (
              <Col key={x.id} sm={12} md={6} lg={4} xl={4}>
                 <NewQuestion id={x.id} author={x.author} timestamp={x.timestamp}/>                 
              </Col>
          ))}    
          </Row>

          <Row>
            <Col>
            <h3>Done Questions</h3>
                <ul>
                {props.doneQuestions.map((id) => (
                  <li key={id}>
                    <DoneQuestion id={id}/>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>

      </Container>

        </div>
    
    )
}

// const mapStateToProps=({users,questions})=>({
//     usersIds:Object.keys(users),
//     questionsIds:Object.keys(questions),
// }
// )

const mapStateToProps=({authedUser,users,questions},{id})=>{
  const question =questions[id];
  const usersIds=Object.keys(users);

  const doneQuestions = Object.values(questions)
     .filter((question) => question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))

  const newQuestions = Object.values(questions)
  .filter((question) => (!(question.optionOne.votes.includes(authedUser)) && !(question.optionTwo.votes.includes(authedUser))))


  return{
      authedUser,
      question,
      usersIds,
      newQuestions,
      doneQuestions,
  }
}


export default connect(mapStateToProps)(Dashboard);