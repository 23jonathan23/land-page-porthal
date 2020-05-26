import React from 'react'
import { FaUser, FaCalendarAlt, FaDesktop } from 'react-icons/fa'

import './Article.css'

export default props => {
  const { content } = props
  return (
    <div className='col-sm-12 col-lg-5 article-publication'>
      <h3>{content.title}</h3>
      <p>{content.content}</p>
      <hr />
      <h5>
        <FaUser /> Cliente:
        <a href={content.clientUrl}> {content.client}</a>
      </h5>
      <h5>
        <FaCalendarAlt /> Data: {content.date}
      </h5>
      <h5>
        <FaDesktop /> Serviço: {content.service}
      </h5>
    </div>
  )
}
