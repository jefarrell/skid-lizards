import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

export default class Tags extends Component {
  render() {
    const { tags } = this.props
    return (
      <>
        {tags.map((tag, i) => (
          <div className='listing__tag' key={tag}>
            {!!i && ', '}
            <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
          </div>
        ))}
      </>
    )
  }
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}
