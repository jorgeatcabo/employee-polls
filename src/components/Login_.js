import React, {useState} from 'react'



const Login_ = () => {

    const [user, setUser]=useState("")
    const [password, setPassword]=useState("")

    const handleUser = (e) => {        
        setUser( e.target.value);
      };

      const handlePassword = (e) => {        
        setPassword( e.target.value);
      };


      const handleSubmitClick=(e)=>{
        e.preventDefault();
      }

  return (
    <div className='d-flex justify-content-center'>
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="user">User</label>
                <input type="text" 
                    className="form-control" 
                    id="user"             
                    placeholder="Enter User Name" 
                    value={user}
                    onChange={handleUser}
                />
                </div>
                <div className="form-group text-left">
                <label htmlFor="password">Password</label>
                <input type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword} 
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Submit</button>
            </form>
        {/* <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
            {state.successMessage}
        </div> */}
        </div>
    </div>
  )
}

export default Login_;
