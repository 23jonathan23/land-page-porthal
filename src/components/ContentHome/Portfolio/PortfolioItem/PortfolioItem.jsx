import React from 'react'
import { Link } from 'react-router-dom'

import './PortfolioItem.css'

export default props => {
  return (
    <div className='col-lg-3 col-md-6 col-sm-12 remove-padding'>
      <div className='portfolio-item'>
        <Link to='/publication'>
          <div className='portfolio-group'>
            <img
              alt='Publication'
              src='http://forbetterweb.com/html/pheromone/img/portfolio/7.jpg'
            />
            <div className='portfolio-overlay'>
              <div className='caption'>
                <h5>Bicicle</h5>
                <span>New bicicle and new price</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
