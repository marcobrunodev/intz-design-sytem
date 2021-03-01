import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MiniLive from '../MiniLive'
import { CarouselStyle } from './styles'

function startPositions(lives) {
  const positions = ['left', 'active', 'right']

  return lives.map((live, index) => ({ ...live, position: positions[index] }))
}

function Carousel({ lives }) {
  const [livesState, setLivesState] = useState(startPositions(lives))
  const lastPosition = livesState.length - 1

  const getIndexLeft = (index) => (index === 0 ? lastPosition : index - 1)

  const getIndexRight = (index) => (index + 1) % livesState.length

  const handleClick = (event, index) => {
    setLivesState((lives) => {
      const goLives = lives.map((live) => {
        delete live.position

        return live
      })

      goLives[index].position = 'active'
      goLives[getIndexRight(index)].position = 'right'
      goLives[getIndexLeft(index)].position = 'left'

      return goLives
    })
  }

  return (
    <CarouselStyle>
      {livesState.map((live, index) => (
        <MiniLive
          key={live.url}
          {...live}
          onClick={(event) => handleClick(event, index)}
        />
      ))}
    </CarouselStyle>
  )
}

const live = {
  url: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  altAvatar: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired,
  altScreen: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired,
  active: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool
}
const lives = PropTypes.arrayOf(live).isRequired

Carousel.propTypes = {
  lives
}

export default Carousel
