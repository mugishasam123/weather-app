import React from 'react'

const CurrentWeather = ({ data }) => {
  const { city, weather, main, wind } = data
  return (
    <div className="w-full mt-5">
      <div className="w-[70%] md:w-[40%] lg:w-[40%] m-auto border border-3 bg-gray-100 shadow-lg rounded-md flex flex-col px-4 py-2 pb-10">
        <div className="flex justify-between">
          <div className="mt-6">
            <h3 className="text-2xl font-bold">{city}</h3>
            <p className="text-md">{weather[0].description}</p>
          </div>
          <img
            alt="weather"
            className="w-[30%]"
            src={`icons/${weather[0].icon}.png`}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <h3 className="text-5xl font-bold self-center">
            {Math.round(main.temp)}° C
          </h3>
          <div>
            <h4 className="font-bold underline">Details</h4>
            <div className="flex justify-between">
              <p>Feels like:</p>
              <p className="font-bold">{Math.round(main.feels_like)}° C</p>
            </div>
            <div className="flex justify-between">
              <p>Wind:</p>
              <p className="font-bold">{wind.speed} m/s</p>
            </div>
            <div className="flex justify-between">
              <p>Humidity:</p>
              <p className="font-bold">{main.humidity} %</p>
            </div>
            <div className="flex justify-between">
              <p>Pressure:</p>
              <p className="font-bold">{main.pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
