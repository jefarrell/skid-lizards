import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default class TopPostPreview extends Component {
  render() {
    const { post } = this.props;
    return (
      <>
        {  
          post.map((p) => {
            return (
              <Link 
                key={p.uid}
                to={`/${p.uid}`}>
                <div className='top-preview__wrap' key={p.uid}>
                  {
                    p.data.main_image && (
                      <img className='top-preview__img' src={p.data.main_image.url} />
                    )
                  }
                  {
                    p.data.title && (
                      <h2 className='top-preview__title'>{p.data.title.text}</h2>
                    )
                  }
                </div>
              </Link>
            ) 
          }   
        )}
      </>
    );
  }
}

TopPostPreview.propTypes = {
  post: PropTypes.array.isRequired,
}
