/*global describe, it, expect*/
import * as React from 'react'
import NewFeedback from './NewFeedback'
import fieldTexts from '@/utils/content/fields'
import { screen, render } from '@testing-library/react'

describe('A user', () => {
  const { titleField, categoryField, textareaField } = fieldTexts

  it('can see three fields to write on', () => {
    render(<NewFeedback />)

    const input = screen.findByRole('input', { name: titleField.name })
    const list = screen.findByRole('input', { name: categoryField.name })
    const textarea = screen.findByRole('textarea', { name: textareaField.name })

    expect(input).toBeInTheDocument()
    expect(list).toBeInTheDocument()
    expect(textarea).toBeInTheDocument()
  })

  it('can click write in this three fields and click to send', () => {})

  it('can click in "Cancel" button', () => {})
})
