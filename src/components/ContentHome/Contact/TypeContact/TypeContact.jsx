import React from 'react'

import './TypeContact.css'

export default props => {
  const { Icon, description } = props
  return (
    <h5 className='type-contact'>
      <Icon className='icon-color' size='24' /> {description}
    </h5>
  )
}
