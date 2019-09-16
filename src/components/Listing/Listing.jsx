import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import ListItem from './ListItem'

const List = styled.ul`
  margin-top: 4rem;
  margin-bottom: 4rem;
  list-style-type: none;
  margin-left: 0;
`

export default class Listing extends Component {
  render() {
    const { posts } = this.props
    return (
      <List>
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
      </List>
    )
  }
}

Listing.propTypes = {
  posts: PropTypes.array.isRequired,
}
