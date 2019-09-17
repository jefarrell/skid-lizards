import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Footer extends Component {
  render() {
    const { children } = this.props
    return <footer>{children}</footer>
  }
}

export default Footer

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}
