import { render, screen } from '@testing-library/react'
import { describe, expect, test, beforeEach } from 'vitest'
import CurrentWeather from '../components/CurrentWeather/CurrentWeather.jsx'
import mockData from '../Data/mockData.jsx'

describe('Current weather components', () => {
  beforeEach(() => {
    const component = render(<CurrentWeather data={mockData} />)
    return component
  })

  test('testing if it renders city name', () => {
    const city = screen.getByText(/kigali/i)
    expect(city).toBeTruthy()
  })
  test('testing if it renders weather description', () => {
    const description = screen.getByText(/cold/i)
    expect(description).toBeTruthy()
  })
  test('testing if it renders temperature', () => {
    const temperature = screen.getByText(/20/i)
    expect(temperature).toBeTruthy()
  })
})
