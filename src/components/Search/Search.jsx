import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, USERNAME } from '../../Data/api'

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null)
  const handleChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }
  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/searchJSON?q=${inputValue}&maxRows=5&username=${USERNAME}`,
      )
      const result = await response.json()
      return {
        options: result.geonames.map((city) => {
          return {
            label: `${city.name} - ${city.countryName}`,
            value: `${city.lat} ${city.lng}`,
          }
        }),
      }
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div className="w-full mt-10">
      <AsyncPaginate
        className="w-[80%] md:w-[50%] lg:w-[50%] m-auto"
        placeholder="Search for a city..."
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </div>
  )
}

export default Search
