import React, { useState } from 'react'

import './Form.css'

import Input from './Input/Input'
import Message from './Message/Message'
import Textarea from './Textarea/Textarea'

import { validatorForm } from './validator/validatorForm'

export default props => {
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [clientMessage, setClientMessage] = useState('')
  const [validatedForm, setValidatedForm] = useState(null)
  const [showMessage, setShowMessage] = useState(false)
  const [messagesValidator, setMessagesValidator] = useState(false)

  const submitForm = e => {
    e.preventDefault()

    const dataClient = {
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
      message: clientMessage,
    }

    const validated = validatorForm(dataClient)

    if (validated === 'success') {
      setValidatedForm(false)
      setClientName('')
      setClientEmail('')
      setClientPhone('')
      setClientMessage('')
      setShowMessage(true)
    } else {
      if (validated) {
        setMessagesValidator(validated)
        setValidatedForm(true)
      } else {
        setMessagesValidator(false)
        setValidatedForm(true)
      }
    }
  }

  const { title } = props
  return (
    <div className='col-sm-12 col-md-12 col-lg-6 col-lg-offset-2'>
      <h2>{title}</h2>
      <form
        noValidate
        onSubmit={submitForm}
        id='contactForm'
        name='sentMessage'
      >
        <Input
          label='Nome'
          id='name'
          type='text'
          placeholder='Nome'
          messageValidate='Preencha com seu nome'
          value={clientName}
          handleInputChange={setClientName}
          validate={validatedForm}
        />
        <Input
          label='E-mail'
          id='email'
          type='email'
          placeholder='E-mail'
          messageValidate={
            messagesValidator.email
              ? messagesValidator.email
              : 'Preencha com seu e-mail'
          }
          customMessage={messagesValidator.email ? true : false}
          value={clientEmail}
          handleInputChange={setClientEmail}
          validate={validatedForm}
        />
        <Input
          label='Telefone'
          id='phone'
          type='tel'
          placeholder='Telefone'
          messageValidate={
            messagesValidator.phone
              ? messagesValidator.phone
              : 'Preencha com seu telefone'
          }
          customMessage={messagesValidator.phone ? true : false}
          value={clientPhone}
          handleInputChange={setClientPhone}
          validate={validatedForm}
        />
        <Textarea
          id='message'
          label='Mensagem'
          placeholder='Messagem'
          rows='2'
          value={clientMessage}
          validate={validatedForm}
          handleTextareaChange={setClientMessage}
        />
        {showMessage && (
          <Message
            classButton='success'
            message='Mensagem enviada, em breve retornaremos!'
            closeMessage={setShowMessage}
          />
        )}
        <button type='submit' className='button-transition button-custom'>
          Enviar
        </button>
      </form>
    </div>
  )
}
