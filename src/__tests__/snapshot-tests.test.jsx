import { render } from '@testing-library/react'
import { describe, expect, test, beforeEach } from 'vitest'
import CurrentWeather from '../components/CurrentWeather/CurrentWeather.jsx'
import Search from '../components/Search/Search.jsx'
import mockData from '../Data/mockData.jsx'

describe('Snapshot', () => {
  const onSearch = () => {
    return 'ok'
  }
  test('testing if Search component is rendered', () => {
    const component = render(<Search onSearchChange={onSearch} />)
    expect(component).toMatchSnapshot()
  })
  test('testing if current weather component is rendered', () => {
    const component = render(<CurrentWeather data={mockData} />)
    expect(component).toMatchSnapshot()
  })
})
