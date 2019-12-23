import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default class PostPreview extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        {  
          posts.map((post) => {
            return (
              <div
                key={post.uid}
                className='preview__wrap' key={post.uid}>
                {
                    post.data.main_image && (
                      <div className='preview__img' style={{backgroundImage: `url(${post.data.main_image.url})`}}>
                </div>
                    )
                  }
                <div className='preview__right'>
                  {
                    post.data.title && (
                      <h2 className='preview__title'><Link to={`/${post.uid}`}>{post.data.title.text}</Link></h2>
                    )
                  }
                  {
                    post.data.sub_title && (
                      <p className='preview__subtitle'>{ post.data.sub_title.text }</p>
                    )
                  }
                </div>
              </div> 
            ) 
          }   
        )}
      </div>
    );
  }
}

PostPreview.propTypes = {
  posts: PropTypes.array.isRequired,
}
