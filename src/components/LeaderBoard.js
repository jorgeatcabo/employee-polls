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
                              {props.usersDataTotalsSort.map((data, key) => {
                                return (
                                  <tr key={key}>
                                    <td>
                                    <img
                                      src={data[1].avatarURL} 
                                      width="30" 
                                      height="30" 
                                      alt={data[1].name}
                                      />
                                      <h5>{data[1].name}</h5>
                                      <h6>{data[1].id}</h6>
                                    </td>
                                    <td>{data[1].answers}</td>
                                    <td>{data[1].questions}</td>
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

  let usersDataTotals=usersData.map((data)=>{
    const Obj = {};

    Obj['id'] = data.id;
    Obj['name'] = data.name;
    Obj['avatarURL'] = data.avatarURL;
    Obj['answers'] = Object.values(data.answers).length;
    Obj['questions'] = Object.values(data.questions).length;
    
    return Obj;
   })
   const usersDataTotalsSort=Object.entries(usersDataTotals).sort((a,b) => b[1].answers-a[1].answers)
   
    return {
      usersDataTotalsSort,
    };
 };

export default connect(mapStateToProps)(LeaderBoard);
