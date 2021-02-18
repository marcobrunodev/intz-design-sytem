import React from 'react'
import { IntzTitle } from '../lib'

export default {
  title: 'Components/IntzTitle',
  component: IntzTitle
}

const Template = (args) => <IntzTitle {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Patrocinadores'
}
