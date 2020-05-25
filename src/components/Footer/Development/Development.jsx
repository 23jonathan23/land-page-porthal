import React from 'react'

import './Development.css'

export default props => {
  const { Icon, textDev, textCop, url } = props

  return (
    <>
      <div className='col-md-12 col-lg-4 development-text-center'>
        <p className='development-p-small'>
          DESENVOLVIDO POR{' '}
          <a className='icon-heart-hover' href={url}>
            <Icon className='icon-heart-footer' size='15' /> {textDev}
          </a>
        </p>
      </div>
      <div className='col-md-12 col-lg-3 development-text-center'>
        <p className='development-p-small'>{textCop}</p>
      </div>
    </>
  )
}
