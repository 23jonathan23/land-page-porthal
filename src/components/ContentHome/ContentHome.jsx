import React from 'react'

import Portfolio from './Portfolio/Portfolio'
import About from './About/About'
import ServicesCompany from './ServicesCompany/ServicesCompany'
import Indicators from './Indicators/Indicators'
import Benefits from './Benefits/Benefits'

export default props => {
  return (
    <>
      <Portfolio />
      <About />
      <ServicesCompany />
      <Indicators />
      <Benefits />
    </>
  )
}
