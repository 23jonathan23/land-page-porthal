import React from 'react'

import './Indicators.css'

import Indicator from './Indicator/Indicator'

export default props => {
  return (
    <section className='section-small bg-img'>
      <div className='overlay'></div>
      <div className='container text-center-indicators'>
        <div className='row'>
          <Indicator value='29' text='Projetos Criados' />
          <Indicator value='2785' text='Clientes Felizes' />
          <Indicator value='12' text='Métrica 1' />
          <Indicator value='78' text='Métrica 2' />
        </div>
      </div>
    </section>
  )
}
