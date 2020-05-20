import React from 'react'

import './Card.css'

export default props => {
  const { category, Icon, description } = props

  return (
    <div className='col-lg-6 col-sm-12 col-xl-3 card-category'>
      <Icon size='86' style={{ color: '#555', alignItems: 'center' }} />
      <h4>{category}</h4>
      <p>{description}</p>
    </div>
  )
}
