'use client';

import { useState } from 'react';
import Input from './components/Input';
import Current from './components/Current';
import Forecast from './components/Forecast';
import Details from './components/Details';

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const url = `http://api.weatherapi.com/v1/forecast.json?key=b362ffd959574e4487e160424240401&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation('');
        setError('');
      } catch (error) {
        setError('City not found');
        setData({});
      }
    }
  };
  let content;
  if (Object.keys(data).length === 0 && error === '') {
    content = (
      <div>
        <h2>Welcome to the weather app</h2>
      </div>
    );
  } else if (error !== '') {
    content = (
      <div>
        <p>City not Found</p>
        <p>Enter a valid city</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className='flex md:flex-row flex-col p-12 items-center justify-between'>
          <Current data={data} />
          <Forecast data={data} />
        </div>
        <div>
          <Details data={data} />
        </div>
      </>
    );
  }
  return (
    <main className='bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit'>
      <div className='bg-white/25 w-full flex flex-col h-fit'>
        {/* Input and logo */}
        <div className='flex flex-col md:flex-row justify-between items-center p-12'>
          <Input setLocation={setLocation} handleSearch={handleSearch} />
          <h1 className='mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold'>
            Weather Search.
          </h1>
        </div>
        {content}
      </div>
    </main>
  );
}
