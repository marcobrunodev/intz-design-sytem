import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MiniLive from '../MiniLive'
import { CarouselStyle } from './styles'

function arrayRotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop())
  else arr.push(arr.shift())

  return arr
}

function Carousel({ lives }) {
  const [livesState, setLivesState] = useState(lives)

  const handleClick = (event, index) => {
    setLivesState((lives) => {
      const goLives =
        (index === 0 && arrayRotate(lives, true)) ||
        (index === 2 && arrayRotate(lives, false)) ||
        lives

      console.log('goLives', goLives)

      return goLives.map((live, index) => ({
        ...live,
        left: index === 0,
        active: index === 1,
        right: index === 2
      }))
    })
  }

  return (
    <CarouselStyle>
      {livesState.map((live, index) => {
        const goLive = {
          ...live,
          left: index === 0,
          active: index === 1,
          right: index === 2
        }

        return (
          <MiniLive
            key={live.url}
            {...goLive}
            onClick={(event) => handleClick(event, index)}
          />
        )
      })}
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
