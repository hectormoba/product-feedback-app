import React from 'react'
import { default as Field } from '@/blocks/TextField'
import PropTypes from 'prop-types'
import { FilterOptions } from '@/utils/content/groups'

const TextField = ({ Input, title, label, list }) => {
  const renderDataList = () => {
    if (list) {
      return (
        <datalist id={list}>
          {FilterOptions.map((element) => (
            <option key={element} value={element} />
          ))}
        </datalist>
      )
    } else {
      return null
    }
  }

  return (
    <Field>
      <Field.Title>{title}</Field.Title>
      <label>
        <Field.Label>{label}</Field.Label>
        <Input list={list} />
      </label>
      <Field.Helper>Error</Field.Helper>
      {renderDataList()}
    </Field>
  )
}

TextField.propTypes = {
  Input: PropTypes.object,
  title: PropTypes.string,
  label: PropTypes.string,
  list: PropTypes.string,
}

export default TextField
