import React from 'react'
import { signOut } from '../firebase'

const SignOut = ({ user }) => {

  return (
    <div>
        <button className='signOut-btn' onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default SignOut;
