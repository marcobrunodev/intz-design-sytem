import styled, { css } from 'styled-components'
import { StreamerOnStyle } from '../StreamerOn/styles'

export const Game = styled.h4`
  transform: translate(-100%);
  transition-delay: 780ms;
`

export const Name = styled.h3`
  margin-bottom: var(--gap-smallest);
  transform: translate(-100%);
  transition-delay: 680ms;
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.8rem;
  transform: translate(-100%);
`

export const Titles = styled.hgroup`
  color: var(--color-intz);
  font-weight: 500;
  font-size: 1.2rem;
  border-left: 1px solid var(--color-twitch);
  border-bottom: 1px solid var(--color-twitch);
  padding: var(--gap-smallest);
  transform: scaleY(0);
  transform-origin: top left;
  transition: transform 200ms ease-in-out;

  & > * {
    transition: transform 200ms 500ms ease-in-out;
  }
`

export const Screen = styled.img``

export const WrapperScreen = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-bottom: var(--gap-smallest);

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
    transition: transform 200ms ease-in-out;
  }
`

const hasActive = ({ active }) =>
  active &&
  css`
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

export const MiniLiveStyle = styled.article`
  display: inline-block;

  ${hasActive};
`
