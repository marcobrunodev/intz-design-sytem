import styled from 'styled-components'
import Avatar from '../Avatar'
import iconLive from '../../assets/images/live.png'

export const Streamer = styled(Avatar)`
  box-sizing: border-box;
  width: 100%;
`

export const Live = styled.dd`
  display: flex;
  align-items: center;
  background-color: var(--color-live);
  color: var(--color-intz);
  padding: calc(var(--gap-smallest) / 2);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  border-radius: 0.5rem;
  transform: translateY(-50%);

  &::before {
    content: url(${iconLive});
    margin-right: calc(var(--gap-smallest) / 2);
  }
`

export const StreamerOnStyle = styled.dl`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 7rem;
`
