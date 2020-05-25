import React from 'react'

import Portfolio from './Portfolio/Portfolio'
import About from './About/About'
import ServicesCompany from './ServicesCompany/ServicesCompany'
import Indicators from './Indicators/Indicators'
import Benefits from './Benefits/Benefits'
import Presentation from './Presentation/Presentation'
import Contact from './Contact/Contact'
import CallForAction from '../CallForAction/CallForAction'

export default props => {
  return (
    <>
      <Portfolio />
      <About />
      <ServicesCompany />
      <Indicators />
      <Benefits />
      <Presentation showVideo={props.showVideo} />
      <Contact />
      <CallForAction text='Frase de' textBold='Impacto' />
    </>
  )
}
