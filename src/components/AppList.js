import React from 'react'
import { Link } from 'gatsby'
import H3 from './H3'
import AppName from './AppName'
import { rhythm } from '../utils/typography'

const apps = [
  {
    node: {
      fields: { slug: '/scanguest/' },
      frontmatter: {
        date: 'November 15, 2018',
        title: 'ScanGuest',
        icon: 'scanguest-icon',
      },
    },
  },
  {
    node: {
      fields: { slug: '/entropy/' },
      frontmatter: {
        date: 'June 15, 2018',
        title: 'Entropy Dispatcher',
        icon: 'entropy-icon',
      },
    },
  },
  {
    node: {
      fields: { slug: '/rentalspms/' },
      frontmatter: {
        date: 'February 12, 2018',
        title: 'Rentals PMS',
        icon: 'rentalspms-icon',
      },
    },
  },
  {
    node: {
      fields: { slug: '/toogle/' },
      frontmatter: {
        date: 'October 13, 2017',
        title: 'TUI Toogle',
        icon: 'toogle-icon',
      },
    },
  },
  {
    node: {
      fields: { slug: '/enviodinero/' },
      frontmatter: {
        date: 'July 27, 2017',
        title: 'Envío Dinero',
        icon: 'enviodinero-icon',
      },
    },
  },
  {
    node: {
      fields: { slug: '/stayingsafe/' },
      frontmatter: {
        date: 'June 13, 2017',
        title: 'Staying Safe',
        icon: 'stayingsafe-icon',
      },
    },
  },
  {
    node: {
      fields: { slug: '/2gn/' },
      frontmatter: {
        date: 'February 02, 2017',
        title: 'Two Good Neighbours',
        icon: '2gn-icon',
      },
    },
  },
  {
    node: {
      fields: { slug: '/supspot/' },
      frontmatter: {
        date: 'July 21, 2016',
        title: 'SupSpot',
        icon: 'supspot-icon',
      },
    },
  },
  {
    node: {
      fields: { slug: '/nauticheck/' },
      frontmatter: {
        date: 'May 03, 2016',
        title: 'Nauticheck',
        icon: 'nauticheck-icon',
      },
    },
  },
  {
    node: {
      fields: { slug: '/meneame/' },
      frontmatter: {
        date: 'May 13, 2015',
        title: 'Menéame',
        icon: 'meneame-icon',
      },
    },
  },
]

class AppList extends React.Component {
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
          {apps.map(({ node }) => {
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
                  <img
                    alt={title}
                    src={require(`../assets/${node.frontmatter.icon}@2x.jpg`)}
                    style={{ marginBottom: 0, width: 94, height: 94 }}
                  />
                  <AppName>{title}</AppName>
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
