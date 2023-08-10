import React from 'react'
import './main.css'
import ButtonApplicationFromGlobal from '../../Global/Button'
const Main = () => {
    const data = [
        {
            id:1,
            title:'Earn money now with modern mining tools',
            image:'https://www.nicehash.com/assets/754fe246dbb432e011c3.png',
            des:'Our mining tools are powerful, high quality and will give you enough profit'
        },
        {
            id:2,
            title:'Rapid mining',
            image:'https://www.nicehash.com/assets/754fe246dbb432e011c3.png',
            des:'Our services are not the fastest, but our competitors are not the best, but the priority is to provide a service that the user is comfortable with'
        }
    ]
  return (
    <div className='header-main'>
        <div className='header-container'>
            <div className='header-flex'>
                {data.map((item) => (
                    <div className='card' key={item.id}>
                        <div className='image'> <img src={item.image} alt='' /> </div>
                        <div className='title' style={{color:'orange'}}> <h1> {item.title} </h1> </div>
                        <div className='des'> <h3> {item.des} </h3> </div>
                        <div className='button'>
                            <ButtonApplicationFromGlobal title='Get Start'/>
                        </div>
                    </div>
                ))}
            </div>  
        </div>
    </div>
  )
}

export default Main