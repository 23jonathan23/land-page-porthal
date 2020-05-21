import React from 'react'
import {
  CircularProgressbar as IndicatorNumber,
  buildStyles,
} from 'react-circular-progressbar'
import VisibilitySensor from 'react-visibility-sensor'
import { easeQuadInOut } from 'd3-ease'

import 'react-circular-progressbar/dist/styles.css'

import AnimatedProgressProvider from './../../About/Indicator/Animated/AnimatedProgressProvider'

import './Indicator.css'

export default props => {
  const { value, text } = props

  return (
    <div className='col-sm-12 col-md-3 indicator-container'>
      <VisibilitySensor>
        {({ isVisible }) => {
          const valueIndicator = isVisible ? value : 0
          return (
            <AnimatedProgressProvider
              valueStart={0} //initial value
              valueEnd={valueIndicator} //final value
              duration={2} //duration animated
              easingFunction={easeQuadInOut}
            >
              {value => {
                const roundedValue = Math.round(value)
                return (
                  <IndicatorNumber
                    // strokeWidth='2' //thickness bar
                    viewBox='0 0 50 50'
                    value={value} //value bar
                    text={`${roundedValue}`} //text bar
                    styles={buildStyles({
                      pathTransition: 'none', //Trasition of progress bar
                      strokeLinecap: 'butt',
                      textSize: '66px',

                      // Colors
                      pathColor: 'transparent', //color progress bar main
                      textColor: '#fff',
                      trailColor: 'transparent', //color progress bar second
                      backgroundColor: 'transparent',
                    })}
                  />
                )
              }}
            </AnimatedProgressProvider>
          )
        }}
      </VisibilitySensor>
      <h5 className='no-pad text-indicator'>{text}</h5>
    </div>
  )
}
