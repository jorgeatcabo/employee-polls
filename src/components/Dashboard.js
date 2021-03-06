import React, { useState } from 'react';
import {connect} from "react-redux";
import { Container,Row,Col } from "react-bootstrap"
import NewQuestion from "./NewQuestion";
import DoneQuestion from "./DoneQuestion";
import Switch from "react-switch";

import {Card} from 'react-bootstrap'

const Dashboard=(props)=>{
  const [checked,setChecked]=useState(false)

  const handleChange=(checked)=>{
      setChecked(checked)
  }


    return( 
        <div >        
        <Container className='text-center'>
            <label htmlFor="material-switch">
              <span>Unanswered Polls</span>
              <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
              />
              <span>Answered Polls</span>
            </label>
            {!checked?
                      <Card bg='warning'>
                      <Card.Header >Unanswered Questions</Card.Header>
                          <Card.Body>
                            <Row>
                                {props.newQuestions.map((x) => (
                                  <Col key={x.id} sm={12} md={6} lg={4} xl={4}>
                                    <NewQuestion id={x.id} author={x.author} timestamp={x.timestamp}/>                 
                                  </Col>
                                ))}    
                            </Row>
                          </Card.Body>
                  </Card>:
                  <Card bg='success'>
                <Card.Header>Answered Questions</Card.Header>
                    <Card.Body>
                      <Row>
                          {props.doneQuestions.map((x) => (
                            <Col key={x.id} sm={12} md={6} lg={4} xl={4}>
                              <DoneQuestion id={x.id} author={x.author} timestamp={x.timestamp}/>                 
                            </Col>
                          ))}    
                      </Row>
                    </Card.Body>
            </Card>}  




      </Container>

        </div>
    
    )
}

const mapStateToProps=({authedUser,questions},{id})=>{
  const question =questions[id];
  
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
      newQuestions,
      doneQuestions,
  }
}


export default connect(mapStateToProps)(Dashboard);