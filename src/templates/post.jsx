import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, SliceZone, Header } from '../components';
import website from '../../config/website';



const Post = ({ data: { prismicPost, posts }, location }) => {
  const { data } = prismicPost;

  return (
    <Layout>
      <Header />
      <div>
        <div className='post__header'>
          <div className='post__header--left'>
          {/* {tags && <Tags tags={tags} />} */}
          {
            data.main_image && <img className='post__header__img' src={data.main_image.url} />
          }
          </div>
          <div className='post__header--right'>
            <div className='post__header__meta'>
              {
                data.date && (
                  <div className='date__listing listing__shared'>
                    <span className='post__header__date'>{data.date}</span>
                  </div>
                )
              }

            </div>
            {
              data.title && <h1 className='post__header__title'>{data.title.text}</h1>
            }
            {
              data.sub_title && <h3 className='post__header__subtitle'>{data.sub_title.text}</h3>
            }
          </div>          
          </div>
      </div>
      <div id={website.skipNavId}>
        <div className='post__body'>

            {
              data.body && <SliceZone allSlices={data.body} />
            }
        </div>
      </div>
    </Layout>
  );
}

export default Post;

Post.propTypes = {
  data: PropTypes.shape({
    prismicPost: PropTypes.object.isRequired,
    posts: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
  location: PropTypes.object.isRequired,
}

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you



export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        title {
          text
        }
        sub_title {
          text
        }
        date(formatString: "MMM. D, YYYY")
        main_image {
          url
        }
        body {
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
                text
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              caption {
                text
              }
            }
          }
          ... on PrismicPostBodyDoubleImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              caption {
                text
              }
              image_two {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              caption_two {
                text
              }
            }
          }
        }
      }
    }
  }
`

