import React from 'react'
import { IoIosMap, IoIosMailUnread, IoIosPhonePortrait } from 'react-icons/io'

import './Contact.css'

import Description from './Description/Description'
import TypeContact from './TypeContact/TypeContact'
import Form from './Form/Form'

export default props => {
  const { refContact } = props //Referência para a section contact

  return (
    <section ref={refContact} className='contact'>
      <div className='container'>
        <div className='row text-center-contact'>
          <div className='col-sm-12 col-md-12 col-lg-5 col-lg-offset-2 margin-information'>
            <Description
              title='Nosso contato'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
              pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis pulvinar.'
            />
            <TypeContact Icon={IoIosMap} description='Endereço completo' />
            <TypeContact Icon={IoIosMailUnread} description='email@email.com' />
            <TypeContact
              Icon={IoIosPhonePortrait}
              description='(00) 0000-0000'
            />
          </div>
          <Form title='Solicite seu orçamento!' />
        </div>
      </div>
    </section>
  )
}
