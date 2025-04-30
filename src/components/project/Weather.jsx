import { useState, useEffect } from "react";
import { useDebounce } from "../useDebounce/Debounce";

const Weather = () => {
    const key = import.meta.env.VITE_WEATHER_API_KEY;

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    const debouncedCity = useDebounce(city, 500);

    useEffect(() => {
        const fetchWeather = async (city) => {
            try {
                const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
                const response = await fetch(baseURL);
                if (!response.ok) {
                    throw new Error('City not found');
                }
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error(error.message);
            }
        }

        if (debouncedCity) {
            fetchWeather(debouncedCity);
        }

    }, [debouncedCity, key])

    return (
        <div>
            <h1>Weather App</h1>
            <input type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
            {weather && (
                <div>
                    <h2>Weather in {weather.name}</h2>
                    <p>Temperature: {weather.main.temp} K</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    )

}

export default Weather;