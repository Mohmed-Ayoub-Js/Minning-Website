import React from 'react'
import ButtonApplicationFromGlobal from '../../Global/Button'
import { Link } from 'react-router-dom'
const MinningLink = () => {
  return (
    <div>
        <h1>
            Minning 
        </h1>
        <Link to='/register'>
        <ButtonApplicationFromGlobal title='Minning Now'/>
        </Link>
    </div>
  )
}

export default MinningLink