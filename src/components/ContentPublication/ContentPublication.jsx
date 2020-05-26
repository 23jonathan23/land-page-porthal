import React from 'react'

import './ContentPublication.css'

import Slide from './Slide/Slide'
import Article from './Article/Article'

export default props => {
  const { portfolioItem } = props

  return (
    <section className='content-publication'>
      <div className='container'>
        <div className='row'>
          <Article content={portfolioItem} />
          <div className='col-sm-12 col-lg-7'>
            <Slide content={portfolioItem} />
            <hr />
            <div className='embed-responsive embed-responsive-16by9'>
              <iframe
                title={portfolioItem.title}
                src={portfolioItem.videoLink}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
