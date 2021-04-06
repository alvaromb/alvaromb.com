import React from 'react'

class Bio extends React.Component {
  render() {
    return (
      <>
        <p>
          Hi 👋! I’m Álvaro, a software engineer and PDD living in Palma, Spain.
          My current focus is on the intersection of engineering, product
          development and management.
        </p>
        <p>
          I have worked for startups and big companies, helping them envision
          their mobile strategy and leading technical teams. Currently, I serve
          as General Manager at{' '}
          <a href="http://www.fundaciobit.org">Fundació BIT</a>. Learn more{' '}
          <a href="https://www.linkedin.com/in/alvaromb/">about me</a>.
        </p>
        <p
          style={{
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
