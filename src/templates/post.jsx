import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, Listing, SliceZone, SEO, Header, NextPostPreview } from '../components';
import { Categories, Tags, Authors, Photographers } from '../components/Listing';
import website from '../../config/website';

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {  
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b  = parseInt(result[3], 16);
    const res = `rgb(${r}, ${g}, ${b})`
    return res
  } else {
    return null;
  }
}

const Post = ({ data: { prismicPost, posts }, location }) => {
  const { data } = prismicPost;

  let tags = false;
  if (data.tags[0].tag) {
    tags = data.tags.map(c => c.tag.document[0].data.name);
  }

  return (
    <Layout>
      <Header />
      <div>
        <div className='post__header'>
          <div className='post__header--left'>
          {tags && <Tags tags={tags} />}
          {
            data.main_image && <img className='post__header__img' src={data.main_image.url} />
          }
          </div>
          <div className='post__header--right'>
            <div className='post__header__meta'>
              {
                data.date && (
                  <div className='date__listing listing__shared' style={{backgroundColor: accentColor}}>
                    <span className='post__header__date'>{data.date}</span>
                  </div>
                )
              }

              { 
                categories && <Categories categories={categories} color={accentColor}/>
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
        <div className='post__body' style={gradientStyle}>
          <div className='post__body--left'></div>
          <div className='post__body--right'>
            {
              data.body && <SliceZone allSlices={data.body} />
            }
          </div>
        </div>
      </div>
      <span className='post__footer__title'>OFFCENTER</span>
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
        tags {
          tag {
            document {
              data {
                name
              }
            }
          }
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
    posts: allPrismicPost(limit: 2, sort: { fields: [data___date], order: DESC }, filter: { uid: { ne: $uid } }) {
      nodes {
        uid
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
          tags {
            tag {
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
