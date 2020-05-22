import React from 'react'

import './Input.css'

export default props => {
  const {
    label,
    id,
    type,
    placeholder,
    messageValidate,
    value,
    handleInputChange,
    validate,
    customMessage,
  } = props

  return (
    <div className='control-group'>
      <div className='form-group'>
        <label htmlFor={id} className='label-category'>
          {label}
        </label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className='form-control input-lg'
          value={value}
          onChange={e => handleInputChange(e.target.value)}
        />
        {validate && value === '' && !customMessage && (
          <span className='help-block text-danger'>{messageValidate}</span>
        )}
        {validate && customMessage && (
          <span className='help-block text-danger'>{messageValidate}</span>
        )}
      </div>
    </div>
  )
}
