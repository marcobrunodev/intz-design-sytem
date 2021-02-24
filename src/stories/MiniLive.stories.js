import React from 'react'
import { MiniLive } from '../lib'
import avatar from './assets/images/marco-bruno.png'
import screen from './assets/images/screen-live.png'

export default {
  title: 'Components/MiniLive',
  component: MiniLive
}

const Template = (args) => <MiniLive {...args} />

export const Default = Template.bind({})
Default.args = {
  avatar,
  altAvatar: 'Avatar do Marco Bruno',
  screen,
  altScreen: 'Live do Marco Bruno'
}

export const Active = Template.bind({})
Active.args = {
  avatar,
  altAvatar: 'Avatar do Marco Bruno',
  screen,
  altScreen: 'Live do Marco Bruno',
  title: 'Plataforma feliz de live !Alura !intz',
  name: 'marcobrunodev',
  game: 'Science & Technology',
  active: true
}
