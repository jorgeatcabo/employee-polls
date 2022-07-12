import { connect } from "react-redux";
import { handleQuestionAnswer } from "../actions/questions";
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
  
  const handleChooseOptionOne = (e) => {
    e.preventDefault();
    const { dispatch, id, authedUser } = props;

    dispatch(
      handleQuestionAnswer({
        authedUser,
        qid: id,
        answer:"optionOne",
      })
    );
  };

  const handleChooseOptionTwo = (e) => {
    e.preventDefault();
    const { dispatch, id, authedUser } = props;

    dispatch(
      handleQuestionAnswer({
        authedUser,
        qid: id,
        answer:"optionTwo",
      })
    );
  };

  return (
    <div>
      <Container className='text-center'>
        <h1>Poll by {props.author}</h1>
      <Card bg='info'>
          <Card.Header >Would You Rather</Card.Header>
              <Card.Body>

                  <Row>

                    <Col>
                      <Card>
                        <Card.Header>{props.optionOne}</Card.Header>
                          <Card.Body>
                              <Card.Title></Card.Title>
                              <Button variant="primary"  onClick={handleChooseOptionOne} >Choose</Button>
                          </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card>
                        <Card.Header>{props.optionTwo}</Card.Header>
                          <Card.Body>
                            <Card.Title></Card.Title>
                            <Button variant="primary" onClick={handleChooseOptionTwo} >Choose</Button>
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
   const author=questions[id].author
   const optionOne=questions[id].optionOne.text
   const optionTwo=questions[id].optionTwo.text
   
    return {
      id,
      author,
      optionOne,
      optionTwo,
      authedUser
    };
 };

export default withRouter(connect(mapStateToProps)(QuestionPage));
