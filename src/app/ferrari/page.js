"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import ImageGallery from '../components/ImageGallery'
import Table from '../components/Table'
import { title } from 'process';

export default function Page() {

    const f1Url = "https://cdn.racingnews365.com/_1394x783_crop_center-center_80_none"

    const [ImageArr, setImageArr] = useState([
        // `${f1Url}/SO_2023_Head_on_lowv2_1024x768.jpg?v=1676372708`,
        // `${f1Url}/SO_2023_Rear_3_4_1024x768.jpg?v=1676372705`,
        // `${f1Url}/Fo7APSvWAAEuEBw.jpg?v=1676372229`,
        // `${f1Url}/Fo7APSwWAAItXPb.jpg?v=1676372232`,
        // `${f1Url}/SO_2023_Dead_Rear_high_close1_1024x768.jpg?v=1676372710`,
        // `${f1Url}/SO_2023_Head_on_high_1024x768.jpg?v=1676372712`,
        // `${f1Url}/Fo67zHcXEAAK2qE.jpg?v=1676371932`,
        // `${f1Url}/Fo6-_tpXwAAHr-1.jpg?v=1676371942`,
        // `${f1Url}/SF_2023_Front3_4_team_1024x768.jpg?v=1676372707`,


        `/ferrari/f3.jpg`,
        // `/ferrari/f2.jpg`,
        `/ferrari/f1.jpeg`,
        `/ferrari/f5.jpg`,
        // `/ferrari/f6.jpg`,
        `/ferrari/f8.jpg`,
        `/ferrari/f10.jpg`,
        `/ferrari/f11.jpg`,
        `/ferrari/f12.jpg`,
        `/ferrari/f13.jpg`,
        `/ferrari/f14.jpg`,
    ]);

    const chasisInfo = [
        {
            "title": "Power Unit type",
            "info": "Ferrari 066/10, 1.6L turbocharged V6 hybrid engine with Energy Recovery System (ERS)"
        },
        {
            "title": "Monocoque",
            "info": "Carbon fiber and honeycomb composite structure"
        },
        {
            "title": "Safety structures",
            "info": "Front and rear crash structures, carbon fiber survival cell, halo device"
        },
        {
            "title": "Bodywork",
            "info": "Lightweight carbon fiber with aerodynamic sculpting and cooling inlets"
        },
        {
            "title": "Front suspension",
            "info": "Double wishbone push-rod activated torsion springs"
        },
        {
            "title": "Rear suspension",
            "info": "Multilink pull-rod suspension with torsion springs"
        },
        {
            "title": "Weight",
            "info": "Minimum 798 kg, including the driver and onboard cameras, excluding fuel"
        },
        {
            "title": "Weight distribution between",
            "info": "Within the FIA-regulated range for optimized balance"
        },
        {
            "title": "Electronics",
            "info": "FIA-standard ECU, telemetry systems, and integrated control electronics"
        },
        {
            "title": "Instruments",
            "info": "Digital dashboard with steering wheel-mounted controls and multi-function displays"
        },
        {
            "title": "Brake system",
            "info": "Carbon fiber discs and pads, hydraulic brake-by-wire rear system"
        },
        {
            "title": "Tyres",
            "info": "Pirelli P Zero slicks and Cinturato intermediate/wet tyres (13-inch wheel rims)"
        },
        {
            "title": "Race wheels",
            "info": "Forged magnesium wheels with wheel covers"
        },
        {
            "title": "Cooling systems",
            "info": "Optimized radiators for engine and ERS cooling, integrated into the side pods"
        },
        {
            "title": "INTERNAL COMBUSTION ENGINE",
            "info": ""
        },
        {
            "title": "Capacity",
            "info": "1.6 liters"
        },
        {
            "title": "Cylinders",
            "info": "6 cylinders in V configuration"
        },
        {
            "title": "Bank angle",
            "info": "90 degrees"
        },
        {
            "title": "No of valves",
            "info": "4 valves per cylinder (24 total)"
        },
        {
            "title": "Max speed",
            "info": "15,000 RPM (regulated by FIA)"
        },
        {
            "title": "Max fuel flow rate",
            "info": "100 kg/hour above 10,500 RPM"
        },
        {
            "title": "Fuel injection",
            "info": "High-pressure direct injection (up to 500 bar)"
        },
        {
            "title": "Pressure charging",
            "info": "Single turbocharger with MGU-H integration"
        },
        {
            "title": "Instruments",
            "info": "Digital dashboard with telemetry integration and steering wheel multi-function controls"
        },
        {
            "title": "Brake system",
            "info": "Carbon fiber discs and pads, hydraulic brake-by-wire system at the rear"
        },
        {
            "title": "Tyres",
            "info": "Pirelli P Zero slick tyres for dry conditions"
        },
        {
            "title": "",
            "info": "Cinturato intermediates and wets for wet conditions"
        },
        {
            "title": "Race wheels",
            "info": "Forged magnesium wheels with aero covers (13-inch rims as per FIA regulations)"
        },
        {
            "title": "Cooling systems",
            "info": "Advanced radiators for engine, turbocharger, and ERS cooling"
        },
        {
            "title": "",
            "info": "Integrated within the side pods for aerodynamic efficiency"
        }
    ]

    const updateState = (imgArr) => {
        setImageArr(imgArr)
    }

    return (
        <div >
            <div>
                <NavBar />
            </div>
            <div className='flex flex-col justify-center items-center mt-8'>
                <b className=" text-lg md:text-4xl text-ferrari_red font-F1W">Scuderia Ferrari</b>
                <ImageGallery imgArr={ImageArr} handleState={updateState} color={'#A6051A'} />
            </div>
            <div className='font-F1R flex justify-center pb-8'>
                <div className='w-10/12'>
                    <div>
                        The Ferrari SF23 is a Formula One race car developed and constructed by Scuderia Ferrari to compete in the 2023 Formula One World Championship. It is driven by Charles Leclerc and Carlos Sainz Jr. Designed to build on Ferrari&apos;s competitive edge, the SF23 incorporates advanced aerodynamics and a hybrid power unit, aiming to challenge for victories throughout the season.
                    </div>
                    <div>
                        Lets have a deeper look into the SF23:
                    </div>
                </div>
            </div>
            <Table tableName={"Chasis"} chasisInfo={chasisInfo} color={'#A6051A'} />
        </div>
    )
}
