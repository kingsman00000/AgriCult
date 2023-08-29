import React, { useEffect, useState } from 'react'
import WeatherCard from '../components/WeatherCard'

const Weather = () => {
   
    const [city,setCity] = useState("mumbai")
    const [currCity,setCurrCity] = useState(city)
    const [currCityData,setCurrCityData] = useState({})
    const handleChange = (e) => {
        setCity(e.target.value)   
    }
    const handleSubmit = (e) => {
        setCurrCity(city)   
    }
    // options for fetching
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fd63e55df8mshb68a73286c0d745p1cfadajsn97d6b7b936c6',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

//fetching details
useEffect(()=>{

    const getWeather = async() => {

       await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then((response) => {
            setCurrCityData(response)
            console.log(response);
            
        })
        .catch(err => console.error(err));
    }
    getWeather();
}
    ,[currCity])


  return (
    <div>

    <div className='flex justify-center w-full fixed dark:border-gray-600 dark:bg-gray-900 items-center h-16'>
      <div className=''> <input type="text" className='border-2 rounded-xl p-1 w-96' value={city} onChange={(e)=> {handleChange(e)}} /> <button className='border-2 rounded-xl p-1 bg-blue-500 hover:bg-blue-300' onClick={() => {
          handleSubmit()
        }}>Search</button> </div>
      <div>
        
      </div>
    </div>
    <div className='flex justify-center items-center my-4 pt-24'>
        <WeatherCard value={currCityData.temp} property="temperature" />
    </div>
    <div className='flex justify-center items-center space-x-4 '>
    <div>
        <WeatherCard value={currCityData.max_temp} property="Max Temperature" key= {1}/>
        <WeatherCard value={currCityData.min_temp} property="Min Temperature" key={1} />
        <WeatherCard value={currCityData.humidity} property="Humidity" />
        <WeatherCard value={currCityData.cloud_pct} property="Cloud_pct" />
        
    </div>
    <div>
        <WeatherCard value={currCityData.sunrise} property="Sunrise" />
        <WeatherCard value={currCityData.sunset} property="Sunset" />
        <WeatherCard value={currCityData.wind_degrees} property="Wind Degrees" />
        <WeatherCard value={currCityData.wind_speed} property="Wind Speed" />
        
    </div>
    </div>
        </div>
  )
}

export default Weather
