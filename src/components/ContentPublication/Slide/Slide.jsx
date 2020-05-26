import React, { useState } from 'react'

import './Slide.css'

export default props => {
  const [itemActive, setItemActive] = useState(0)

  const { content } = props

  const renderSlideItem = () => {
    if (content.slideImages !== undefined)
      return content.slideImages.map((url, index) => (
        <div key={index} className='carousel-item active'>
          <img
            src={url}
            className={`d-block w-100 ${
              index === itemActive
                ? 'fade-in-image-slide'
                : 'fade-out-image-slide'
            }`}
            alt='teste1'
          />
        </div>
      ))
  }

  const handleNextAndPrevios = operation => {
    const result =
      itemActive + operation < 0
        ? 0
        : itemActive + operation > content.slideImages.length - 1
        ? content.slideImages.length - 1
        : itemActive + operation
    console.log(result)
    setItemActive(result)
  }

  return (
    <div
      id='carousel-publication'
      className='carousel slide'
      data-ride='carousel'
    >
      <div className='carousel-inner'>{renderSlideItem()}</div>
      <a
        className='carousel-control-prev'
        href='#carousel-publication'
        role='button'
        data-slide='prev'
        onClick={() => handleNextAndPrevios(-1)}
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='sr-only'>Anterior</span>
      </a>
      <a
        className='carousel-control-next'
        href='#carousel-publication'
        role='button'
        data-slide='next'
        onClick={() => handleNextAndPrevios(+1)}
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='sr-only'>Proximo</span>
      </a>
    </div>
  )
}
