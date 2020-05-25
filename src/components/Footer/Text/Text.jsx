import React from 'react'

import './Text.css'

export default props => {
  const { title, content } = props
  return (
    <div className='col-md-12 col-lg-4 text-footer'>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}
