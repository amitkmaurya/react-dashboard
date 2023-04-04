import React from 'react'
import CustomInput from '../components/CustomInput'

const Forgotpassword = () => {
  return (
    <div className='py-5' style={{ background: "#ffd333", minHeight:"100vh" }}>
      <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-lg-4 col-md-6 d-flex-align-items-center justify-content-center'>
      <div className="my-5 bg-white rounded-3 mx-auto p-3">
        <h3 className='text-center'>Forgot Password</h3>
        <p className='text-center'>Please Enter your Registered email to get reset mail.</p>
        <form action="">
        <CustomInput type="text" label="Email Address" id="email" />
        <button className='border-0 px-3 py-2 text-white fw-solid w-100' style={{ background: "#ffd333" }} type='submit' >Send Link</button>
        </form>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Forgotpassword;