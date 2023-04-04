import React from 'react'
import CustomInput from '../components/CustomInput'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='py-5' style={{ background: "#ffd333", minHeight:"100vh" }}>
      <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-lg-4 col-md-6 d-flex-align-items-center justify-content-center'>
      <div className="my-5 bg-white rounded-3 mx-auto p-3">
        <h3 className='text-center'>Login</h3>
        <p className='text-center'>Login to your account to continue</p>
        <form action="">
        <CustomInput type="text" label="Email Address" id="email" />
        <CustomInput type="text" label="password" id="pass" />
        <div className='row justify-content-center'>
        <div className='col-6 mb-3'>
        <Link to="/set-password">ResetPassword</Link>
        </div>
        <div className='col-6 text-end mb-3'>
        <Link to="/forgot-password">ForgetPassword</Link>
        </div>
        </div>
        <Link to="/admin" className='border-0 px-3 py-2 text-white fw-solid text-center text-decoration-none w-100' style={{ background: "#ffd333" }} type='submit' >Login</Link>
        </form>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Login