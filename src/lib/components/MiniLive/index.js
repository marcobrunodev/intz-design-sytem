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

function MiniLive({ avatar, altAvatar, screen, altScreen, active }) {
  return (
    <MiniLiveStyle active={active}>
      <WrapperScreen>
        <StreamerOn avatar={avatar} alt={altAvatar} />
        <Screen src={screen} alt={altScreen} />
      </WrapperScreen>
      <Titles>
        <Title>Plataforma para lives - !Alura</Title>
        <Name>marcobrunodev</Name>
        <Game>Science & Technology</Game>
      </Titles>
    </MiniLiveStyle>
  )
}

MiniLive.defaultProps = {
  active: false
}

MiniLive.propTypes = {
  avatar: PropTypes.string.isRequired,
  altAvatar: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired,
  altScreen: PropTypes.string.isRequired,
  active: PropTypes.bool
}

export default MiniLive
