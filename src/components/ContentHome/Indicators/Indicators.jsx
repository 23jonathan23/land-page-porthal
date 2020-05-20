import React from 'react'

import './Indicators.css'

export default props => {
  return (
    <section className='section-small bg-img'>
      <div className='overlay'></div>
      <div className='container text-center-indicators'>
        <div className='row'>
          <div className='col-sm-3'>
            <span
              data-min='0'
              data-max='29'
              data-delay='5'
              data-increment='1'
              className='numscroller scrollzip roller-title-number-1 isShown'
              data-slno='1'
            >
              29
            </span>
            <h5 className='no-pad'>Themes released</h5>
          </div>
          <div className='col-sm-3'>
            <span
              data-min='0'
              data-max='2785'
              data-delay='5'
              data-increment='3'
              className='numscroller roller-title-number-2 scrollzip isShown'
              data-slno='2'
            >
              2785
            </span>
            <h5 className='no-pad'>Happy Customers</h5>
          </div>
          <div className='col-sm-3'>
            <span
              data-min='0'
              data-max='12'
              data-delay='5'
              data-increment='1'
              className='numscroller roller-title-number-3 scrollzip isShown'
              data-slno='3'
            >
              12
            </span>
            <h5 className='no-pad'>Winning awards</h5>
          </div>
          <div className='col-sm-3'>
            <span
              data-min='0'
              data-max='78'
              data-delay='5'
              data-increment='1'
              className='numscroller roller-title-number-4 scrollzip isShown'
              data-slno='4'
            >
              78
            </span>
            <h5 className='no-pad'>Completed project</h5>
          </div>
        </div>
      </div>
    </section>
  )
}
