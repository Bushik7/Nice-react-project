import React from 'react'
import cl from './MySelect.module.css'

export default function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <div className={cl.mySelect}>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option disabled value=''>
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
