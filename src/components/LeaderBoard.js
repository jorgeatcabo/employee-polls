import { connect } from "react-redux";
import {Card, Table,Container,Row,Col} from 'react-bootstrap'

const LeaderBoard = (props) => {

  return (
    <div>
      <Container className='text-center'>
      <Card >
          <Card.Header >Leader Board</Card.Header>
              <Card.Body>

                  <Row>

                    <Col>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Users</th>
                            <th>Answered</th>
                            <th>Created</th>
                          </tr>
                        </thead>
                        <tbody>
                              {props.usersDataTotals.map((data, key) => {
                                return (
                                  <tr key={key}>
                                    <td>
                                    <img
                                      src={data.avatarURL} 
                                      width="30" 
                                      height="30" 
                                      alt={data.name}
                                      />
                                      <h5>{data.name}</h5>
                                      <h6>{data.id}</h6>
                                    </td>
                                    <td>{data.answers}</td>
                                    <td>{data.questions}</td>
                                  </tr>
                                )
                              })}
                        </tbody>
                      </Table>
                    </Col>

                  </Row>

              </Card.Body>
            </Card>
      </Container>
    </div>
  );
};

 const mapStateToProps = ({  users }) => {
  const usersData=Object.values(users)
  const usersDataTotals=usersData.map((data)=>{
    const Obj = {};

    Obj['id'] = data.id;
    Obj['name'] = data.name;
    Obj['avatarURL'] = data.avatarURL;
    Obj['answers'] = Object.values(data.answers).length;
    Obj['questions'] = Object.values(data.questions).length;
      
    return Obj;
   })

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
      usersDataTotals,
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

export default connect(mapStateToProps)(LeaderBoard);
