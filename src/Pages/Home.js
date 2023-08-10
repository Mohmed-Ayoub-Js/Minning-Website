import React from 'react'
import NavBarFromMU from '../Global/NavBar'
import Header from '../Components/Home/Header'
import Main from '../Components/Home/Main'
import Services from '../Components/Home/Services'
import Contact from '../Components/Home/Contact'
import FooterApplication from '../Components/Home/Footer'
const Home = () => {
  return (
    <div>
        <NavBarFromMU />
        <Header />
        <Main />
        <Services />
        <Contact />
        <FooterApplication />
    </div>
  )
}

export default Home