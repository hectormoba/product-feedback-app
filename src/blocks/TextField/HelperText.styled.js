import styled from 'styled-components'
import { Body1 } from '@/elements/Typography.styled'
import { colors } from '@/theming/vars'

const HelperText = styled(Body1)`
  margin: 0;
  color: ${colors.alert};
  display: ${(props) => props.display || 'none'};
`

export default HelperText
