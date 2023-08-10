import React from 'react'
import FormApplicationApp from './FormLogin'
import NavBarFromMU from '../../Global/NavBar'
import FooterApplication from '../Home/Footer'
import './login.css';

const Login = () => {
  return (
    <div >
      <NavBarFromMU />
      <div className='father'>
        <h1>
          Login !!
        </h1>
      <FormApplicationApp />
      <FooterApplication />        
      </div>

    </div>
  )
}

export default Login