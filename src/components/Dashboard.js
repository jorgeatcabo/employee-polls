import {connect} from "react-redux";
import  {useState} from 'react'
import {  Form,Container,Row,Col } from "react-bootstrap"
import NewQuestion from "./NewQuestion";
import DoneQuestion from "./DoneQuestion";
import {Card} from 'react-bootstrap'
import { setAuthedUser } from "../actions/authedUser";

const Dashboard=(props)=>{
  
  const [userId, setUserId]=useState("")

  const handleChange=(event)=>{

  
    const { dispatch } = props;
    setUserId(event.target.value)

    dispatch(setAuthedUser(event.target.value));
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
            <Form.Select size="lg"  value={userId} onChange={handleChange}>
              {props.usersIds.map((id)=>(
                  <option key={id} value={id} >
                    {id}
                  </option>
                ))}
            </Form.Select>
            </Col>
          </Row>

         
          <Card bg='warning'>
                <Card.Header >New Questions</Card.Header>
                    <Card.Body>
                      <Row>
                          {props.newQuestions.map((x) => (
                            <Col key={x.id} sm={12} md={6} lg={4} xl={4}>
                              <NewQuestion id={x.id} author={x.author} timestamp={x.timestamp}/>                 
                            </Col>
                          ))}    
                      </Row>
                    </Card.Body>
            </Card>

            <Card bg='success'>
                <Card.Header>Done Questions</Card.Header>
                    <Card.Body>
                      <Row>
                          {props.doneQuestions.map((x) => (
                            <Col key={x.id} sm={12} md={6} lg={4} xl={4}>
                              <DoneQuestion id={x.id} author={x.author} timestamp={x.timestamp}/>                 
                            </Col>
                          ))}    
                      </Row>
                    </Card.Body>
            </Card>

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
  usersIds.unshift("LOGOUT")
  usersIds.unshift("")

  let doneQuestions=[]
  let newQuestions=[]

  if ((authedUser!=="LOGOUT") && (authedUser!=="")){
    doneQuestions = Object.values(questions)
      .filter((question) => question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))

      doneQuestions.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });


    newQuestions = Object.values(questions)
    .filter((question) => (!(question.optionOne.votes.includes(authedUser)) && !(question.optionTwo.votes.includes(authedUser))))

    newQuestions.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });

  }

  return{
      authedUser,
      question,
      usersIds,
      newQuestions,
      doneQuestions,
  }
}


export default connect(mapStateToProps)(Dashboard);