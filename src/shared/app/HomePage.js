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
    const links = data.results.map((post, index) => {
        const imgURL = post.data.hero_image.url
        const blogStyle = {
          backgroundImage: `url(${imgURL})`,
        }
        return (
          <a href={`page/${post.uid}`} key={index} className="homepage-blogpost-link">
            <div key={imgURL} className="homepage-blogpost-wrapper">
              <div className="homepage-blogpost-bg" style={blogStyle} />
              <p className="homepage-blogpost-title"> { post.data.title[0].text } </p>
            </div>
          </a>
        )
      })
    
    return (
      <div className="homepage-wrapper">
        <div className="hompage-img-wrapper" />
        <div className="homepage-blog-wrapper">
          <div className="homepage-info-wrapper">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          { links }
        </div>
      </div>
    )
  }
}

const fetchData = PrismicQuery('blog-post')

export default PrismicReact.UniversalComponent({
  request: (ctx, props) => fetchData(ctx, props),
  component: HomePage
});