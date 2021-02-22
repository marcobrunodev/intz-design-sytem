import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../Avatar'

function MiniLive({ avatar, altAvatar }) {
  return <Avatar src={avatar} alt={altAvatar} live />
}

MiniLive.propTypes = {
  avatar: PropTypes.string.isRequired,
  altAvatar: PropTypes.string.isRequired
}

export default MiniLive
