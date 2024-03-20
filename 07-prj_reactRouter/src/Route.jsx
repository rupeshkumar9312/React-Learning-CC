import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Route() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet> //it will keep header and footer same for all routes
    <Footer></Footer>
    </>
  )
}

export default Route