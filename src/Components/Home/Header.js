import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import './header.css'
import ButtonApplicationFromGlobal from '../../Global/Button';
const Header = () => {
  return (
    <div className='header-header'>
        <div>
          <AdbIcon style={{fontSize:50}} />

        </div>
           <div className='application-text'>
            <h1>
            Mining our business
            </h1>
            <h3>
            Our job is to provide the best mining services
            </h3>
            <h2>
            Bitcoin, Litecoin, Dash
            </h2>

            <ButtonApplicationFromGlobal title='get Start'/>
           </div>
    </div>
  )
}

export default Header