"use client"

import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { knowMore } from '../../assets/knowMore'

export default function page() {

    const [type, setType] = useState('Click to know more')
    const [src, setSrc] = useState('/basic/b1.jpg')

    const buttonStyle = "bg-site_text bg-opacity-30 hover:bg-red-700 hover:bg-opacity-50 md:border-4 sm:border-2 border-site_text hover:border-site_text hover:border-opacity-60 absolute rounded-full sm:w-10 sm:h-10 md:w-12 md:h-12 2xl:w-14 2xl:h-14 transform -translate-x-1/2 -translate-y-1/2"

    const handleButtonClick = (type) => {
        // console.log("knowMore[type].src",knowMore[type] , type)
        setSrc(knowMore[type].src)
        setType(type)
    }

    const handleGoBack = () =>{
        setType('Click to know more')
        setSrc('/basic/b1.jpg')
    }

    return (
        <div>
            <div>
                <NavBar />
            </div>

            <div className='p-8 grid sm:grid-cols-1 xl:grid-cols-2 xl:grid-cols-[30%_max-content] justify-around items-center gap-4'>
                <div className='flex gap-4 flex-col'>
                    <div className=" text-3xl text-black font-F1W text-site_text">
                        LETS BREAK IT DOWN
                    </div>
                    <div className='flex flex-col gap-4 font-F1R text-lg'>
                        <div>Welcome to the interactive F1 car exploration! Hover over different parts of the car to discover key components and their functions. Each section, from the Halo Device to the Tyres, plays a crucial role in the performance, safety, and speed of the car.</div>
                        <div>Simply move your mouse over the labeled areas, and click it to get a detailed information about that specific part. Whether you're curious about the aerodynamics of the spoilers or the power behind the engine, this interactive guide will give you a deeper understanding of what makes an F1 car a marvel of engineering.</div>
                 </div>
                </div>
                <div className='relative' style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                   {type !== 'Click to know more' &&
                     <button onClick={() => handleGoBack()} type="button" className='bg-transparent hover:bg-opacity-50 absolute top-[7%] left-[5%] w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transform -translate-x-1/2 -translate-y-1/2' >
                     <img src='/icons/back.svg' className='w-7 h-7'/>
                 </button>
                   }
                    <img className={`h-fit rounded-3xl w-full border-8 border-l-0 border-b-0 border-color-`} src={src} alt="Main Image" />
                    {type == 'Click to know more' &&
                        <div>
                            <button data-tooltip-target="tooltip-animation" onClick={() => handleButtonClick('Halo')} type="button" className={` ${buttonStyle} top-[24%] left-[55%]`} />
                    <button data-tooltip-target="tooltip-animation" onClick={() => handleButtonClick('TopAirIntake')} type="button" className={` ${buttonStyle} top-[18%] left-[61.75%]`} />
                    <button data-tooltip-target="tooltip-animation" onClick={() => handleButtonClick('SideAirIntake')} type="button" className={` ${buttonStyle} top-[38%] left-[40%]`} />
                    <button data-tooltip-target="tooltip-animation" onClick={() => setType('Suspension')} type="button" className={` ${buttonStyle} top-[46%] left-[29%]`} />
                    <button data-tooltip-target="tooltip-animation" onClick={() => setType('Brake Cooling Duct')} type="button" className={` ${buttonStyle} top-[52%] left-[23.5%]`} />
                    <button data-tooltip-target="tooltip-animation" onClick={() => handleButtonClick('Tyres')} type="button" className={` ${buttonStyle} top-[52%] left-[60%]`} />
                    <button data-tooltip-target="tooltip-animation" onClick={() => setType('Front Wing')} type="button" className={` ${buttonStyle} top-[82%] left-[42%]`} />
                    <button data-tooltip-target="tooltip-animation" onClick={() => setType('Rear Wing')} type="button" className={` ${buttonStyle} top-[10%] left-[85%]`} />
                    <button data-tooltip-target="tooltip-animation" onClick={() => setType('DRS')} type="button" className={` ${buttonStyle} top-[13%] left-[75%]`} />
                    <button data-tooltip-target="tooltip-animation" onClick={() => setType('Double Barrel')} type="button" className={` ${buttonStyle} top-[24%] left-[77%]`} />
                            </div>
                    }

                </div>

            </div>
        </div>
    )
}
