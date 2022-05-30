import React from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css';


const Register = () => {
    return (
    <div className='register-component'>  
    <div>
        <h1>Register:</h1>
        <form onSubmit="">

          <input type="text" name='' id='' placeholder='email'/>
          <br/>
          <input type="password" name="" id="" placeholder='password'/>
          <br/>
          <input type="password" name="" id="" placeholder='re type new password'/>
          <br/>
          <input type="submit" value="submit" />

          </form> 
          <br/>
          <p>already have an account? <NavLink to="/login">login</NavLink></p>
          <p>--------------------------------------------</p>
          <button className='btn-regular'>google sign in</button>
    </div>
    </div>
    );
};

export default Register;