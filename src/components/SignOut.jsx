import React from 'react'
import { signOut } from '../firebase'

const SignOut = ({ user }) => {
  return (
    <div className="sign-out-btn-container">
      <button className='sign-out-btn' onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}

export default SignOut
