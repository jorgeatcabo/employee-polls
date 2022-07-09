import {connect} from "react-redux";
import {  Form,Container,Row,Col } from "react-bootstrap"
import NewQuestion from "./NewQuestion";
import DoneQuestion from "./DoneQuestion";

const Dashboard=(props)=>{
    
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
                  <option key={id} value={id} >
                    {id}
                  </option>
                ))}
            </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col>
                <ul className="dashboard-list">
                {props.questionsIds.map((id) => (
                  <li key={id}>
                    <NewQuestion id={id}/>
                  </li>
                ))}
                </ul>
            </Col>
          </Row>

          <Row>
            <Col>
                <ul className="dashboard-list">
                {props.questionsIds.map((id) => (
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

const mapStateToProps=({users,questions})=>({
    usersIds:Object.keys(users),
    questionsIds:Object.keys(questions),
}
)

export default connect(mapStateToProps)(Dashboard);