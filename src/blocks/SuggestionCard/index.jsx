import styled from 'styled-components'
import { InnerContainer } from './InnerContainer.styled'
import { H3, Body1 } from '@/elements/Typography.styled'
import { device } from '@/theming/breakpoints'

const SuggestionCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (${device.tablet}) {
    flex-direction: row;
  }
`
SuggestionCard.Inner = InnerContainer
SuggestionCard.Title = H3
SuggestionCard.Body = Body1

export default SuggestionCard
