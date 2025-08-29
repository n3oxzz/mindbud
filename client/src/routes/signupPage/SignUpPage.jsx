import './signUpPage.css'
import { SignUp } from '@clerk/react-router'

const SignUpPage = () => {
  return (
    <div className='signUpPage'>
      <SignUp signInUrl='/sign-in'/>
    </div>
  )
}

export default SignUpPage