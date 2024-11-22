"use client"

import React, { useState } from 'react'
import NavBar from '../components/NavBar'

export default function page() {

    const [type, setType] = useState('Click to know more')

    return (
        <div>
            <div>
                <NavBar />
            </div>
            
            <div className='py-8 flex flex-col justify-center items-center gap-6'>
            <div className=" text-3xl text-black font-F1W">
                   LETS BREAK DOWN 
                </div>
                <div className='relative' style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                    {/* <button onClick={() => console.log('Xray')} type="button" className='bg-transparent hover:bg-opacity-50 absolute top-[7%] left-[5%] w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transform -translate-x-1/2 -translate-y-1/2' >
                        <img src='/icons/before-after.png' className='w-7 h-7'/>
                    </button> */}
                    <img className={`h-fit rounded-3xl w-full border-8 border-l-0 border-b-0`} src={'/basic/b1.jpg'} alt="Main Image" />
                    <button onClick={() => setType('Halo')} type="button" className='bg-blue-500 bg-opacity-30 hover:bg-blue-600 hover:bg-opacity-50 border-4 border-blue-500 hover:border-blue-600 hover:border-opacity-60 absolute top-[24%] left-[55%] rounded-full w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transform -translate-x-1/2 -translate-y-1/2' />
                    <button onClick={() => setType('Engine Intake Top')} type="button" className='bg-blue-500 bg-opacity-30 hover:bg-blue-600 hover:bg-opacity-50 border-4 border-blue-500 hover:border-blue-600 hover:border-opacity-60 absolute top-[18%] left-[61.75%] rounded-full w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transform -translate-x-1/2 -translate-y-1/2' />
                    <button onClick={() => setType('Engine Intake Side')} type="button" className='bg-blue-500 bg-opacity-30 hover:bg-blue-600 hover:bg-opacity-50 border-4 border-blue-500 hover:border-blue-600 hover:border-opacity-60 absolute top-[38%] left-[40%] rounded-full w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transform -translate-x-1/2 -translate-y-1/2' />
                    <button onClick={() => setType('Suspension')} type="button" className='bg-blue-500 bg-opacity-30 hover:bg-blue-600 hover:bg-opacity-50 border-4 border-blue-500 hover:border-blue-600 hover:border-opacity-60 absolute top-[46%] left-[29%] rounded-full w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transform -translate-x-1/2 -translate-y-1/2' />
                    <button onClick={() => setType('Brake Cooling Duct') } type="button" className='bg-blue-500 bg-opacity-30 hover:bg-blue-600 hover:bg-opacity-50 border-4 border-blue-500 hover:border-blue-600 hover:border-opacity-60 absolute top-[52%] left-[23.5%] rounded-full w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transform -translate-x-1/2 -translate-y-1/2' />
                    <button onClick={() => setType('Tyres')} type="button" className='bg-blue-500 bg-opacity-30 hover:bg-blue-600 hover:bg-opacity-50 border-4 border-blue-500 hover:border-blue-600 hover:border-opacity-60 absolute top-[52%] left-[60%] rounded-full w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transform -translate-x-1/2 -translate-y-1/2' />
                    <button onClick={() => setType('Front Wing')} type="button" className='bg-blue-500 bg-opacity-30 hover:bg-blue-600 hover:bg-opacity-50 border-4 border-blue-500 hover:border-blue-600 hover:border-opacity-60 absolute top-[82%] left-[42%] rounded-full w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transform -translate-x-1/2 -translate-y-1/2' />
                    <button onClick={() => setType('Rear Wing')} type="button" className='bg-blue-500 bg-opacity-30 hover:bg-blue-600 hover:bg-opacity-50 border-4 border-blue-500 hover:border-blue-600 hover:border-opacity-60 absolute top-[10%] left-[85%] rounded-full w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transform -translate-x-1/2 -translate-y-1/2' />
                    <button onClick={() => setType('DRS')} type="button" className='bg-blue-500 bg-opacity-30 hover:bg-blue-600 hover:bg-opacity-50 border-4 border-blue-500 hover:border-blue-600 hover:border-opacity-60 absolute top-[13%] left-[75%] rounded-full w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transform -translate-x-1/2 -translate-y-1/2' />
                    <button onClick={() => setType('Double Barrel')} type="button" className='bg-blue-500 bg-opacity-30 hover:bg-blue-600 hover:bg-opacity-50 border-4 border-blue-500 hover:border-blue-600 hover:border-opacity-60 absolute top-[24%] left-[77%] rounded-full w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transform -translate-x-1/2 -translate-y-1/2' />
                </div>

            </div>
        </div>
    )
}
