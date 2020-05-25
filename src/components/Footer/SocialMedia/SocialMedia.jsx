import React from 'react'

import './SocialMedia.css'

export default props => {
  const { Icon, size, url } = props

  return (
    <li>
      <a href={url ? url : '/'}>
        <Icon className='icon-social-media' size={size ? size : '20'} />
      </a>
    </li>
  )
}
