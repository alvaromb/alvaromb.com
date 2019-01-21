import React from 'react'
import H3 from './H3'
import AppName from './AppName'
import { rhythm } from '../utils/typography'

class AppList extends React.PureComponent {
  render() {
    return (
      <>
        <H3>Apps</H3>
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
              <div
                key={node.fields.slug}
                style={{
                  padding: rhythm(0.75),
                  alignItems: 'center',
                }}
              >
                <img
                  src={require(`../assets/${node.frontmatter.icon}`)}
                  style={{ marginBottom: 0 }}
                />
                <AppName>{title}</AppName>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default AppList
