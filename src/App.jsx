import './App.css'
import SignIn from './components/components-with-formik-validation/SignIn'
import WithFormikTags from './components/components-with-formik-validation/WithFormikTags'
// import SignInSignUpTab from './components/SignInSignUpTab'
import AppointmentForm from './components/components-with-formik-validation/AppointmentForm'
// import { UltimateSignupPage } from './components/UltimateSignupPage'
function App() {

  return (
    <>
    {/* <AppointmentForm/> */}
    {/* <UltimateSignupPage/>/ */}
    {/* <SignInSignUpTab/> */}
    <SignIn/>
    <WithFormikTags/>
    
    <AppointmentForm/>

    </>
  )
}

export default App
