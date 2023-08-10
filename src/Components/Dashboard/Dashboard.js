import React from 'react'
import MiniDrawer from './Drawer'
import ActionAreaCard from './CardsInfo'

const DashboardApp = () => {
  return (
    <div>
      <MiniDrawer />
      <center>
        <div style={{marginRight:'-50px'}}>
        <ActionAreaCard />
        </div>
      </center>
    </div>
  )
}

export default DashboardApp;