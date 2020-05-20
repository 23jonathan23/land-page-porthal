import React from 'react'

import './About.css'

import Indicator from './Indicator/Indicator'

export default props => {
  return (
    <section id='about' className='about'>
      <div className='container container-about'>
        <div className='row'>
          <div className='col-lg-12 col-xl-6 col-xl-offset-1 about-text'>
            <h3>Sobre Nós</h3>
            <p className='description-text'>
              The collaborative process of web development requires close
              integration of technology and design - two disciplines that inform
              one another. We make hip and exciting web sites. Big and Small.
              Concept development, interface design, production management.
            </p>
            <h2 className='classic'>Nome da Empresa</h2>
          </div>
          <div className='col-lg-12 col-xl-5 col-xl-offset-1 indicators'>
            <h3>&nbsp;</h3>
            <Indicator value={0.93} text='Design' />
            <Indicator value={0.82} text='Programming' />
            <Indicator value={0.68} text='Photography' />
          </div>
        </div>
      </div>
    </section>
  )
}
