import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

export default class Authors extends Component {
  render() {
    const { authors } = this.props
    return (
      <>
        {authors.map((auth, i) => (
          <React.Fragment key={auth}>
            {!!i && ', '}
            <Link to={`/authors/${kebabCase(auth)}`}>{auth}</Link>
          </React.Fragment>
        ))}
      </>
    )
  }
}

Authors.propTypes = {
    authors: PropTypes.array.isRequired,
}
