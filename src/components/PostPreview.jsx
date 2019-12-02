import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Authors, Tags, Categories, Photographers } from '../components/Listing';

export default class PostPreview extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        {  
          posts.map((post) => {
            let tags = false;
            if (post.data.tags[0].tag) {
              tags = post.data.tags.map(c => c.tag.document[0].data.name);
            }


            return (
              <div className='preview__wrap' key={post.uid} style={{backgroundColor: primaryColor}}>
                {
                    post.data.main_image && (
                      <div className='preview__left' style={{backgroundImage: `url(${post.data.main_image.url})`}}>
                  {
                    tags && (
                        <Tags tags={tags} />
                    )
                  }
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
