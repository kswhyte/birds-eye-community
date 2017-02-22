import React from 'react'
import { signOut } from '../firebase'
import { split } from 'lodash';

const SignOut = ({ user }) => {

  return (
    <div>
        <button className='signOut-btn' onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default SignOut;
