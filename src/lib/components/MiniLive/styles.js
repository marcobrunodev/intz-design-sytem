import styled, { css } from 'styled-components'
import { StreamerOnStyle } from '../StreamerOn/styles'

export const Game = styled.h4`
  transform: translate(-100%);
  transition: transform 200ms 780ms ease-in-out;
`

export const Name = styled.h3`
  margin-bottom: var(--gap-smallest);
  transform: translate(-100%);
  transition: transform 200ms 680ms ease-in-out;
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.8rem;
  transform: translate(-100%);
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: transform 200ms 600ms ease-in-out;
`

export const Titles = styled.hgroup`
  box-sizing: border-box;
  color: var(--color-intz);
  font-weight: 500;
  font-size: 1.2rem;
  border-left: 1px solid var(--color-twitch);
  border-bottom: 1px solid var(--color-twitch);
  padding: var(--gap-smallest);
  transform: scaleY(0);
  transform-origin: top left;
  transition: transform 200ms 400ms ease-in-out, opacity 200ms ease-in-out;
  overflow: hidden;
`

export const Screen = styled.img``

export const WrapperScreen = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-bottom: var(--gap-smallest);
  border: 1px solid var(--color-twitch);

  & > ${StreamerOnStyle} {
    position: absolute;
    width: 70px;
    left: var(--gap-smallest);
    top: var(--gap-smallest);
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--color-twitch);
    opacity: 0.8;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    transition: transform 200ms 200ms ease-in-out;
  }
`

const hasActive = ({ active }) =>
  active &&
  css`
    z-index: 10;
    transform: scale(1);

    & > ${WrapperScreen}::before {
      transform: skew(-26deg) translateX(-50%);
    }

    & > ${Titles} {
      transform: scaleY(1);

      & > * {
        transform: translateX(0);
      }
    }
  `

const hasRight = ({ right, left }) => {
  console.log('left', left)

  return (
    (right || left) &&
    css`
      ${right && 'transform: scale(0.8) translate(100%, -5%)'};
      ${left && 'transform: scale(0.8) translate(-100%, -5%)'};

      & > ${Titles} {
        opacity: 0;
      }

      & > ${WrapperScreen} {
        border-color: var(--color-success);
      }
    `
  )
}

export const MiniLiveStyle = styled.article`
  position: absolute;
  max-width: 285px;
  cursor: pointer;
  transform: scale(0.2);
  transition: transform 200ms ease-in-out;

  ${hasRight};
  ${hasActive};
`
