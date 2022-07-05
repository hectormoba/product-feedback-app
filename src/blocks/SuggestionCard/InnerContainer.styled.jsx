import styled from 'styled-components'

export const InnerContainer = styled.div`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  justify-content: ${(props) => {
    if (props.flex) {
      return props.center ? 'center' : props.between ? 'space-between' : 'none'
    } else {
      return 'none'
    }
  }};
  background-color: 'inherit';
`
