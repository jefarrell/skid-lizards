import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Listing } from '../components'
import website from '../../config/website'

class Index extends Component {
  render() {
    const {
      data: { homepage, social, posts, projects },
    } = this.props
    return (
      <div>
        <div>
          <div>
            <h1>{homepage.data.title.text}</h1>
            <h1 dangerouslySetInnerHTML={{ __html: homepage.data.content.html }} />
            <div>
              {social.nodes.map((s, index) => (
                <li data-name={`social-entry-${index}`} key={s.primary.label.text}>
                  <a href={s.primary.link.url}>{s.primary.label.text}</a>
                </li>
              ))}
            </div>
          </div>
        </div>
        <div id={website.skipNavId} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <h1 style={{ marginTop: '4rem' }}>Recent posts</h1>
          <Listing posts={posts.nodes} />
          <h1 style={{ marginTop: '8rem' }}>Recent projects</h1>
          <ul>
            {projects.nodes.map(project => (
              <li key={project.primary.label.text}>
                <a href={project.primary.link.url}>{project.primary.label.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        content: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }),
      }),
    }),
    social: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
    projects: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
    social: allPrismicHeroLinksBodyLinkItem {
      nodes {
        primary {
          label {
            text
          }
          link {
            url
          }
        }
      }
    }
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      nodes {
        uid
        data {
          title {
            text
          }
          date(formatString: "DD.MM.YYYY")
          categories {
            category {
              document {
                data {
                  name
                }
              }
            }
          }
        }
      }
    }
    projects: allPrismicProjectsBodyLinkItem {
      nodes {
        primary {
          label {
            text
          }
          link {
            url
          }
        }
      }
    }
  }
`
