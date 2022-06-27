import styled from 'styled-components'
import { layout, effects, colors } from '@/theming/vars'
import { Label } from './Label.styled'

const Chip = styled.div`
  box-sizing: border-box;
  display: inline-block;
  border-radius: ${layout.border_radius.chip};
  padding: ${layout.padding.small};
  background-color: ${(props) =>
    props.selected
      ? colors.background.accent
      : colors.background.ligth_tertiary};

  &:hover {
    filter: grayscale(${effects.hover_darken});
  }
`

Chip.Label = Label

export default Chip
