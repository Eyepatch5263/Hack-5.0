"use client"
import React from 'react'
interface Timing{
    firstDigit: string;
    secondDigit: string;
    type:string
}
const ReusableTime = ({firstDigit,secondDigit, type}:Timing) => {
    return (
        <div className='flex flex-col mx-2 items-center justify-center'>
            <div className='mb-2'>
                <h1 className='md:text-3xl text-xl'>
                    {type}
                </h1>
            </div>
            <div className='flex space-x-2'>
                <div className='bg-slate-200 p-2'>
                    <h2 className='md:text-2xl font-bold'>{firstDigit}</h2>
                </div>
                <div className='bg-slate-200 p-2'>
                    <h2 className='text-2xl font-bold'>{secondDigit}</h2>
                </div>
            </div>
            
        </div>
    )
}

export default ReusableTime
