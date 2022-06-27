import React from 'react'
import GlobalStyle from './theming/GlobalStyle'
import SuggestionCard from './blocks/SuggestionCard'
import Chip from './blocks/Chip'
import { device } from '@/theming/breakpoints'

function App() {
  console.log(device.tablet)
  return (
    <div className="App">
      <SuggestionCard>
        <SuggestionCard.Inner>
          <Chip>
            <Chip.Label>Hello</Chip.Label>
          </Chip>
        </SuggestionCard.Inner>
        <SuggestionCard.Inner>
          <SuggestionCard.Title>New Feedback</SuggestionCard.Title>
          <SuggestionCard.Body>This is a new feeback</SuggestionCard.Body>
        </SuggestionCard.Inner>
        <SuggestionCard.Inner>
          <Chip>
            <Chip.Label>OK</Chip.Label>
          </Chip>
        </SuggestionCard.Inner>
      </SuggestionCard>
      <GlobalStyle />
    </div>
  )
}

export default App
