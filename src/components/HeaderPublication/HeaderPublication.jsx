import React, { useState, useEffect } from 'react'

import './HeaderPublication.css'

export default props => {
  const [classHeaderPublication, setClassHeaderPublication] = useState('')

  function handleScroll() {
    if (document.documentElement.scrollTop < 10) {
      setClassHeaderPublication('')
    } else if (
      document.documentElement.scrollTop > 40 &&
      document.documentElement.scrollTop < 100
    ) {
      setClassHeaderPublication('headerPublicationOpacity1')
    } else if (
      document.documentElement.scrollTop > 100 &&
      document.documentElement.scrollTop < 200
    ) {
      setClassHeaderPublication('headerPublicationOpacity2')
    } else if (
      document.documentElement.scrollTop > 200 &&
      document.documentElement.scrollTop < 400
    ) {
      setClassHeaderPublication('headerPublicationOpacity3')
    } else if (document.documentElement.scrollTop > 400) {
      setClassHeaderPublication('headerPublicationOpacity4')
    }
  }

  useEffect(() => {
    // console.log(document.documentElement.scrollTop)
    window.onscroll = () => handleScroll()
  })

  const { pageName } = props

  return (
    <header
      className={`container-header-publication ${classHeaderPublication}`}
    >
      <div className='layer-bg'></div>
      <div className='intro-body-publication'>
        <h1>Portfolio</h1>
        <h4>Home / Portfolio / {pageName}</h4>
      </div>
    </header>
  )
}
