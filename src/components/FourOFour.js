import {Card, Container,Row,Col} from 'react-bootstrap'
import AskLogin from './AskLogin'

const FourOFour = (props) => {

  return (
    <div>
      <AskLogin/>
      <Container className='text-center'>

                  <Row className='text-center'>

                    <Col className='text-center'>
                    <Card>
                        <Card.Header></Card.Header>
                          <Card.Body >
                              <Card.Title></Card.Title>
                              <section style={{ 
                                backgroundImage: `url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)`,
                                height: '400px',
                                backgroundPosition: 'center' 
                              }}>                        
    
                        			  <h1>404</h1>
                                  <div>
                                    <h3>Look like you're lost</h3>
                                    <p>the page you are looking for not avaible!</p>
                                  </div>
                              </section>
                          </Card.Body>
                      </Card>
                    </Col>

                  </Row>

      </Container>
    </div>
  );
};

export default FourOFour;
