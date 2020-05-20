import React from 'react'
import {
  IoIosAnalytics,
  IoIosPie,
  IoIosStopwatch,
  IoIosApps,
} from 'react-icons/io'

import './ServicesCompany.css'

import Card from './../Card/Card'

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
pulvinar vestibulum. Donec eleifend, sem sed dictum`

export default props => {
  return (
    <section id='services' className='services'>
      <div className='container text-center-services'>
        <div className='row'>
          <div className='col-lg-8 col-lg-offset-2 about-services'>
            <h3>Nossos Serviços</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis pulvinar vestibulum. Donec eleifend, sem sed dictum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.s
            </p>
          </div>
        </div>
        <div className='row'>
          <Card
            category='PROJETO'
            Icon={IoIosAnalytics}
            description={description}
          />
          <Card category='DESIGN' Icon={IoIosPie} description={description} />
          <Card
            category='EXECUÇÃO'
            Icon={IoIosStopwatch}
            description={description}
          />
          <Card category='OUTRO' Icon={IoIosApps} description={description} />
        </div>
      </div>
    </section>
  )
}
