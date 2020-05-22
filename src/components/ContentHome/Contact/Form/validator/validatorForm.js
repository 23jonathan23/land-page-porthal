export const validatorForm = values => {
  const messages = {}
  const emailRegex = /\S+@\S+\.\S+/ //validar email
  const phoneRegex = /\d{10,11}/

  if (values) {
    if (values.email !== '') {
      if (!values.email.match(emailRegex)) {
        messages.email = 'E-mail informado é invalido!'
      }
    }
    if (values.phone !== '') {
      if (!values.phone.match(phoneRegex)) {
        messages.phone = 'Telefone informado é invalido!'
      }
    }

    if (values.name === '') {
      return Object.keys(messages).length === 0 ? false : messages
    }

    if (values.message === '') {
      return Object.keys(messages).length === 0 ? false : messages
    }

    return Object.keys(messages).length === 0 ? 'success' : messages
  }

  return false
}
