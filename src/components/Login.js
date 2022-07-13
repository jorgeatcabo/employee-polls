import React, {useState} from 'react'
import {connect} from "react-redux";
import {  Form, Container,Row,Col } from "react-bootstrap"
import { setAuthedUser } from "../actions/authedUser";


const Login = (props) => {

  const [userId, setUserId]=useState("")

  const handleChange=(event)=>{

  
    const { dispatch } = props;
    setUserId(event.target.value)

    dispatch(setAuthedUser(event.target.value));
  }

  return (

    <Container className='text-center'>

      <Row>
        <Col>
            <h4>Select an User or LOGOUT</h4>
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

      </Container>
      
  )
}

const mapStateToProps=({authedUser,users,questions})=>{
  const usersIds=Object.keys(users);
  usersIds.unshift("LOGOUT")
  usersIds.unshift("")


  return{
      authedUser,
      usersIds,
  }
}


export default connect(mapStateToProps)(Login);