import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import Navbar from './Components/UI/Navbar/Navbar'
import AppRouter from './Components/AppRouter'
import { AuthContext } from './context'

export default function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) setIsAuth(true)
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
