import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import {  Modal } from "react-bootstrap"

const AddQuestion = ({ dispatch, id }) => {
  const navigate = useNavigate();

  const [firstOption, setFirstOption]=useState("")
  const [secondOption, setSecondOption]=useState("")
  const [showFirstOptionError, setFirstOptionError] = useState(false);
  const [showSecondOptionError, setSecondOptionError] = useState(false);
  const [showOKMessage, setOKMessage] = useState(false);
  const handleCloseFirstOption = () => setFirstOptionError(false);
  const handleShowFirstOption = () => setFirstOptionError(true);  
  const handleCloseSecondOption = () => setSecondOptionError(false);
  const handleShowSecondOption = () => setSecondOptionError(true);  
  const handleCloseOKMessage = () => {
    setOKMessage(false)
    if (!id) {
      navigate("/");
    }
  };
  const handleShowOKMessage = () => setOKMessage(true);  


  const handleFirstOption = (e) => {        
    setFirstOption( e.target.value);
    };

  const handleSecondOption = (e) => {        
    setSecondOption( e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!firstOption || !secondOption ){
      if(!firstOption ){
        handleShowFirstOption()
      }
      if(!secondOption ){
        handleShowSecondOption()
      }
      return;
    }

    
    handleShowOKMessage()


    dispatch(handleAddQuestion(firstOption,secondOption));

    setFirstOption("");
    setSecondOption("");

  };


  return (
    <div className='d-flex justify-content-center'>
      
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <h2>Would You Rather</h2>
        <h6>Create Your Own Poll</h6>
            <form onSubmit={handleSubmit}>
                <div className="form-group text-left">
                <label htmlFor="first-option">First Option</label>
                <input type="text" 
                    className="form-control" 
                    id="first-option"             
                    placeholder="Enter First Option" 
                    value={firstOption}
                    onChange={handleFirstOption}
                />
                </div>
                <div className="form-group text-left">
                <label htmlFor="second-option">Second Option</label>
                <input type="text" 
                    className="form-control" 
                    id="second-option" 
                    placeholder="Enter Second Option"
                    value={secondOption}
                    onChange={handleSecondOption} 
                />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    data-testid="submit-button"
                >Submit</button>
            </form>
        </div>

        <Modal  data-testid="first-option-error-header" show={showFirstOptionError} onHide={handleCloseFirstOption}>

          <Modal.Header closeButton>
            <Modal.Title>Please Enter First Option...</Modal.Title>
          </Modal.Header>

        </Modal>

        <Modal  data-testid="second-option-error-header" show={showSecondOptionError} onHide={handleCloseSecondOption}>

          <Modal.Header closeButton>
            <Modal.Title>Please Enter Second Option...</Modal.Title>
          </Modal.Header>

      </Modal>

      <Modal  data-testid="ok-message-header" show={showOKMessage} onHide={handleCloseOKMessage}>

        <Modal.Header closeButton>
          <Modal.Title>Poll Created...</Modal.Title>
        </Modal.Header>

      </Modal>      
    </div>
  );
};

export default connect()(AddQuestion);
