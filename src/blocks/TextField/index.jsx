import styled from 'styled-components'
import HelperText from './HelperText.styled'
import Label from './Label.styled'
import Title from './Title.styled'
import { layout, colors } from '@/theming/vars'

const TextField = styled.div`
  padding: ${layout.spacing.small};
  display: flex;
  flex-direction: column;
  gap: ${layout.spacing.small};
  background-color: ${colors.background.light_card};
`

TextField.Helper = HelperText
TextField.Title = Title
TextField.Label = Label

export default TextField
