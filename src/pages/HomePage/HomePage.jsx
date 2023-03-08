import { useState, useEffect } from 'react'
import Search from '../../components/Search/Search'
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather'
import Nav from '../../components/Nav/Nav'
import { WEATHER_API_KEY, WEATHER_API_URL } from '../../Data/api'

const HomePage = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null)

  const fetchWeatherData = async (lat, long) => {
    const response = await fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`,
    )
    return response.json()
  }
  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(' ')
    fetchWeatherData(lat, long).then((response) => {
      setCurrentWeatherData({ city: searchData.label, ...response })
    })
  }

  return (
    <div>
      <Nav />
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeatherData && <CurrentWeather data={currentWeatherData} />}
    </div>
  )
}

export default HomePage
