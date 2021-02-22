import React from 'react'
import { MiniLive } from '../lib'
import avatar from './assets/images/marco-bruno.png'

export default {
  title: 'Components/MiniLive',
  component: MiniLive
}

const Template = (args) => <MiniLive {...args} />

export const Default = Template.bind({})
Default.args = {
  avatar,
  altAvatar: 'Avatar do Marco Bruno'
}
