import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom"
import { Home } from '../components/Home'
import { Booking } from '../components/Booking'
import { Product } from '../components/Product'
import { Client } from '../components/Client'
import { ServiceJg } from '../components/ServiceJg'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'

export const MyRouter = () => {
  return (
    <BrowserRouter>
        <HeaderNav/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/booking" element={<Booking/>}/>
            <Route path="/client" element={<Client/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/serviceJg" element={<ServiceJg/>}/>
        </Routes>

        <hr/>
        <Footer/>
    </BrowserRouter>
  )
}
