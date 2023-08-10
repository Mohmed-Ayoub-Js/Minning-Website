import React from 'react'
import MiniDrawer from '../../Drawer'
import BackgroundApp from './BackgroundApp'
import PhotoProfile from './PhotoProfile'
import UserName from './UserName'
import NestedList from './NestedList'
import Order from './Order'

const Account = () => {
  return (
    <div>
        <MiniDrawer />
        <center>
            <div>
            <BackgroundApp style={{marginTop:100}}/>    
            <PhotoProfile /> 
            <UserName />
            <div className='settings-element-account'>
            <NestedList />
            <Order />
            </div>
            </div>
        </center>
    </div>
  )
}

export default Account