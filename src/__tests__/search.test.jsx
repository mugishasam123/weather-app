import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Search from '../components/Search/Search.jsx'

describe('App components', () => {
  const onSearch = () => {
    return 'ok'
  }
  test('testing if Search component is rendered', () => {
    const component = render(<Search onSearchChange={onSearch} />)
    expect(component).toMatchSnapshot()
  })

  test('testing if input is in search component', () => {
    render(<Search onSearchChange={onSearch} />)
    const inputElement = screen.getByRole('combobox')
    expect(inputElement).toBeTruthy
  })
})
