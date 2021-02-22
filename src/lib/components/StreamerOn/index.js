import PropTypes from 'prop-types'
import React from 'react'
import { StreamerOnStyle, Streamer, Live } from './styles'

function StreamerOn({ avatar, alt }) {
  return (
    <StreamerOnStyle>
      <Streamer src={avatar} alt={alt} live />
      <Live>Live</Live>
    </StreamerOnStyle>
  )
}

StreamerOn.propTypes = {
  avatar: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default StreamerOn
