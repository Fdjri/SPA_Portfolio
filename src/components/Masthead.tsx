'use client';

import React, { useState, useEffect } from 'react';
import './Masthead.css';

interface WeatherData {
  temp: number;
  description: string;
  location: string;
}

export default function Masthead() {
  const [currentDate, setCurrentDate] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData>({
    temp: 26, // Default temp in Celsius
    description: 'Mostly Sunny',
    location: 'Malang, Indonesia'
  });
  const [isLoadingWeather, setIsLoadingWeather] = useState(true);

  useEffect(() => {
    // Set date client-side to avoid hydration mismatch
    setCurrentDate(new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));

    const fetchWeather = async () => {
      try {
        // 1. Get location from IP
        const geoRes = await fetch('https://get.geojs.io/v1/ip/geo.json');
        if (!geoRes.ok) throw new Error('Geo fetch failed');
        const geoData = await geoRes.json();

        const lat = geoData.latitude;
        const lon = geoData.longitude;
        const city = geoData.city || 'Unknown';
        const country = geoData.country || '';
        const locationString = city && country ? `${city}, ${country}` : 'Malang, Indonesia';

        // 2. Get real-time weather from Open-Meteo (defaults to Celsius)
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        if (!weatherRes.ok) throw new Error('Weather fetch failed');
        const weatherData = await weatherRes.json();

        const currentTemp = Math.round(weatherData.current_weather.temperature);
        const weatherCode = weatherData.current_weather.weathercode;

        // Simple WMO weather code mapping
        let desc = 'Clear';
        if (weatherCode === 1 || weatherCode === 2 || weatherCode === 3) desc = 'Partly Cloudy';
        if (weatherCode >= 45 && weatherCode <= 48) desc = 'Foggy';
        if (weatherCode >= 51 && weatherCode <= 67) desc = 'Rainy';
        if (weatherCode >= 71 && weatherCode <= 77) desc = 'Snowy';
        if (weatherCode >= 80 && weatherCode <= 82) desc = 'Rain Showers';
        if (weatherCode >= 95 && weatherCode <= 99) desc = 'Thunderstorm';

        setWeather({
          temp: currentTemp,
          description: desc,
          location: locationString
        });
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
        // Silently fallback to defaults
      } finally {
        setIsLoadingWeather(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <header className="masthead">
      <div className="masthead-top">
        <div className="weather-widget">
          <span>Vol. I, No. 1</span>
          <span>&bull;</span>
          <span>{weather.location}</span>
          <span>&bull;</span>
          <span className="weather-detail">
            {isLoadingWeather ? 'Fetching weather...' : `${weather.temp}\u00B0C \u2014 ${weather.description} with a 100% chance of clean architecture`}
          </span>
        </div>
        <div className="date-display">{currentDate || '...'}</div>
        <div className="edition">Late Edition</div>
      </div>

      <div className="masthead-title-container">
        <h1 className="masthead-title">Fadjri's Portfolio</h1>
      </div>

      <div className="masthead-bottom">
        <div className="tagline">"All the Projects Fit to Print"</div>
        <div className="price">One Dollar</div>
      </div>

      <div className="stock-ticker">
        <div className="ticker-content">
          <span className="ticker-track">
            <span className="ticker-item"><span className="ticker-symbol">NEXT.JS</span> <span className="ticker-arrow bullish">&#9650;</span> BULLISH</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">FLUTTER</span> <span className="ticker-arrow bullish">&#9650;</span> STABLE</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">LARAVEL</span> <span className="ticker-arrow bullish">&#9650;</span> STRONG</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">ACADEMIC.GPA</span> <span className="ticker-arrow bullish">&#9650;</span> 3.89</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">BUG.RATE</span> <span className="ticker-arrow bearish">&#9660;</span> 0.02%</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">BPS_RW.APP</span> <span className="ticker-arrow bullish">&#9650;</span> DEPLOYED</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">TFT.SET17.META</span> <span className="ticker-arrow bullish">&#9650;</span> UNLOCKED</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">MYSQL</span> <span className="ticker-arrow bullish">&#9650;</span> SOLID</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">FIGMA</span> <span className="ticker-arrow bullish">&#9650;</span> CREATIVE</span>
            <span className="ticker-divider">|</span>
          </span>
          <span className="ticker-track" aria-hidden="true">
            <span className="ticker-item"><span className="ticker-symbol">NEXT.JS</span> <span className="ticker-arrow bullish">&#9650;</span> BULLISH</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">FLUTTER</span> <span className="ticker-arrow bullish">&#9650;</span> STABLE</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">LARAVEL</span> <span className="ticker-arrow bullish">&#9650;</span> STRONG</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">ACADEMIC.GPA</span> <span className="ticker-arrow bullish">&#9650;</span> 3.89</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">BUG.RATE</span> <span className="ticker-arrow bearish">&#9660;</span> 0.02%</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">BPS_RW.APP</span> <span className="ticker-arrow bullish">&#9650;</span> DEPLOYED</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">TFT.SET16.META</span> <span className="ticker-arrow bullish">&#9650;</span> UNLOCKED</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">MYSQL</span> <span className="ticker-arrow bullish">&#9650;</span> SOLID</span>
            <span className="ticker-divider">|</span>
            <span className="ticker-item"><span className="ticker-symbol">FIGMA</span> <span className="ticker-arrow bullish">&#9650;</span> CREATIVE</span>
            <span className="ticker-divider">|</span>
          </span>
        </div>
      </div>
    </header>
  );
}
