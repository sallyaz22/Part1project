import React from 'react'
import Navbar from '../component/Navbar.jsx'
import Footer from '../component/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
    <Navbar/>
    <Outlet/>
   </>
  )
}
