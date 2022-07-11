import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";

const App = (props) => {

  
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);


  return (
      <div>
         <LoadingBar />
        <Dashboard/>
      </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});


export default connect(mapStateToProps)(App);
