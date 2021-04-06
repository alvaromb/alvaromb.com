import React from 'react'
import { Link } from 'gatsby'

class AppList extends React.Component {
  render() {
    return (
      <>
        <h3>Apps</h3>
        <div>
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
                    alignItems: 'center',
                  }}
                >
                  <img
                    alt={title}
                    src={
                      require(`../assets/${node.frontmatter.icon}@2x.jpg`)
                        .default
                    }
                    style={{
                      marginBottom: 0,
                      width: 94,
                      height: 94,
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <span>{title}</span>
                    <span>{desc}</span>
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
