import React from 'react';

import PrismicReact from '../../prismic-react';
import TextSection from './slices/TextSection';
import FullWidthImage from './slices/FullWidthImage';
import Quote from './slices/Quote';
import ImageGallery from './slices/ImageGallery';
import ImageHighlight from './slices/ImageHighlight';
import HomeBanner from './slices/HomeBanner';
import PrismicQuery from './Utils.js';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      notFound: false,
      linkResolver : null,
    };
  }
  
  componentWillMount() {
    if (typeof document !== 'undefined') document.body.classList.add('homepage');
  }
  
  componentWillUnmount() {
    if (typeof document !== 'undefined') document.body.classList.remove('homepage');
  }

  render() {
    const data = this.props.PRISMIC_UNIVERSAL_DATA
    console.log("data", data.results)

    return (
      <div className="homepage-wrapper">
        {
          data.results.map((post, index) => {
            const offset = Math.floor(Math.random() * (200 - 1) + 1)
            const blogStyle = {
              backgroundImage: `url(${post.data.hero_image.url})`,
              backgroundPositionX: offset
            }
            return (
              <Link to={`page/${post.uid}`}>
              <div key={index} className="homepage-blogpost-wrapper">
                  <div className="homepage-blogpost-bg" style={blogStyle} />
                  <p className="homepage-blogpost-title"> { post.data.title[0].text } </p>
              </div>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

const fetchData = PrismicQuery('blog-post')

export default PrismicReact.UniversalComponent({
  request: (ctx, props) => fetchData(ctx, props),
  component: HomePage
});