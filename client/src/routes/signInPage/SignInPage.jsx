import './signinPage.css'
import { SignIn } from '@clerk/react-router'

const SigninPage = () => {
  return (
    <div className='signinPage'>
      <SignIn signUpUrl='/sign-up' forceRedirectUrl='/dashboard'/>
    </div>
  )
}

export default SigninPage