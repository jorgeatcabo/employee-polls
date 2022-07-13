import {connect} from 'react-redux'
import {Card, Button} from 'react-bootstrap'
import { formatDate } from "../utils/helpers";
import { useNavigate,Link } from "react-router-dom";

const DoneQuestion=(props)=>{

    const navigate = useNavigate();

    const toParent = (e, id) => {
        e.preventDefault();
    
        navigate(`/answers/${id}`);
      };
    

      const {
        id,
      } = props.question;


    return(
        <div>
            <Link to={`/answers/${id}`}>
                <Card>
                    <Card.Header>{props.author}</Card.Header>
                        <Card.Body>
                            <Card.Title>{formatDate(props.timestamp)}</Card.Title>
                            <Button variant="primary" onClick={(e) => toParent(e, id)}>Show</Button>
                        </Card.Body>
                </Card>
            </Link>
        </div>
    )

}

const mapStateToProps=({authedUser,users,questions},{id})=>{
    const question =questions[id];

       

    return{
        authedUser,
        question,
    }
 }

export default connect(mapStateToProps)(DoneQuestion);