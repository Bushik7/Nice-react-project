import React from 'react'
import cl from './Loader.module.css'

export default function Loader(props) {
  return (
    <div className={cl.loaderWrapper}>
      <div className={cl.loader}></div>
    </div>
  )
}
