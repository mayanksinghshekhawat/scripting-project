import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <div><Link to="/">HOME</Link>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
    </div>
  )
}

export default Header