import React from 'react'
import { IoIosMap, IoIosMailUnread, IoIosPhonePortrait } from 'react-icons/io'

import './Contact.css'

import TypeContact from '../../ContentHome/Contact/TypeContact/TypeContact'

export default props => {
  return (
    <div className='col-md-12 col-lg-3 contact-footer'>
      <h3>Contato</h3>
      <TypeContact Icon={IoIosMap} description='Endereço completo' />
      <TypeContact Icon={IoIosMailUnread} description='email@email.com' />
      <TypeContact Icon={IoIosPhonePortrait} description='(00) 0000-0000' />
    </div>
  )
}
