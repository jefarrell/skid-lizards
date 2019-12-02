import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Listing, SEO, Header, PostPreview } from '../components'
import website from '../../config/website'

const Tag = ({
  pageContext: { tag },
  data: {
    posts: { nodes, totalCount },
  },
  location,
}) => (
  <Layout>
    <SEO title={`Tag: ${tag} | ${website.titleAlt}`} pathname={location.pathname} />
    <div>
      <div>
        <Header />
        <h1 className='tag-page__title'>{tag}</h1>
      </div>
    </div>
    <div id={website.skipNavId}>
      <h2 className='tag-page__subtitle'>
        {totalCount === 1 ? 'Post' : 'Posts'} tagged with "{tag}"
      </h2>
      <PostPreview posts={nodes} />
    </div>
  </Layout>
)

export default Tag

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    posts: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query TagPage($tag: String!) {
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: {
          tags: { elemMatch: { tag: { document: { elemMatch: { data: { name: { eq: $tag } } } } } } }
        }
      }
    ) {
      totalCount
      nodes {
        uid
        data {
          is_featured_post
          title {
            text
          }
          main_image {
            url
          }
          sub_title {
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
          tags {
            tag {
              document {
                data {
                  name
                }
              }
            }
          }
          author {
            author {
              document {
                data {
                  name
                }
              }
            }
          }
          photographer {
            photographer {
              document {
                data {
                  name
                  photographer_link {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
