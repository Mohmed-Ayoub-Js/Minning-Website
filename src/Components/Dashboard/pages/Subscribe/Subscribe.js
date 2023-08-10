import React from 'react'
import MiniDrawer from '../../Drawer'
import './sub.css';
import MultiActionAreaCard from './MultiActionAreaCard';
const Subscribe = () => {
    const listItems = [
        'hello',
        'bro',
        'how are you',
        'can you helo me',
        'yes man',
      ];
    return (
    <div>
        <MiniDrawer />
        <center>
            <h1>
                subscription 
            </h1>
            <div className='flex-application'>
            <MultiActionAreaCard title='copper' des='Mining speed ranges from 200MHz to 300MHz' price='10$' listItems={listItems} color='#B87333'/>
            <MultiActionAreaCard title='silver' des='Mining speed ranges from 300MHz to 900MHz'  price='24$' />
            <MultiActionAreaCard title='hi' des='hi'  price='10'/>
            <MultiActionAreaCard title='hi' des='hi'  price='10'/>
             
            </div>
        </center>
    </div>
  )
}

export default Subscribe