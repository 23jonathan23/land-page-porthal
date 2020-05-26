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
  //Referência para a tag section Portfolio e Contact
  const { refPortfolio, refContact } = props

  return (
    <>
      <Portfolio refPortfolio={refPortfolio} />
      <About />
      <ServicesCompany />
      <Indicators />
      <Benefits />
      <Presentation showVideo={props.showVideo} />
      <Contact refContact={refContact} />
      <CallForAction
        text='Frase de'
        textBold='Impacto'
        refContact={refContact}
        textButton='Solicite um Orçamento'
      />
    </>
  )
}
