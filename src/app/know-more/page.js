"use client"

import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { knowMore } from '../../assets/knowMore'
import ContentKnowMore from '../components/ContentKnowMore'


export default function Page() {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Client-only code
        }
    }, []);


    const [type, setType] = useState('')
    const [src, setSrc] = useState('/basic/b1.jpg')

    const buttonStyle = "bg-site_text bg-opacity-30 hover:bg-red-700 hover:bg-opacity-50 border-2 sm:border-2 md:border-4 border-site_text hover:border-site_text hover:border-opacity-60 absolute rounded-full w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 2xl:w-14 2xl:h-14 transform -translate-x-1/2 -translate-y-1/2"

    const handleButtonClick = (type) => {
        setSrc(knowMore[type].src)
        setType(type)
    }

    const handleGoBack = () => {
        setType('')
        setSrc('/basic/b1.jpg')
    }

    return (
        <div>
            <div>
                <NavBar type={'knowMore'} />
            </div>

            <div className='w-full flex flex-col items-center' >
            <div className='p-14 pt-8 pb-0 grid sm:grid-cols-1 xl:grid-cols-2 xl:grid-cols-[30%_70%] gap-4 items-center justify-items-center font-F1R border-box text-[8px] xs:text-[8px] sm:text-[14px] max-w-screen-2xl'>
                <div className='flex gap-4 flex-col'>
                    <div className="  text-lg md:text-4xl text-black font-F1W text-site_text">
                        LETS BREAK IT DOWN
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div>
                            Welcome to the interactive F1 car exploration! Hover over different parts of the car to discover key components and their functions.
                            Each section, from the Halo Device to the Tyres, plays a crucial role in the performance, safety, and speed of the car.
                        </div>
                        <div>
                            Simply move your mouse over the labeled areas, and click it to get a detailed information about that specific part.
                            Whether you&apos;re curious about the aerodynamics of the spoilers or the power behind the engine, this interactive guide will give you a deeper understanding of what makes an F1 car a marvel of engineering.</div>
                    </div>
                </div>
                <div className='relative w-full h-auto max-h-full-[1200px]' style={{ margin: '0 auto' }}>
                    {type !== '' &&
                        <button onClick={() => handleGoBack()} type="button" className='bg-transparent hover:bg-opacity-50 absolute top-[7%] left-[5%] w-3 h-3 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transform -translate-x-1/2 -translate-y-1/2' >
                            <img src='/icons/back.svg' className='w-3 h-3 md:w-7 md:h-7' />
                        </button>
                    }
                    <img className='h-fit rounded-xl w-full' src={src} alt="Main Image" />
                    {type == '' &&
                        <div>
                            <button data-tooltip-target="tooltip-animation" type="button" className={`${buttonStyle} top-[24%] left-[55%]`} onClick={() => handleButtonClick('Halo')} />
                            <button data-tooltip-target="tooltip-animation" type="button" className={`${buttonStyle} top-[18%] left-[61.75%]`} onClick={() => handleButtonClick('TopAirIntake')} />
                            <button data-tooltip-target="tooltip-animation" type="button" className={`${buttonStyle} top-[38%] left-[40%]`} onClick={() => handleButtonClick('SideAirIntake')} />
                            <button data-tooltip-target="tooltip-animation" type="button" className={`${buttonStyle} top-[46%] left-[29%]`} onClick={() => handleButtonClick('Suspension')} />
                            <button data-tooltip-target="tooltip-animation" type="button" className={`${buttonStyle} top-[52%] left-[23.5%]`} onClick={() => handleButtonClick('BrakeCoolingDuct')} />
                            <button data-tooltip-target="tooltip-animation" type="button" className={`${buttonStyle} top-[52%] left-[60%]`} onClick={() => handleButtonClick('Tyres')} />
                            <button data-tooltip-target="tooltip-animation" type="button" className={`${buttonStyle} top-[82%] left-[42%]`} onClick={() => handleButtonClick('FrontWing')} />
                            <button data-tooltip-target="tooltip-animation" type="button" className={`${buttonStyle} top-[12%] left-[77%]`} onClick={() => handleButtonClick('RearWing')} />
                            <button data-tooltip-target="tooltip-animation" type="button" className={`${buttonStyle} top-[40%] left-[76%]`} onClick={() => handleButtonClick('Body')} />
                        </div>
                    }
                </div>
            </div>

            {knowMore[type]?.description.length > 1 &&
                <ContentKnowMore description={knowMore[type]?.description} />
            }
            </div>
        </div>
    )
}
