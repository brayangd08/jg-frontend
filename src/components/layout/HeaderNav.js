import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/images/Logo.png"

export const HeaderNav = () => {
  return (
    <header class="header">
      <div>
        <img src={logo} class="logo"></img>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/booking">Reservas</NavLink>
          </li>
          <li>
            <NavLink to="/product">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/serviceJg">Servicios</NavLink>
          </li>
          <li>
            <NavLink to="/client">Clientes</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
