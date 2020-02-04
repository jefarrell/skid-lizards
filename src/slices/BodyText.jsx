import React from 'react'
import PropTypes from 'prop-types'

const BodyText = ({ input }) => <div className='slice__body-text' dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />

export default BodyText

BodyText.propTypes = {
  input: PropTypes.object.isRequired,
}
