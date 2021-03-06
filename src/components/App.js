import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import AddQuestion from "./AddQuestion";
import QuestionDetailsPage from "./QuestionDetailsPage";
import LoadingBar from "react-redux-loading-bar";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import AskLogin from "./AskLogin";
import LeaderBoard from "./LeaderBoard";
import FourOFour from "./FourOFour";


const App = (props) => {
  
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);


  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Header />
        <Login/>
          <Routes>
            
            <Route path="/" exact element={(props.authedUser !=="LOGOUT" && props.authedUser !=="") ? (<Dashboard />):<AskLogin/>} />
            
            <Route path="/questions/:id" element={(props.authedUser !=="LOGOUT" && props.authedUser !=="") ? (<QuestionDetailsPage/>):<FourOFour/>} />
            
            <Route path="/add" element={(props.authedUser !=="LOGOUT" && props.authedUser !=="") ? (<AddQuestion />):<AskLogin/>} />
            
            <Route path="/leaderboard" element={(props.authedUser !=="LOGOUT" && props.authedUser !=="") ? (<LeaderBoard />):<AskLogin/>} />

            <Route path="*" element={<FourOFour/>} />
            
          </Routes>          
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => {
  
  return{
    loading: authedUser === null,
    authedUser
  }
  
};


export default connect(mapStateToProps)(App);
