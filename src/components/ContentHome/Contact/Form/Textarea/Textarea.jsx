import React from 'react'

export default props => {
  const {
    value,
    id,
    label,
    validate,
    rows,
    placeholder,
    handleTextareaChange,
  } = props
  return (
    <div className='control-group'>
      <div className='form-group'>
        <label htmlFor={id} className='sr-only control-label'>
          {label}
        </label>
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          className='form-control input-lg'
          value={value}
          onChange={e => handleTextareaChange(e.target.value)}
        ></textarea>
        {validate && value === '' && (
          <span className='help-block text-danger'>
            Preencha com sua mensagem
          </span>
        )}
      </div>
    </div>
  )
}
