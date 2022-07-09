import {connect} from "react-redux";

const Dashboard=(props)=>{
    console.log(props)
    return <div>Dashboard</div>
}

const mapStateToProps=({users})=>({
    usersIds:Object.keys(users)
}
)

export default connect(mapStateToProps)(Dashboard);