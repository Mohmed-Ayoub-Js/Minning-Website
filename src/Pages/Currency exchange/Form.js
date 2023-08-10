import React from 'react'
import './CE.css';
import BasicTabs from './Tab';
const FormApplication = () => {
  return (
    <div className='form-header'>
        <div className='form-container'>
            <div className='background-orange'>
                <h1>
                Exchange your coins with us
                </h1>
            </div>
            <form className='form-CE'>
            <BasicTabs />
            </form>
        </div>
    </div>
  )
}

export default FormApplication;
