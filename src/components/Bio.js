import React from 'react'
import Tooltip from 'react-simple-tooltip'

import Colors from '../utils/colors'
import IntroductionText from './IntroductionText'

class Bio extends React.Component {
  render() {
    return (
      <>
        <IntroductionText>
          Hi 👋! I’m Álvaro, a{' '}
          <Tooltip
            content={
              <div style={{ width: 160 }}>
                BSc., MSc. from Universitat de les Illes Balears.
              </div>
            }
            fadeDuration={150}
            radius={8}
          >
            <span
              style={{
                color: Colors.primary,
              }}
            >
              software engineer
            </span>
          </Tooltip>{' '}
          and{' '}
          <Tooltip
            content={
              <div style={{ width: 160 }}>
                Program for Management Development from IESE Business School,
                University of Navarra.
              </div>
            }
            fadeDuration={150}
            radius={8}
          >
            <span
              style={{
                color: Colors.primary,
              }}
            >
              PDD
            </span>
          </Tooltip>{' '}
          living in Palma, Spain. My current focus is on the intersection of
          engineering, product development and management.
        </IntroductionText>
        <IntroductionText>
          I have worked for startups and big companies, helping them envision
          their mobile strategy and leading technical teams. Currently, I serve
          as General Manager at{' '}
          <a href="http://www.fundaciobit.org">Fundació BIT</a>. Learn more{' '}
          <a href="https://www.linkedin.com/in/alvaromb/">about me</a>.
        </IntroductionText>
        <p
          style={{
            color: Colors.grey,
            fontSize: 16,
          }}
        >
          The header image is a simulation of material orbiting close to a Black
          Hole.{' '}
          <a href="https://www.eso.org/public/images/eso1835a/">Original</a>.
          Credits: ESO/Gravity Consortium/L. Calçada.
        </p>
      </>
    )
  }
}

export default Bio
