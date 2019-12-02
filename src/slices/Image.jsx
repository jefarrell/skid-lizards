import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Image = ({ input }) => { 
  return input.primary.caption.text ? (
    <div className='slice__img'>
      <figure>
        <Img className='slice__img--img -observe' fluid={input.primary.image.localFile.childImageSharp.fluid} />
        <span className='slice__img--caption'>{input.primary.caption.text}</span>
      </figure>
    </div>
  ) :
  (
    <div className='slice__img'>
      <Img className='slice__img--img -observe' fluid={input.primary.image.localFile.childImageSharp.fluid} />
    </div>
  )
}

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}
