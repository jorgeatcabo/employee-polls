import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const AddQuestion = ({ dispatch, id }) => {
  const navigate = useNavigate();

  const [firstOption, setFirstOption]=useState("")
  const [secondOption, setSecondOption]=useState("")

  const handleFirstOption = (e) => {        
    setFirstOption( e.target.value);
    };

    const handleSecondOption = (e) => {        
      setSecondOption( e.target.value);
    };


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(firstOption,secondOption));

    setFirstOption("");
    setSecondOption("");

    if (!id) {
      navigate("/");
    }
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
                    required
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
                    required
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >Submit</button>
            </form>
        </div>
    </div>
  );
};

export default connect()(AddQuestion);
