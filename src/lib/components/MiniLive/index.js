import React from 'react'
import PropTypes from 'prop-types'
import StreamerOn from '../StreamerOn'
import {
  MiniLiveStyle,
  Name,
  Screen,
  Title,
  Titles,
  Game,
  WrapperScreen
} from './styles'

function MiniLive({
  avatar,
  altAvatar,
  screen,
  altScreen,
  position,
  title,
  name,
  game,
  onClick
}) {
  return (
    <MiniLiveStyle position={position} onClick={onClick}>
      <WrapperScreen>
        <StreamerOn avatar={avatar} alt={altAvatar} />
        <Screen src={screen} alt={altScreen} />
      </WrapperScreen>
      <Titles>
        <Title>{title}</Title>
        <Name>{name}</Name>
        <Game>{game}</Game>
      </Titles>
    </MiniLiveStyle>
  )
}

MiniLive.defaultProps = {
  position: '',
  onClick: () => {}
}

MiniLive.propTypes = {
  avatar: PropTypes.string.isRequired,
  altAvatar: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired,
  altScreen: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired,
  position: PropTypes.string,
  onClick: PropTypes.func
}

export default MiniLive
