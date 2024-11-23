"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import ImageGallery from '../components/ImageGallery'
import Table from '../components/Table'
import { title } from 'process';

export default function Page() {

    const f1Url = "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto,c_fill,q_auto,w_1320,g_faces,ar_16:9/content/dam/fom-website/manual/Misc/2023manual/Pre-season/February/MCL60"
    const amalgamCollectionUrl = "https://www.amalgamcollection.com/cdn/shop/files"

    const [ImageArr, setImageArr] = useState([
        `${f1Url}/5`,
        `${f1Url}/MCL60-LN4-Front-Facing-High-7K`,
        `${f1Url}/MCL60-LN4-High-7K`,
        `${f1Url}/MCL60-LN4-Overhead-7K`,
        `${f1Url}/MCL60-LN4-Side-7K`,
        `${f1Url}/MCL60-LN4-Rear-Low-7K`,
        `${amalgamCollectionUrl}/DSCF6455_4000x2677_crop_center.jpg`,
        `${amalgamCollectionUrl}/DSCF6445_4000x2677_crop_center.jpg`,
        // `${amalgamCollectionUrl}/DSCF6510_4000x2677_crop_center.jpg`,
        // `${amalgamCollectionUrl}/DSCF6451_01950db2-dfb6-44dd-b05a-8eb9f5f01ad2_4000x2677_crop_center.jpg`,

        `${f1Url}/3`,
        `${f1Url}/6`,
        // `${f1Url}/7`,
    ]);

    const chasisInfo = [
        {
            title: "Power Unit type",
            info: "Mercedes-AMG M14 E Performance  "
        },
        {
            title: "Monocoque",
            info: "Carbon-fibre composite, incorporating driver controls and fuel cell  "
        },
        {
            title: "Safety structures",
            info: "Cockpit survival cell incorporating impact resistant construction and anti-penetration panels, front impact structure, prescribed side impact structures, integrated rear impact structure, front and rear roll structures, halo secondary roll structure, driver headrest protection and safety seat  "
        },
        {
            title: "Bodywork",
            info: "Carbon-fibre composite, including engine cover, sidepods, floor, nose, front wing and rear wing with driver-operated drag reduction system"
        },
        {
            title: "Front suspension",
            info: "Carbon-fibre / titanium suspension legs, pullrod operating inboard torsion bar, spring and damper system"
        },
        {
            title: "Rear suspension",
            info: "Carbon-fibre / titanium suspension legs, pullrod operating inboard torsion bar, spring and damper system"
        },
        {
            title: "Weight",
            info: "Overall vehicle weight 798 kg (including driver, excluding fuel)  "
        },
        {
            title: "Weight distribution between ",
            info: "44.6% and 46.1% on front axle  "
        },
        {
            title: "Electronics",
            info: "McLaren Applied. Including chassis control, power unit control, data acquisition, sensors, data analysis  "
        },
        {
            title: "Instruments",
            info: "McLaren Applied steering wheel display  "
        },
        {
            title: "Brake system",
            info: "Six piston brake calipers with front / rear master cylinders. ‘Brake by wire’ rear brake control system. Carbon-carbon ventilated discs and pads  "
        },
        {
            title: "Tyres",
            info: "Pirelli P Zero F1. Now with an additional compound, the C0 – bringing our total to six compounds in the pool. Pirelli select three for each event. "
        },
        {
            title: "Race wheels",
            info: "BBS standardised design 18” magnesium wheels"
        },
        {
            title: "Cooling systems",
            info: "Charge air, engine oil, gearbox oil, hydraulic oil, water, and ERS cooling systems  "
        },
        {
            title: "INTERNAL COMBUSTION ENGINE",
            info: ""
        }, {
            title: "Capacity",
            info: "1.6 litres"
        },
        {
            title: "Cylinders",
            info: "Six"
        },
        {
            title: "Bank angle",
            info: "Bank angle"
        },
        {
            title: "No of valves",
            info: "24"
        },
        {
            title: "Max speed",
            info: "15,000 rpm"
        },
        {
            title: "Max fuel flow rate",
            info: "100kg/hour (above 10,500 rpm)"
        },
        {
            title: "Fuel injection",
            info: "High-pressure direct injection (max 500 bar, one injector/cylinder)  "
        },
        {
            title: "Pressure charging",
            info: "Single-stage compressor and exhaust turbine, on a common shaft  "
        },
        {
            title: " ",
            info: "Max rpm Exhaust Turbine 125,000 rpm "
        },
        {
            title: "Instruments",
            info: "McLaren Applied steering wheel display  "
        },
        {
            title: "Brake system",
            info: "Six piston brake calipers with front / rear master cylinders. ‘Brake by wire’ rear brake control system. Carbon-carbon ventilated discs and pads  "
        },
        {
            title: "Tyres",
            info: "Pirelli P Zero F1. Now with an additional compound, the C0 – bringing our total to six compounds in the pool. Pirelli select three for each event. "
        },
        {
            title: "Race wheels",
            info: "BBS standardised design 18” magnesium wheels"
        },
        {
            title: "Cooling systems",
            info: "Charge air, engine oil, gearbox oil, hydraulic oil, water, and ERS cooling systems  "
        },
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
                <b className=" text-4xl text-mclaren_orange font-F1W">McLaren</b>
                <ImageGallery imgArr={ImageArr} handleState={updateState} color={'#FF8000'}/>
            </div>
            <div className='font-F1R flex justify-center pb-8 text-[8px] md:text-[12px]'>
                <div className='w-10/12'>
                    <div>
                        The McLaren MCL60 is a Formula One race car designed and built by McLaren to compete in the 2023 Formula One World Championship, driven by Lando Norris and rookie Oscar Piastri
                    </div>
                    <div>
                        Lets have a deeper look into the MCL60:
                    </div>
                </div>
            </div>
            <Table tableName={"Chasis"} chasisInfo={chasisInfo} color={'#FF8000'}/>
        </div>
    )
}
