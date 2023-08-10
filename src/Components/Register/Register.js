import React from 'react'
import NavBarFromMU from '../../Global/NavBar'
import Title from './Title'
import FooterApplication from '../Home/Footer'
import FormApplication from './Form'
import './register.css';
const Register = () => {
  return (
    <div>
      <NavBarFromMU />
      <div style={{marginTop:100}}>
      <Title />
      <div className='form-div-container'>
      <FormApplication />
      </div>
      </div>
      <FooterApplication/>
    </div>
  )
}

export default Register