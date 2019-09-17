import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Image = ({ input }) => (
  <div>
    <Img fluid={input.primary.image.localFile.childImageSharp.fluid} />
  </div>
)

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}
