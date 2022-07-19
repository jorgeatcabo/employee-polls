import { connect } from "react-redux";
import {Card,Container,Row,Col} from 'react-bootstrap'
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    var navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const AnswerPage = (props) => {
  
  return (
    <div>
      <Container className='text-center'>
        <h1>Poll by {props.author}</h1>
      <Card >
      <Card.Img variant='top' src={props.avatarURL} width="130" height="130" alt={props.author} />

          <Card.Header >Poll's Votes</Card.Header>
              <Card.Body>

                  <Row>

                    <Col>
                    <Card  bg={props.optionOneBg}>
                        <Card.Header>{props.optionOne}</Card.Header>
                          <Card.Body>
                              <Card.Title>{props.optionOneAnswered}/{props.numberOfUsers}</Card.Title>                              
                              Percent Voted: {props.optionOneAnswered/props.numberOfUsers} %
                          </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card bg={props.optionTwoBg}>
                        <Card.Header>{props.optionTwo}</Card.Header>
                          <Card.Body>
                            <Card.Title>{props.optionTwoAnswered}/{props.numberOfUsers}</Card.Title>                            
                            Percent Voted: {props.optionTwoAnswered/props.numberOfUsers} %
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
  let optionOneBg=""
  let optionTwoBg=""
  let author=""
  let avatarURL=""
  let optionOne=""
  let optionTwo=""
  let optionOneAnswered=""
  let optionTwoAnswered=""
  let numberOfUsers=0

  if (Object.entries(questions).length !== 0 && questions[id]){
   author=questions[id].author
   avatarURL=users[author].avatarURL
   optionOne=questions[id].optionOne.text
   optionTwo=questions[id].optionTwo.text
   optionOneAnswered=questions[id].optionOne.votes.length
   optionTwoAnswered=questions[id].optionTwo.votes.length
   numberOfUsers=Object.keys(users).length;
   const optionOneSelected=questions[id].optionOne.votes.includes(authedUser)
   const optionTwoSelected=questions[id].optionTwo.votes.includes(authedUser)
  
   if (optionOneSelected){
    optionOneBg="success"
   }
   
   if (optionTwoSelected){
    optionTwoBg="success"
   }
  }
    return {
      id,
      author,
      avatarURL,
      optionOne,
      optionTwo,
      authedUser,
      optionOneAnswered,
      optionTwoAnswered,
      numberOfUsers,
      optionOneBg,
      optionTwoBg,
    };
 };

export default withRouter(connect(mapStateToProps)(AnswerPage));
