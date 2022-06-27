import styled from 'styled-components'
import { colors, layout } from '@/theming/vars'
import { device } from '@/theming/breakpoints'

const Input = styled.input`
  height: ${layout.height.mobile};
  background-color: ${colors.background.light_main};
  border: 1px solid transparent;
  width: 100%;

  &:focus-visible {
    border: 1px solid ${colors.background.accent};
  }

  @media ${device.tablet} {
    height: ${layout.height.regular};
  }
`
export default Input
