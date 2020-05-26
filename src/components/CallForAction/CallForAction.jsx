import React from 'react'
import { useHistory } from 'react-router-dom'

import './CallForAction.css'

export default props => {
  const { text, textBold, refContact, textButton } = props

  const history = useHistory()

  //responsavél por mover o sroll da pagina até o elemento de referência
  const scrollToRef = refElement => {
    if (props.goBackHome) {
      window.scroll(0, 0)
      history.push('/')
    } else {
      refElement.current && window.scrollTo(0, refElement.current.offsetTop)
    }
  }

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
            <a
              href='javascript:;'
              onClick={() => scrollToRef(refContact ? refContact : null)}
              className='btn-call-action btn-white'
            >
              {textButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
