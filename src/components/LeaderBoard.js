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

const LeaderBoard = (props) => {
  
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
      <Card bg='info'>
      <Card.Img variant='top' src={props.avatarURL} width="130" height="130" alt={props.author} />

          <Card.Header >Leader Board</Card.Header>
              <Card.Body>

                  <Row>

                    <Col>

                    </Col>


                  </Row>

              </Card.Body>
            </Card>
      </Container>
    </div>
  );
};

 const mapStateToProps = ({ authedUser, questions, users }) => {
  // const usersIds=Object.keys(users);
  //  const author=users[usersIds].author
  //  const avatarURL=users[author].avatarURL
  //  const optionOne=questions[id].optionOne.text
  //  const optionTwo=questions[id].optionTwo.text
  //  const optionOneAnswered=questions[id].optionOne.votes.length
  //  const optionTwoAnswered=questions[id].optionTwo.votes.length
  //  const numberOfUsers=Object.keys(users).length;
  //  const optionOneSelected=questions[id].optionOne.votes.includes(authedUser)
  //  const optionTwoSelected=questions[id].optionTwo.votes.includes(authedUser)

  //  console.log(optionOneSelected)
  //  console.log(optionTwoSelected)
   

  // let optionOneBg=""
  // let optionTwoBg=""

  //  if (optionOneSelected){
  //   optionOneBg="success"
  //  }
   
  //  if (optionTwoSelected){
  //   optionTwoBg="success"
  //  }

  //  console.log(optionOneBg)
  //  console.log(optionTwoBg)
    return {
      // id,
      // author,
      // avatarURL,
      // optionOne,
      // optionTwo,
      // authedUser,
      // optionOneAnswered,
      // optionTwoAnswered,
      // numberOfUsers,
      // optionOneBg,
      // optionTwoBg,
    };
 };

export default withRouter(connect(mapStateToProps)(LeaderBoard));
