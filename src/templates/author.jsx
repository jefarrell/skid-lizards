import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Listing, SEO, Header } from '../components'
import website from '../../config/website'

const Author = ({
  pageContext: { author },
  data: {
    posts: { nodes, totalCount },
  },
  location,
}) => (
  <div>
    <SEO title={`Author: ${author} | ${website.titleAlt}`} pathname={location.pathname} />
    <div>
      <div>
        <Header />
        <h1>Author</h1>
        <h1>{author}</h1>
      </div>
    </div>
    <div id={website.skipNavId}>
      <h1 style={{ marginTop: '4rem' }}>
        {totalCount} {totalCount === 1 ? 'Post' : 'Posts'} by  "{author}"
      </h1>
      <Listing posts={nodes} />
    </div>
  </div>
)

export default Author

Author.propTypes = {
  pageContext: PropTypes.shape({
    author: PropTypes.string.isRequired,
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
  query AuthorPage($author: String!) {
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: {
          author: { elemMatch: { author: { document: { elemMatch: { data: { name: { eq: $author } } } } } } }
        }
      }
    ) {
      totalCount
      nodes {
        uid
        data {
          title {
            text
          }
          date(formatString: "DD.MM.YYYY")
          author {
            author {
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
  }
`
