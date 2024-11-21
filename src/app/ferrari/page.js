"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import ImageGallery from '../components/ImageGallery'
import Table from '../components/Table'
import { title } from 'process';

export default function Page() {

    const f1Url = "https://cdn.racingnews365.com/_1394x783_crop_center-center_80_none"

    const [ImageArr, setImageArr] = useState([
        `${f1Url}/SO_2023_Head_on_lowv2_1024x768.jpg?v=1676372708`,
        `${f1Url}/SO_2023_Rear_3_4_1024x768.jpg?v=1676372705`,
        `${f1Url}/Fo7APSvWAAEuEBw.jpg?v=1676372229`,
        `${f1Url}/Fo7APSwWAAItXPb.jpg?v=1676372232`,
        `${f1Url}/SO_2023_Dead_Rear_high_close1_1024x768.jpg?v=1676372710`,
        `${f1Url}/SO_2023_Head_on_high_1024x768.jpg?v=1676372712`,
        `${f1Url}/Fo67zHcXEAAK2qE.jpg?v=1676371932`,
        `${f1Url}/Fo6-_tpXwAAHr-1.jpg?v=1676371942`,
        `${f1Url}/SF_2023_Front3_4_team_1024x768.jpg?v=1676372707`,
    ]);

    const chasisInfo = [
        // {
        //     title: "Power Unit type",
        //     info: ""
        // },
        // {
        //     title: "Monocoque",
        //     info: "Carbon-fibre composite, incorporating driver controls and fuel cell  "
        // },
        // {
        //     title: "Safety structures",
        //     info: ""
        // },
        // {
        //     title: "Bodywork",
        //     info: "Carbon fiber composite materials including the nose, engine cover, side pods, floor, and wings, optimized for aerodynamics and weight efficiency."
        // },
        // {
        //     title: "Front suspension",
        //     info: "Push-rod actuated torsion springs"
        // },
        // {
        //     title: "Rear suspension",
        //     info: "Carbon-fibre / titanium suspension legs, pullrod operating inboard torsion bar, spring and damper system"
        // },
        // {
        //     title: "Weight",
        //     info: "Overall vehicle weight 798 kg (including driver, excluding fuel)  "
        // },
        // {
        //     title: "Weight distribution between ",
        //     info: "44.6% and 46.1% on front axle  "
        // },
        // {
        //     title: "Electronics",
        //     info: "McLaren Applied. Including chassis control, power unit control, data acquisition, sensors, data analysis  "
        // },
        // {
        //     title: "Instruments",
        //     info: "McLaren Applied steering wheel display  "
        // },
        // {
        //     title: "Brake system",
        //     info: "Six piston brake calipers with front / rear master cylinders. ‘Brake by wire’ rear brake control system. Carbon-carbon ventilated discs and pads  "
        // },
        // {
        //     title: "Tyres",
        //     info: "Pirelli P Zero F1. Now with an additional compound, the C0 – bringing our total to six compounds in the pool. Pirelli select three for each event. "
        // },
        // {
        //     title: "Race wheels",
        //     info: "BBS standardised design 18” magnesium wheels"
        // },
        // {
        //     title: "Cooling systems",
        //     info: "Charge air, engine oil, gearbox oil, hydraulic oil, water, and ERS cooling systems  "
        // },
        {
            title: "INTERNAL COMBUSTION ENGINE",
            info: ""
        }, 
        // {
        //     title: "Capacity",
        //     info: "1.6 litres"
        // },
        // {
        //     title: "Cylinders",
        //     info: "Six"
        // },
        // {
        //     title: "Bank angle",
        //     info: "Bank angle"
        // },
        // {
        //     title: "No of valves",
        //     info: "24"
        // },
        // {
        //     title: "Max speed",
        //     info: "15,000 rpm"
        // },
        // {
        //     title: "Max fuel flow rate",
        //     info: "100kg/hour (above 10,500 rpm)"
        // },
        // {
        //     title: "Fuel injection",
        //     info: "High-pressure direct injection (max 500 bar, one injector/cylinder)  "
        // },
        // {
        //     title: "Pressure charging",
        //     info: "Single-stage compressor and exhaust turbine, on a common shaft  "
        // },
        // {
        //     title: " ",
        //     info: "Max rpm Exhaust Turbine 125,000 rpm "
        // },
        // {
        //     title: "Instruments",
        //     info: "McLaren Applied steering wheel display  "
        // },
        // {
        //     title: "Brake system",
        //     info: "Six piston brake calipers with front / rear master cylinders. ‘Brake by wire’ rear brake control system. Carbon-carbon ventilated discs and pads  "
        // },
        // {
        //     title: "Tyres",
        //     info: "Pirelli P Zero F1. Now with an additional compound, the C0 – bringing our total to six compounds in the pool. Pirelli select three for each event. "
        // },
        // {
        //     title: "Race wheels",
        //     info: "BBS standardised design 18” magnesium wheels"
        // },
        // {
        //     title: "Cooling systems",
        //     info: "Charge air, engine oil, gearbox oil, hydraulic oil, water, and ERS cooling systems  "
        // },
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
                <b className=" text-4xl text-ferrari_red font-F1W">Scuderia Ferrari</b>
                <ImageGallery imgArr={ImageArr} handleState={updateState} color={'#A6051A'}/>
            </div>
            <div className='font-F1R flex justify-center pb-8'>
                <div className='w-10/12'>
                    <div>
                    The Ferrari SF23 is a Formula One race car developed and constructed by Scuderia Ferrari to compete in the 2023 Formula One World Championship. It is driven by Charles Leclerc and Carlos Sainz Jr. Designed to build on Ferrari's competitive edge, the SF23 incorporates advanced aerodynamics and a hybrid power unit, aiming to challenge for victories throughout the season.
                    </div>
                    <div>
                        Lets have a deeper look into the SF23:
                    </div>
                </div>
            </div>
            <Table tableName={"Chasis"} chasisInfo={chasisInfo} color={'#A6051A'}/>
        </div>
    )
}
