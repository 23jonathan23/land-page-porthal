import React from 'react'

import { IoIosClose } from 'react-icons/io'

import './Video.css'

export default props => {
  const { linkVideo } = props
  const configPlayer =
    '?autoplay=1&amp;byline=0&amp;portrait=0&amp;color=cccccc'

  return (
    <div className='swipebox-background-container'>
      <div className='swipebox-container'>
        <div className='swipebox-slider'>
          <div className='slide aling'>
            <div className='swipebox-video-container'>
              <div className='swipebox-video'>
                <iframe
                  title='presentation'
                  width='560'
                  height='315'
                  src={`${linkVideo}${configPlayer}`}
                  frameBorder='0'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <IoIosClose onClick={props.showVideo} className='swipebox-close' />
      </div>
    </div>
  )
}
