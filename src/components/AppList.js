import React from 'react'
import { Link } from 'gatsby'
import H3 from './H3'
import AppName from './AppName'
import AppDesc from './AppDesc'
import { rhythm } from '../utils/typography'

class AppList extends React.Component {
  render() {
    return (
      <>
        <H3>Apps</H3>
        <div style={{ paddingBottom: rhythm(0.6) }}>
          {this.props.apps.map(({ node }) => {
            const title = node.frontmatter.title
            const desc = node.excerpt
            return (
              <Link
                key={`${node.fields.slug}-applink`}
                to={node.fields.slug}
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: rhythm(0.4),
                    alignItems: 'center',
                  }}
                >
                  <img
                    alt={title}
                    src={require(`../assets/${node.frontmatter.icon}@2x.jpg`)}
                    style={{
                      marginBottom: 0,
                      width: 94,
                      height: 94,
                    }}
                  />
                  <div
                    style={{
                      paddingLeft: rhythm(0.6),
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <AppName>{title}</AppName>
                    <AppDesc>{desc}</AppDesc>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </>
    )
  }
}

export default AppList
