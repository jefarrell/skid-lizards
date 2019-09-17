import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Categories from './Categories'

export default class ListItem extends Component {
  render() {
    const { node, categories } = this.props
    return (
      <li>
        <p>
          {node.data.date} — {categories && <Categories categories={categories} />}
        </p>
        <Link to={node.uid}>{node.data.title.text}</Link>
      </li>
    )
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
}
