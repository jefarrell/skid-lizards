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
    return (
      <div>
        {
          data.results.map((post, index) => (
            <div key={index}>
              <Link to={`page/${post.uid}`}>
                <p> { post.data.title[0].text } </p>
              </Link>
            </div>
          ))
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