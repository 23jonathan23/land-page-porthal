import React from 'react'

import './Portfolio.css'

import PortfolioItem from './PortfolioItem/PortfolioItem'

export default props => {
  const publication = [
    {
      id: 1,
      title: 'Biclicle',
      subTitle: 'New bicicle and new price',
      imageLink: 'http://forbetterweb.com/html/pheromone/img/portfolio/7.jpg',
      content: 'Uma bicicleta fantastica e sensacional',
    },
    {
      id: 2,
      title: 'Apple',
      subTitle: 'New Apple and new price',
      imageLink:
        'https://cdn.pixabay.com/photo/2020/05/17/19/43/apple-5183288_960_720.jpg',
      content: 'Uma Maça fantastica e sensacional',
    },
  ]

  const renderPortfolioItem = p => {
    return p.map(i => <PortfolioItem key={i.id} publication={i} />)
  }

  return (
    <section id='portfolio'>
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
