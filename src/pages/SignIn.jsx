import React from 'react'
import SignInSignUp from '../components/SignInSignUp'

function SignIn() {
    const singInSubtext = 'Login to your account for a faster checkout';
    const singInSubtext2 = 'Or, sign in with your email';
    const singInSubtext3 = "Don't have an account? ";

    const userNameField = true;
  return (
    <div>
        <SignInSignUp signin='Sign In Now' doSignUp = 'Sign Up' singUpSubtext={singInSubtext} singUpSubtext2={singInSubtext2} userNameField={userNameField} signInbtn = 'Sign In' singInSubtext3={singInSubtext3}/>
    </div>
  )
}

export default SignIn