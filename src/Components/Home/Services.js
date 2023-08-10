import React from 'react'
import './Services.css';
import ButtonApplicationFromGlobal from '../../Global/Button';
const Services = () => {
    const image = 'https://www.nicehash.com/assets/288cb011f7fd2814c817.png';
    const image2 = 'https://www.nicehash.com/assets/c0ca4bdfafb33968159d.png';
  return (
    <div className='services-header'>
        <div className='services-container'>
            <div className='servcies-flex'>
                <div className='start'>
                    <div className='servcies-text'>
                        <h1 style={{color:'orange'}}>
                        Make your own mining
                        </h1>
                        <h3>
                        Try mining a block yourself!
                        </h3>
                        <h4>

                        No need for hardware, we provide the hashpower and our platform takes care of the mining. Simply buy a package, sit back, and wait for the block reward!
                        </h4>
                <ButtonApplicationFromGlobal title='Learn more' className='button'/>  
                <ButtonApplicationFromGlobal title='Buy' className='button'/>  

                    </div>
                <img src={image2} className='img-servcies2' alt=''/>
                </div>
            <div className='text-Services'>
                <h1>Buy<span style={{color:'orange' , fontSize:30}}> Bitcion</span></h1>     
                <h2>Most advanced hashpower marketplace!</h2>     
                <h4 style={{color:'gray'}}>
Rent out massive hashpower and forward it to worlds biggest mining pools. We support wide range of pools! ↗ </h4>     
                <ButtonApplicationFromGlobal title='Learn more' className='button'/>  
                <ButtonApplicationFromGlobal title='Buy now' className='button'/>     

            </div>                
            </div>
        </div>
    </div>
  )
}

export default Services