import Styles from '../src/lib/Styles'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story) => (
    <>
      <Styles />
      <Story />
    </>
  )
]
