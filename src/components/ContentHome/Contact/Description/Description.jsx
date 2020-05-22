import React from 'react'

export default props => {
  const { title, description } = props
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <hr />
    </>
  )
}
