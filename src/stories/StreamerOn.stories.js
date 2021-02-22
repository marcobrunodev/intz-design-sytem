import React from 'react'
import { StreamerOn } from '../lib'
import avatar from './assets/images/marco-bruno.png'

export default {
  title: 'Components/StreamerOn',
  component: StreamerOn
}

const Template = (args) => <StreamerOn {...args} />

export const Default = Template.bind({})
Default.args = {
  avatar,
  altAvatar: 'Avatar do Marco Bruno'
}
