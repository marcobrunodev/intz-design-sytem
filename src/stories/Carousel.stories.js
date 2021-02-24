import React from 'react'
import avatar from './assets/images/marco-bruno.png'
import screen from './assets/images/screen-live.png'
import { Carousel } from '../lib'

export default {
  title: 'Components/Carousel',
  component: Carousel
}

const Template = (args) => <Carousel {...args} />

const lives = [
  {
    url: 'https://twitch.tv/marcobrunodev',
    avatar,
    altAvatar: 'Avatar do Marco Bruno',
    screen,
    altScreen: 'Tela do Marco Bruno',
    title: '0 - Plataforma de live !Alura !intz',
    name: 'marcobrunodev',
    game: 'Science & Technology'
  },
  {
    url: 'https://twitch.tv/jovica',
    avatar,
    altAvatar: 'Avatar do Marco Bruno',
    screen,
    altScreen: 'Tela do Marco Bruno',
    title: '1 - Plataforma de live !Alura !intz',
    name: 'marcobrunodev',
    game: 'Science & Technology'
  },
  {
    url: 'https://twitch.tv/giizaa',
    avatar,
    altAvatar: 'Avatar do Marco Bruno',
    screen,
    altScreen: 'Tela do Marco Bruno',
    title: '2 - Plataforma de live !Alura !intz',
    name: 'marcobrunodev',
    game: 'Science & Technology'
  }
]

export const Default = Template.bind({})
Default.args = {
  lives
}
