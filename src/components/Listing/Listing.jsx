import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

export default class Listing extends Component {
  render() {
    const { posts } = this.props
    return (
      <ul>
        {posts.map(post => {
          let categories = false
          let authors = false
          if (post.data.categories[0].category) {
            categories = post.data.categories.map(c => c.category.document[0].data.name)
            return <ListItem key={post.uid} node={post} categories={categories} />
          }
          if (post.data.author[0].author) {
            authors = post.data.author.map(c => c.author.document[0].data.name)
            return <ListItem key={post.uid} node={post} authors={authors} />
          }
          return ""          
        })}
      </ul>
    )
  }
}

Listing.propTypes = {
  posts: PropTypes.array.isRequired,
}
