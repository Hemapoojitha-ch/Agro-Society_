import React from 'react'
import {useState} from 'react';
import search from './../assets/icons/search.svg';
import { useStateContext } from './../Context'
import { WeatherCard, MiniCard } from './../pages'
export default function weather() {
  const [input, setInput] = useState('')
  const { weather, thisLocation, values, place, setPlace } = useStateContext()
  const submitCity=() =>{
    setPlace(input)
    setInput('')
  }
  return (
    <div className='w-full text-black px-8'>
      <nav className='w-full max-w-8xl mx-auto p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-green-800 text-2xl p-2'>Live Weather</h1>
        <div className='bg-green-200 w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input onKeyUp={(e) => {
            if (e.key === 'Enter') {
              submitCity()
            }
          }} type="text" placeholder=' Search city' className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)} />
        </div>
      </nav>
      
      <main className='w-full flex text-basis flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />

        <div className='flex text-sm font-bold justify-center gap-8 flex-wrap w-[60%]'>
          {
            values?.slice(1, 7).map(curr => {
              return (
                <MiniCard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              )
            })
          }
        </div>
      </main>
    </div>
  )
}
