import React from 'react'

import './CallForAction.css'

export default props => {
  const { text, textBold } = props

  return (
    <section className='call-action bg-call-action'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-lg-8 call-action-align'>
            <h3 className='text-call-action-no-pad'>
              {text} <span className='bold'>{textBold}</span>{' '}
            </h3>
          </div>
          <div className='col-sm-12 col-lg-4 btn-align-center'>
            <a href='#contact' className='btn-call-action btn-white'>
              Solicite um Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
