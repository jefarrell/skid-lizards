import React from 'react'
import PropTypes from 'prop-types'


const Quote = ({ input }) => (
  <blockquote>
    <div className='slice__quote -observe' dangerouslySetInnerHTML={{ __html: input.primary.quote.html }} />
  </blockquote>
)

export default Quote

Quote.propTypes = {
  input: PropTypes.object.isRequired,
}
