import {connect} from "react-redux";
import {  Form,Container,Row,Col } from "react-bootstrap"

const Dashboard=(props)=>{
    
    return( 
        <div >
        
        <Container className='text-center'>
            <Row>
            <Col>
                <h4>Select User</h4>
            </Col>
            </Row>
        <Row>
          <Col>
          <Form.Select size="lg">
        {props.usersIds.map((id)=>(                
                <option key={id} value={id} >
                  {id}
                </option>
              ))
        }
        </Form.Select>

          </Col>
        </Row>
      </Container>

        </div>
    
    )
}

const mapStateToProps=({users})=>({
    usersIds:Object.keys(users)
}
)

export default connect(mapStateToProps)(Dashboard);