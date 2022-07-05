import styled, { css } from 'styled-components'
import { colors, layout } from '@/theming/vars'
import { device } from '@/theming/breakpoints'

export const BaseStyleInput = css`
  height: ${layout.height.mobile};
  background-color: ${colors.background.light_main};
  border: 1px solid ${(props) => (props.error ? colors.alert : 'transparent')};
  width: 100%;

  &:focus-visible {
    border-color: ${(props) =>
      props.error ? colors.alert : colors.background.accent};
  }
`

const Input = styled.input`
  ${BaseStyleInput}

  @media ${device.tablet} {
    height: ${layout.height.regular};
  }
`
export default Input
