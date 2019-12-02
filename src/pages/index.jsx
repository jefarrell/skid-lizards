import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { 
  PostPreview, 
  Footer, 
  Header, 
  ExternalLink,
} from '../components';
import { isMobile } from '../utils/constants';
import website from '../../config/website';
import Main from '../utils/app';
import '../styles/index.scss';
import '../utils/app.js';

const Index = ( {data: { homepage, posts, footer, externalLinks }} = props) => {

  // posts.nodes.forEach((post) => {
  //   if (
  //     post.uid !== featuredPost.nodes[0].uid && 
  //     post.uid !== musicPost.edges[0].node.uid && 
  //     post.uid !== homepage.data.bottom_block_post.uid
  //     ) {
  //     remainingPosts.push(post);
  //   }
  // });

  return (
    <>
      <div className='content'>
        <div id={website.skipNavId}>
        <Header />
          <div className='home__content__wrap'>
            <div className='home__content__wrap--left'>
              <PostPreview posts={posts} />
            </div>
          </div>
        </div>
        
        <Main />
      </div>
      <Footer data={footer.data}/>
    </>
  )
}

export default Index;

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
    posts: PropTypes.shape({
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
      }
    }
    footer: prismicFooter {
      data {
        contact_text {
          text
        }
        contact_email {
          text
        }
        copyright_text {
          text
        }
        follow_text {
          text
        }
        follow_link {
          text
        }
        top_text {
          text
        }
      }
    }
    externalLinks: allPrismicExternalLink(filter: {}, limit: 6) {
      nodes {
        data {
          link_image {
            url
          }
          link_title {
            text
          }
          link_url {
            url
          }
        }
      }
    }
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }, limit: 10) {
      nodes {
        uid
        data {
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