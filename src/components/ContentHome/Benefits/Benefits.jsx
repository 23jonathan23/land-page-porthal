import React from 'react'
import {
  IoIosNutrition,
  IoIosSunny,
  IoIosGlasses,
  IoIosInfinite,
} from 'react-icons/io'

import './Benefits.css'

import Card from './../Card/Card'

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
pulvinar vestibulum. Donec eleifend, sem sed dictum`

export default props => {
  return (
    <section id='benefits' className='benefits'>
      <div className='container text-center-benefits'>
        <div className='row'>
          <div className='col-lg-8 col-lg-offset-2 about-benefits'>
            <h3>Vantages em ser nosso cliente</h3>
          </div>
        </div>
        <div className='row'>
          <Card
            category='VANTAGEM 1'
            Icon={IoIosNutrition}
            description={description}
          />
          <Card
            category='VANTAGEM 2'
            Icon={IoIosSunny}
            description={description}
          />
          <Card
            category='VANTAGEM 3'
            Icon={IoIosGlasses}
            description={description}
          />
          <Card
            category='VANTAGEM 4'
            Icon={IoIosInfinite}
            description={description}
          />
        </div>
      </div>
    </section>
  )
}
