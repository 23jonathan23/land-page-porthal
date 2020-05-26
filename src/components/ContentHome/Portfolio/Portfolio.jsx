import React from 'react'

import './Portfolio.css'

import PortfolioItem from './PortfolioItem/PortfolioItem'

//Lista de postagens teste
import { publication } from './list'

export default props => {
  const renderPortfolioItem = p => {
    return p.map(i => <PortfolioItem key={i.id} publication={i} />)
  }

  const { refPortfolio } = props //Referência para a tag section Portfolio

  return (
    <section ref={refPortfolio} id='portfolio'>
      <div className='container text-center'>
        <div className='row row-margin-portfolio'>
          <div className='text-portfolio col-sm-10 col-sm-offset-1 col-md-12'>
            <h3>Alguns dos nossos trabalhos</h3>
          </div>
        </div>
      </div>
      <div className='container-publication'>
        <div className='row portfolio-items'>
          {renderPortfolioItem(publication)}
        </div>
      </div>
    </section>
  )
}
