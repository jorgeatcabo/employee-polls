import { connect } from "react-redux";
import {Card, Button,Container,Row,Col} from 'react-bootstrap'
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const QuestionPage = (props) => {

  return (
    <div>
      <Container className='text-center'>
      <Card bg='info'>
          <Card.Header >Would You Rather</Card.Header>
              <Card.Body>

                  <Row>

                    <Col>
                      <Card>
                        <Card.Header>{props.questions.optionOne.text}</Card.Header>
                          <Card.Body>
                              <Card.Title></Card.Title>
                              <Button variant="primary" >Choose</Button>
                          </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card>
                        <Card.Header>{props.questions.optionTwo.text}</Card.Header>
                          <Card.Body>
                            <Card.Title></Card.Title>
                            <Button variant="primary" >Choose</Button>
                        </Card.Body>
                      </Card>
                    </Col>

                  </Row>

              </Card.Body>
            </Card>
      </Container>

      {/* <Tweet id={props.id} />
      <NewTweet id={props.id} />
      {props.replies.length !== 0 && <h3 className="center">Replies</h3>}
      <ul>
        {props.replies.map((replyId) => (
          <li key={replyId}>
            <Tweet id={replyId} />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

 const mapStateToProps = ({ authedUser, questions, users }, props) => {
   const id = props.router.params.id;
    return {
      id,
      questions: !questions[id]
      ? []
      : questions[id],
    };
 };

export default withRouter(connect(mapStateToProps)(QuestionPage));
