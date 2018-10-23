import React from 'react';
import NotFoundPage from './NotFoundPage';
import PrismicReact from '../../prismic-react';
import TextSection from './slices/TextSection';
import FullWidthImage from './slices/FullWidthImage';
import Quote from './slices/Quote';
import ImageGallery from './slices/ImageGallery';
import ImageHighlight from './slices/ImageHighlight';
import { RichText } from 'prismic-reactjs';

class Page extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      notFound: false,
      linkResolver : null,
    };
  }

  render() {
    if (this.props.PRISMIC_UNIVERSAL_DATA) {
      const prismicData = this.props.PRISMIC_UNIVERSAL_DATA;
      const { data } = prismicData
      const heroStyle = {
        backgroundImage: `url(${data.hero_image.url})`
      }
      return(
        <div className="page-container" data-wio-id={ data.id }>
          <section className="page-hero" style={ heroStyle }>
            <h1>{ data.title[0].text }</h1>
          </section>
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFoundPage />;
    } else {
      return <div>Loading</div>;
    }
  }
}

export default PrismicReact.UniversalComponent({
  request: (ctx, props) => ctx.api.getByUID('blog-post', props.match.params.uid, {}),
  component: Page
});
