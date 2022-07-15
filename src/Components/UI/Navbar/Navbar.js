import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import cl from './Navbar.module.css'

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className={cl.navbar}>
      <div className={cl.navbar__linksBlock}>
        {isAuth ? (
          <>
            <Link className={cl.navbar__link} to='/posts'>
              Posts
            </Link>
            <Link className={cl.navbar__link} to='/about'>
              Another page
            </Link>
            <div className={cl.navbar__link} onClick={logout}>
              Logout
            </div>
          </>
        ) : (
          <Link className={cl.navbar__link} to='/'>
            Login
          </Link>
        )}
      </div>
    </div>
  )
}
