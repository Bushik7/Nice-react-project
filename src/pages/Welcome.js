import React, { useContext } from 'react'
import MyButton from '../Components/UI/Button/MyButton'
import MyInput from '../Components/UI/Input/MyInput'
import { AuthContext } from '../context'

export default function Welcome() {
  // eslint-disable-next-line no-unused-vars
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const login = (e) => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h1 className='heading'>Welcome to the Teal side</h1>
      <form onSubmit={login}>
        <MyInput type='text' placeholder='Enter ur login'></MyInput>
        <MyInput type='password' placeholder='Enter ur pswd'></MyInput>
        <MyButton>Login</MyButton>
      </form>
    </div>
  )
}
