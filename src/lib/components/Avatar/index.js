import styled, { css } from 'styled-components'

const hasLive = ({ live }) =>
  live &&
  css`
    border-color: var(--color-live);
  `

const Avatar = styled.img`
  border: 0.2rem solid var(--color-twitch);
  border-radius: 50%;

  ${hasLive};
`

export default Avatar
