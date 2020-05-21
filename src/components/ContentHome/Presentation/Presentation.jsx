import React from 'react'
import { IoIosPlay } from 'react-icons/io'

import './Presentation.css'

export default props => {
  return (
    <section className='section-presentation bg-img-presentation text-center-presentation'>
      <div className='overlay-presentation'></div>
      <div className='container'>
        <div className='row aling-content-presentation'>
          <div className='col-lg-8 col-sm-12 col-sm-offset-2'>
            <div onClick={props.showVideo} className='icon-video'>
              <IoIosPlay className='icon' size='79' />
            </div>
            <h2>
              Assista nosso <span className='bold'>Vídeo</span>
            </h2>
            <p>
              A business has to be involving, it has to be fun, and it has to
              exercise your creative instincts. Start where you are. Use what
              you have. Do what you can.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
