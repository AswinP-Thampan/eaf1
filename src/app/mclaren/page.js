"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import ImageGallery from '../components/ImageGallery'
import Table from '../components/Table'

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
            chasis: "Power Unit type",
            info: "Mercedes-AMG M14 E Performance  "
        },
        {
            chasis: "Monocoque",
            info: "Carbon-fibre composite, incorporating driver controls and fuel cell  "
        },
        {
            chasis: "Safety structures",
            info: "Cockpit survival cell incorporating impact resistant construction and anti-penetration panels, front impact structure, prescribed side impact structures, integrated rear impact structure, front and rear roll structures, halo secondary roll structure, driver headrest protection and safety seat  "
        },
        {
            chasis: "Bodywork",
            info: "Carbon-fibre composite, including engine cover, sidepods, floor, nose, front wing and rear wing with driver-operated drag reduction system"
        },
        {
            chasis: "Front suspension",
            info: "Carbon-fibre / titanium suspension legs, pullrod operating inboard torsion bar, spring and damper system"
        },
        {
            chasis: "Rear suspension",
            info: "Carbon-fibre / titanium suspension legs, pullrod operating inboard torsion bar, spring and damper system"
        },
        {
            chasis: "Weight",
            info: "Overall vehicle weight 798 kg (including driver, excluding fuel)  "
        },
        {
            chasis: "Weight distribution between ",
            info: "44.6% and 46.1% on front axle  "
        },
        {
            chasis: "Electronics",
            info: "McLaren Applied. Including chassis control, power unit control, data acquisition, sensors, data analysis  "
        },
        {
            chasis: "Brake system",
            info: "Six piston brake calipers with front / rear master cylinders. ‘Brake by wire’ rear brake control system. Carbon-carbon ventilated discs and pads  "
        },
        {
            chasis: "Tyres",
            info: "Pirelli P Zero F1. Now with an additional compound, the C0 – bringing our total to six compounds in the pool. Pirelli select three for each event. "
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
                <ImageGallery imgArr={ImageArr} handleState={updateState} />
            </div>
            <div className='font-F1R flex justify-center pb-8'>
                <div className='w-10/12'>
                    <div>
                        The McLaren MCL60 is a Formula One race car designed and built by McLaren to compete in the 2023 Formula One World Championship, driven by Lando Norris and rookie Oscar Piastri
                    </div>
                    <div>
                        Lets have a deeper look into the MCL60:
                    </div>
                </div>
            </div>
            <Table chasisInfo={chasisInfo} />
        </div>
    )
}
