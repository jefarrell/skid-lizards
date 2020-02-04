import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BodyText, Image, Quote, DoubleImage } from '../slices'

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props;
    const slice = allSlices.map(s => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case 'text':
          return <BodyText key={s.id} input={s} />
        case 'image':
          return <Image key={s.id} input={s} />
        case 'quote':
          return <Quote key={s.id} input={s} />
        case 'double-image':
          return <DoubleImage key={s.id} input={s} />
        default:
          return null
      }
    });
    return <div className='post__body--slicewrap'>{slice}</div>
  }
}

SliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired,
}
