import React from 'react'
import { signIn } from '../firebase'
import { split } from 'lodash';

const Login = ({ user }) => {

  return (
    <div className="login-container">
        <button className='sign-in-btn' onClick={() => signIn()}>Click to sign in with Google</button>
    </div>
  );
};

export default Login;
