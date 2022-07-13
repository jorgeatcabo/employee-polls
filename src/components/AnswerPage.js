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

const AnswerPage = (props) => {
  
  const navigate = useNavigate();

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

    navigate(`/`);
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

    navigate(`/`);
  };

  return (
    <div>
      <Container className='text-center'>
        <h1>Poll by {props.author}</h1>
      <Card bg='info'>
      <Card.Img variant='top' src={props.avatarURL} width="130" height="130" alt={props.author} />

          <Card.Header >Poll's Answers</Card.Header>
              <Card.Body>

                  <Row>

                    <Col>
                      <Card>
                        <Card.Header>{props.optionOne}</Card.Header>
                          <Card.Body>
                              <Card.Title>{props.optionOneAnswered}/{props.numberOfUsers}</Card.Title>                              
                              Pecent Voted: {props.optionOneAnswered/props.numberOfUsers} %
                          </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card>
                        <Card.Header>{props.optionTwo}</Card.Header>
                          <Card.Body>
                            <Card.Title>{props.optionTwoAnswered}/{props.numberOfUsers}</Card.Title>                            
                            Pecent Voted: {props.optionTwoAnswered/props.numberOfUsers} %
                        </Card.Body>
                      </Card>
                    </Col>

                  </Row>

              </Card.Body>
            </Card>
      </Container>
    </div>
  );
};

 const mapStateToProps = ({ authedUser, questions, users }, props) => {
   const id = props.router.params.id;
   const author=questions[id].author
   const avatarURL=users[author].avatarURL
   const optionOne=questions[id].optionOne.text
   const optionTwo=questions[id].optionTwo.text
   const optionOneAnswered=questions[id].optionOne.votes.length
   const optionTwoAnswered=questions[id].optionTwo.votes.length
   const numberOfUsers=Object.keys(users).length;

   
    return {
      id,
      author,
      avatarURL,
      optionOne,
      optionTwo,
      authedUser,
      optionOneAnswered,
      optionTwoAnswered,
      numberOfUsers
    };
 };

export default withRouter(connect(mapStateToProps)(AnswerPage));
