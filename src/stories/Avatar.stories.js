import React from 'react'
import marcobruno from './assets/images/marco-bruno.png'
import { Avatar } from '../lib'

export default {
  title: 'Components/Avatar',
  component: Avatar
}

const Template = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  live: false,
  src: marcobruno,
  alt: 'Avatar do Marco Bruno'
}

export const Live = Template.bind({})
Live.args = {
  live: true,
  src: marcobruno,
  alt: 'Avatar do Marco Bruno'
}
