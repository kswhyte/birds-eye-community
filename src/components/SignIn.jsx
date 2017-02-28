import React from 'react'
import { signIn } from '../firebase'
import { split } from 'lodash'
// import owlBackground from '../styles/images/owl-unsplash.jpg'
import googleIcon from '../styles/icons/google-icon.svg'
import '../styles/css/SignIn.css'



const SignIn = ({ user }) => {


  return (
    <div className="sign-in-container">
      <img src={googleIcon} className="google-icon" alt="google-icon" />
      <button className='sign-in-btn' onClick={() => signIn()}>Click to sign in with Google</button>
    </div>
  )
}

export default SignIn
