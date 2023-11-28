import { useEffect, useState } from "react";
import api from "../../config/axios";

type WeatherData = {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    isDay: number;
    condition: {
      code: number;
      icon: string;
      text: string;
    };
  };
};

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              const response = await api.get(
                `https://api.weatherapi.com/v1/current.json?key=8ea0e5063e67415293c144449231311&q=${latitude},${longitude}&aqi=no`,
                { withCredentials: false }
              );

              setWeather(response.data);
            },
            (err) => {
              console.log(err);
            }
          );
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full items-center justify-center">
      {weather && (
        <>
          <span className="pt-4 flex items-center gap-2">
            {weather.current.condition.text}
            <img src={weather.current.condition.icon} alt="Weather condition" />
          </span>
          <span className="text-[5.8rem] font-mono font-bold leading-[6.4rem]">
            {Math.round(weather.current.temp_c)}&deg;C
          </span>
          <span className="pt-4">
            {weather.location.name}, {weather.location.country}
          </span>
        </>
      )}
    </div>
  );
};

export default Weather;
