import React from 'react'
import SignInSignUp from '../components/SignInSignUp'

function SignUp() {
    const singUpSubtext = 'Create an account for a faster checkout';
    const singUpSubtext2 = 'Or,sign up with your email';
  return (
    <div>
        <SignInSignUp signup='Register Now' singUpSubtext={singUpSubtext} singUpSubtext2={singUpSubtext2}/>
    </div>
  )
}

export default SignUp