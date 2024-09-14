import React from 'react'
import SignInSignUp from '../components/SignInSignUp'

function SignUp() {
    const singUpSubtext = 'Create an account for a faster checkout';
    const singUpSubtext2 = 'Or,sign up with your email';
    const singUpSubtext3 = 'Already have an account? ';
  return (
    <div>
        <SignInSignUp signup='Register Now' signUpbtn = 'Sign Up' singUpSubtext={singUpSubtext} singUpSubtext2={singUpSubtext2} singUpSubtext3= {singUpSubtext3} doSignIn='Sign In'/>
    </div>
  )
}

export default SignUp