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
      <Card>
      <Card.Img variant='top' src={props.avatarURL} width="130" height="130" alt={props.author} />

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
    </div>
  );
};

 const mapStateToProps = ({ authedUser, questions, users }, props) => {
   const id = props.router.params.id;
   let author=""
   let avatarURL=""
   let optionOne=""
   let optionTwo=""

   if (Object.entries(questions).length !== 0){
    author=questions[id].author
    avatarURL=users[author].avatarURL
    optionOne=questions[id].optionOne.text
    optionTwo=questions[id].optionTwo.text
   }
   
   
    return {
      id,
      author,
      avatarURL,
      optionOne,
      optionTwo,
      authedUser
    };
 };

export default withRouter(connect(mapStateToProps)(QuestionPage));
