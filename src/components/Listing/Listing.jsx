import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

export default class Listing extends Component {
  render() {
    const { posts } = this.props;
    return (
      <ul>
        { posts.map((post) => {
          let tags = false;

          if (post.data.tags) {
            if (post.data.tags[0].tag) {
              tags = post.data.tags.map(c => c.tag.document[0].data.name)
              return <ListItem key={post.uid} node={post} tags={tags} />
            }
          }
          return ""          
        })}
      </ul>
    );
  }
}

Listing.propTypes = {
  posts: PropTypes.array.isRequired,
}
