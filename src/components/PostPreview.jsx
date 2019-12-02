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
            let authors = false;
            if (post.data.author[0].author) {
              authors = post.data.author.map(c => c.author.document[0].data.name);
            }

            let photographers = false;
            if (post.data.photographer[0].photographer) {
              photographers = post.data.photographer.map(c => c.photographer.document[0].data);
            }

            let categories = false;
            if (post.data.categories[0].category) {
              categories = post.data.categories.map(c => c.category.document[0].data.name);
            }

            let tags = false;
            if (post.data.tags[0].tag) {
              tags = post.data.tags.map(c => c.tag.document[0].data.name);
            }

            let primaryColor = false;
            let accentColor = false;
            if (post.data.theme_color) {
              if (post.data.theme_color.document[0].data.primary_color) {
                primaryColor = post.data.theme_color.document[0].data.primary_color.text;
              }
              if (post.data.theme_color.document[0].data.accent_color) {
                accentColor = post.data.theme_color.document[0].data.accent_color.text;
              }
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
                    categories && (
                      <span className='preview__category'>
                        <Categories categories={categories} color={accentColor} />
                      </span>
                    )
                  }
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
                  {
                    authors && (
                      <div className='preview__author--wrap'>
                        <span className='preview__author'>words by: </span>
                        {
                          authors && <Authors authors={authors}/>
                        }
                      </div>
                    )
                  }
                  {
                    photographers && (
                      <div className='preview__photog--wrap'>
                        <span className='preview__photog'>photography by: </span>
                          <Photographers photographers={photographers} />
                      </div>
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
