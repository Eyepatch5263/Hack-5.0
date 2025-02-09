"use client"
import React from 'react'
import ReusableTime from './ui/ReusableTime'

const Timing = () => {
    const DayFirst="3";
    const DaySecond="0";
    return (
        <div className='w-screen bg-gray-500 h-[13rem] items-center flex flex-col justify-center'>
            <h1 className='font-bold text-xl text-orange-500  md:text-5xl text-center mb-2'>
                TIME LEFT
            </h1>
            <div className='flex justify-center'>
            <ReusableTime type='Days' firstDigit={DayFirst} secondDigit={DaySecond}/>
            <ReusableTime type='Hours' firstDigit={DayFirst} secondDigit={DaySecond}/>
            <ReusableTime type='Min' firstDigit={DayFirst} secondDigit={DaySecond}/>
            <ReusableTime type='Sec' firstDigit={DayFirst} secondDigit={DaySecond}/>
            </div>
            
            
        </div>
    )
}

export default Timing
