import React from 'react'
import { IoIosClose } from 'react-icons/io'

import './Message.css'

export default props => {
  const { classButton, message, closeMessage } = props

  return (
    <div className='message-form'>
      <div className={`alert alert-${classButton ? classButton : 'default'}`}>
        <button
          onClick={() => closeMessage(false)}
          type='button'
          className='close-message'
        >
          <IoIosClose />
        </button>
        <strong>{message}</strong>
      </div>
    </div>
  )
}
