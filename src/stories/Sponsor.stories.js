import React from 'react'
import { Sponsor } from '../lib'
import lg from './assets/images/lg.png'

export default {
  title: 'Components/Sponsor',
  component: Sponsor
}

const Template = (args) => <Sponsor {...args} />

export const Default = Template.bind({})
Default.args = {
  link: 'https://lg.com.br',
  src: lg,
  alt: 'Logo da LG Monitores'
}
