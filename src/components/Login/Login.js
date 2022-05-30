import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../context/useAuth';
import './Login.css';

const Login = () => {
    
    const {handleGoogleSignIn} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/shop'
    const handleGoogleLogin = () => {
        handleGoogleSignIn()
        .then(result => {
            console.log(result.user);
            history.push(redirectUrl)
        })
        .catch(error => console.log(error.message))
    }
    
    return (
    <div className='login-component'>  
    <div>
    <h1>Login:</h1>
    <form>

          <input type="text" name='' id='' placeholder='email'/>
          <br/>
          <input type="password" name="" id="" placeholder='password'/>
          <br/>
          <input type="submit" value="submit" />

    </form> <br/>
     <p>New to ema john website? <NavLink to="/register">register now</NavLink></p>

     <button className='btn-regular' onClick={handleGoogleLogin}>google sign in</button>
    </div>
    </div>
    );
};

export default Login;