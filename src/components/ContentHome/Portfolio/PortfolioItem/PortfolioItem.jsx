import React from 'react'
import { Link } from 'react-router-dom'

import './PortfolioItem.css'

export default props => {
  const { publication } = props

  return (
    <div className='col-lg-3 col-md-6 col-sm-12 remove-padding'>
      <div className='portfolio-item'>
        <Link to={`/publication/${publication.id ? publication.id : ''}`}>
          <div className='portfolio-group'>
            <img
              alt={publication.title ? publication.title : ''}
              src={publication.imageLink ? publication.imageLink : ''}
            />
            <div className='portfolio-overlay'>
              <div className='caption'>
                <h5>{publication.title ? publication.title : ''}</h5>
                <span>{publication.subTitle ? publication.subTitle : ''}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
