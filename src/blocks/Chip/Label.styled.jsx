import styled from 'styled-components'
import { Body3 } from '@/elements/Typography.styled'
import { colors } from '@/theming/vars'

export const Label = styled(Body3)`
  width: 100%;
  margin: 0;
  color: ${(props) =>
    props.selected ? colors.text.onDark : colors.text.onLightTertiary};
`
