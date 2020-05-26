import React, { useState, useEffect } from 'react'

import HeaderPublication from '../../components/HeaderPublication/HeaderPublication'
import ContentPublication from '../../components/ContentPublication/ContentPublication'
import CallForAction from '../../components/CallForAction/CallForAction'
import Footer from '../../components/Footer/Footer'

//Lista de postagens teste
import { publication } from '../../components/ContentHome/Portfolio/list'

export default props => {
  const [id] = useState(parseInt(props.match.params.id))
  const [portfolioItem, setPortfolioItem] = useState({})

  useEffect(() => {
    const filterItem = i => i.id === id
    const item = publication.filter(filterItem)
    setPortfolioItem(item[0])
  }, [id])

  return (
    <>
      <HeaderPublication pageName={portfolioItem.title} />
      <ContentPublication portfolioItem={portfolioItem} />
      <CallForAction text='Frase de' textBold='Impacto' />
      <Footer />
    </>
  )
}
