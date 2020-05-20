import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import VisibilitySensor from 'react-visibility-sensor'
import { easeQuadInOut } from 'd3-ease'

import 'react-circular-progressbar/dist/styles.css'

import AnimatedProgressProvider from './Animated/AnimatedProgressProvider'

import './Indicator.css'

export default props => {
  const valueIndicator = props.value
  const textIndicator = props.text

  return (
    <div className='circle'>
      <VisibilitySensor>
        {({ isVisible }) => {
          const percentage = isVisible ? valueIndicator : 0
          return (
            <AnimatedProgressProvider
              valueStart={0} //initial value
              valueEnd={percentage * 100} //final value
              duration={2} //duration animated
              easingFunction={easeQuadInOut}
            >
              {value => {
                const roundedValue = Math.round(value)
                return (
                  <CircularProgressbar
                    strokeWidth='2' //thickness bar
                    value={value} //value bar
                    text={`${roundedValue}.0%`} //text bar
                    styles={buildStyles({
                      pathTransition: 'none', //Trasition of progress bar
                      strokeLinecap: 'butt',
                      textSize: '17px',

                      // Colors
                      pathColor: '#555', //color progress bar main
                      textColor: '#555',
                      trailColor: '#d6d6d6', //color progress bar second
                      backgroundColor: '#fff',
                    })}
                  />
                )
              }}
            </AnimatedProgressProvider>
          )
        }}
      </VisibilitySensor>
      <div className='agenda'>{textIndicator}</div>
    </div>
  )
}
