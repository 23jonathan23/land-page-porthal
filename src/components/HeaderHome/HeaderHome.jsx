import React, { useState, useEffect } from 'react'

import './HeaderHome.css'

export default props => {
  const [classHeader, setClassHeader] = useState('')

  function handleScroll() {
    if (document.documentElement.scrollTop < 10) {
      setClassHeader('')
    } else if (
      document.documentElement.scrollTop > 40 &&
      document.documentElement.scrollTop < 100
    ) {
      setClassHeader('headerOpacity1')
    } else if (
      document.documentElement.scrollTop > 100 &&
      document.documentElement.scrollTop < 200
    ) {
      setClassHeader('headerOpacity2')
    } else if (
      document.documentElement.scrollTop > 200 &&
      document.documentElement.scrollTop < 400
    ) {
      setClassHeader('headerOpacity3')
    } else if (document.documentElement.scrollTop > 400) {
      setClassHeader('headerOpacity4')
    }
  }

  useEffect(() => {
    // console.log(document.documentElement.scrollTop)
    window.onscroll = () => handleScroll()
  })

  return (
    <header className={`container-intro ${classHeader}`}>
      <div className='intro-body'>
        <div className='container title-margin'>
          <div className='row row-margin-intro'>
            <div className='content-intro col-md-5 col-sm-12'>
              <div className='title-intro'>
                <h1>Nome da Empresa</h1>
                <h5>Design · Inovação · Criatividade</h5>
              </div>
              <div className='scroll-btn'>
                <a href='#portfolio'>
                  <span className='mouse'>
                    <span className='weel'>
                      <span></span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
