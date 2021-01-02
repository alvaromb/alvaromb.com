import React from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'gatsby'
import H3 from './H3'
import AppName from './AppName'
import { rhythm } from '../utils/typography'

class AppList extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {this.props.apps.map(({ node }) => {
          const title = node.frontmatter.title
          return (
            <Link
              key={node.fields.slug}
              to={node.fields.slug}
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  padding: rhythm(0.4),
                  alignItems: 'center',
                }}
              >
                <MediaQuery minResolution="2dppx">
                  {retina => (
                    <img
                      alt={title}
                      src={
                        retina
                          ? require(`../assets/${node.frontmatter.icon}@2x.jpg`)
                          : require(`../assets/${node.frontmatter.icon}.jpg`)
                      }
                      style={{ marginBottom: 0, width: 94, height: 94 }}
                    />
                  )}
                </MediaQuery>
                <AppName>{title}</AppName>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default AppList
