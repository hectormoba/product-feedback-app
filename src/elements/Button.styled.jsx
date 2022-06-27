import styled from 'styled-components'
import { colors, layout } from '@/theming/vars'

const Button = styled.button`
  background-color: ${(props) =>
    props.main ? colors.main : props.cancel ? colors.alert : colors.secondary};
  width: 100%;
  border-radius: ${layout.border_radius.button};
  border: 1px solid transparent;
  height: ${layout.height.mobile};
`

export default Button
