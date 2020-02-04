import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { 
  TopPostPreview,
  PostPreview, 
  Footer, 
  Header, 
} from '../components';
import website from '../../config/website';
import Main from '../utils/app';
import '../styles/index.scss';
import '../utils/app.js';

//eslint-disable-next-line
const Index = ( {data: { homepage, posts, footer }} = props) => {
  const { nodes } = posts;
  const firstPost = nodes.slice(0,1);
  const remainingPosts = nodes.slice(1);
  return (
    <>
      <div className='content'>
        <div id={website.skipNavId}>
        <Header />
          <div className='home__content__wrap'>
            <TopPostPreview post={firstPost} />
            <div className='home__content__wrap--posts'>
              <PostPreview posts={remainingPosts} />
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



// export const pageQuery = graphql`
//   query IndexQuery {
//     homepage: prismicHomepage {
//       data {
//         title {
//           text
//         }
//       }
//     }
//     footer: prismicFooter {
//       data {
//         contact_text {
//           text
//         }
//         contact_email {
//           text
//         }
//         copyright_text {
//           text
//         }
//         follow_text {
//           text
//         }
//         follow_link {
//           text
//         }
//         top_text {
//           text
//         }
//       }
//     }
//     nodes {
//       uid
//       data {
//         title {
//           text
//         }
//         main_image {
//           url
//         }
//         sub_title {
//           text
//         }
//       }
//     }
//   }
// `
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
        }
      }
    }
  }
`