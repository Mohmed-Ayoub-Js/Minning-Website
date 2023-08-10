import React from 'react'
import './contact.css'
import ButtonApplicationFromGlobal from '../../Global/Button'
const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-container'>
            <h1 style={{color:'white'}}>
            Do not hesitate to <span style={{color:'orange',fontSize:30}}>contact</span> us
            </h1>
            <h3 style={{color:'white'}}>
            Sign up to our weekly newsletter for tips and advice on crypto mining and the latest industry news!
            </h3>
            <div className='application-form'>
                <form>
                   <input type='email' placeholder='SubScribe' style={{padding:10,borderRadius:10}}/>
                   <ButtonApplicationFromGlobal title='Submit'/>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Contact