import React from 'react'
import CustomInput from '../components/CustomInput'

const Setpassword = () => {
  return (
    <div className='py-5' style={{ background: "#ffd333", minHeight:"100vh" }}>
    <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-lg-4 col-md-6 d-flex-align-items-center justify-content-center'>
    <div className="my-5 bg-white rounded-3 mx-auto p-3">
      <h3 className='text-center'>Reset Password</h3>
      <p className='text-center'>Please Enter your Registered email to get reset mail.</p>
      <form action="">
      <CustomInput type="password" label="New Password" id="pass" />
      <CustomInput type="password" label="Confirm Password" id="confirmpass" />
      <button className='border-0 px-3 py-2 text-white fw-solid w-100' style={{ background: "#ffd333" }} type='submit' >Reset Password</button>
      </form>
    </div>
    </div>
    </div>
    </div>
  </div>
  )
}

export default Setpassword;