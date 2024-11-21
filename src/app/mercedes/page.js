"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import ImageGallery from '../components/ImageGallery'
import Table from '../components/Table'
import { title } from 'process';

export default function Page() {

    const f1Url = "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto,c_fill,q_auto,w_1320,g_faces,ar_16:9/content/dam/fom-website/manual/2023/Launches2023/MercedesLaunch"
    const mercedesUrl = "https://images.ctfassets.net/1fvlg6xqnm65"



    //Merc-5
    //Merc-4
    //Merc-2
    //Merc-1
    //Merc-3
    //Merc-6


    const [ImageArr, setImageArr] = useState([
        // `${f1Url}/Merc-1`,
        // `${f1Url}/Merc-2`,
        // `${f1Url}/Merc-3`,
        // `${f1Url}/Merc-4`,
        // `${f1Url}/Merc-5`,
        // `${f1Url}/Merc-6`,
        `${mercedesUrl}/28ZTvXCd0GDiie92gh74Dk/2c4d65d4d51b5fbc4a6a5ae3e0f80653/M375735.jpg`,
        `${mercedesUrl}/BA4iRsDMeqFOafiEZKCPp/5df5c208a29ccc18b2e2bef9a16dc5f4/M375742.jpg`,
        `${mercedesUrl}/6GaROvR6jk8FNgCKRY9lmD/6f5fde7761c3e2f68d543df45acf9ddf/M370485.jpg`,
        `${mercedesUrl}/31HrInN3hoS6SgsvWxwhUZ/e57a3ee37b27c5f7948b3c9148f0c090/M370499.jpg`,
        `${mercedesUrl}/pJwyo8fihahwVLW42RvqS/594a0ec46ee1547825d2ed22f3475698/M375739.jpg`,
        `${mercedesUrl}/1jBWWiGuZSYpnbADCXX6Zb/a39969be7a200c5272e1676eea5fef58/M375744.jpg`,
        `${mercedesUrl}/3Z1f8oGzPgW6anG8DS4cG6/d6ae5e37cafe343ec095b894a2798ec0/M370506.jpg`,
        // `${f1Url}/SO_2023_Rear_3_4_1024x768.jpg?v=1676372705`,
        // `${f1Url}/Fo7APSvWAAEuEBw.jpg?v=1676372229`,
        // `${f1Url}/Fo7APSwWAAItXPb.jpg?v=1676372232`,
        // `${f1Url}/SO_2023_Dead_Rear_high_close1_1024x768.jpg?v=1676372710`,
        // `${f1Url}/SO_2023_Head_on_high_1024x768.jpg?v=1676372712`,
        // `${f1Url}/Fo67zHcXEAAK2qE.jpg?v=1676371932`,
        // `${f1Url}/Fo6-_tpXwAAHr-1.jpg?v=1676371942`,
        // `${f1Url}/SF_2023_Front3_4_team_1024x768.jpg?v=1676372707`,
    ]);

    const chasisInfo = [
        {
            "title": "Power Unit type",
            "info": "Mercedes-AMG F1 M14 E Performance, 1.6L turbocharged V6 hybrid engine with Energy Recovery System (ERS)"
        },
        {
            "title": "Monocoque",
            "info": "Carbon fiber composite monocoque structure"
        },
        {
            "title": "Safety structures",
            "info": "Front and rear crash structures, carbon fiber survival cell, FIA-standard halo device"
        },
        {
            "title": "Bodywork",
            "info": "Carbon fiber bodywork with integrated cooling systems and aerodynamic elements"
        },
        {
            "title": "Front suspension",
            "info": "Carbon fiber double wishbone with push-rod actuated springs and dampers"
        },
        {
            "title": "Rear suspension",
            "info": "Carbon fiber double wishbone with pull-rod actuated springs and dampers"
        },
        {
            "title": "Weight",
            "info": "798 kg minimum, including the driver and on-board cameras, excluding fuel"
        },
        {
            "title": "Weight distribution between",
            "info": "Regulated by FIA to optimize performance and safety"
        },
        {
            "title": "Electronics",
            "info": "FIA-standard ECU, integrated energy management system, telemetry data logging"
        },
        {
            "title": "Instruments",
            "info": "Custom digital dashboard integrated with steering wheel controls and telemetry displays"
        },
        {
            "title": "Brake system",
            "info": "Carbon fiber brake discs and pads with hydraulic brake-by-wire rear system"
        },
        {
            "title": "Tyres",
            "info": "Pirelli P Zero slicks for dry conditions; Cinturato intermediates and wet tyres for wet conditions"
        },
        {
            "title": "Race wheels",
            "info": "Forged magnesium wheels with aerodynamic covers (13-inch rims)"
        },
        {
            "title": "Cooling systems",
            "info": "Optimized radiators for the power unit, hybrid system, and gearbox cooling, integrated within the sidepods"
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
            "info": "6 cylinders in a V configuration"
        },
        {
            "title": "Bank angle",
            "info": "90 degrees"
        },
        {
            "title": "No of valves",
            "info": "4 valves per cylinder (24 in total)"
        },
        {
            "title": "Max speed",
            "info": "15,000 RPM (FIA-regulated)"
        },
        {
            "title": "Max fuel flow rate",
            "info": "100 kg/hour above 10,500 RPM"
        },
        {
            "title": "Fuel injection",
            "info": "Direct injection with pressures up to 500 bar"
        },
        {
            "title": "Pressure charging",
            "info": "Single turbocharger with MGU-H for hybrid energy recovery"
        },
        {
            "title": "Instruments",
            "info": "Digital multi-function display with advanced telemetry systems"
        },
        {
            "title": "Brake system",
            "info": "Carbon ceramic brake discs with regenerative energy recovery system"
        },
        {
            "title": "Tyres",
            "info": "Pirelli P Zero slicks and Cinturato intermediates/wets for various track conditions"
        },
        {
            "title": "Race wheels",
            "info": "Forged magnesium wheels with FIA-mandated aerodynamic wheel covers"
        },
        {
            "title": "Cooling systems",
            "info": "Advanced cooling for power unit, ERS, and brakes integrated with aerodynamic designs"
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
                <b className=" text-4xl text-mercedes_green font-F1W">Mercedes</b>
                <ImageGallery imgArr={ImageArr} handleState={updateState} color={'#00A19C'} />
            </div>
            <div className='font-F1R flex justify-center pb-8'>
                <div className='w-10/12'>
                    <div>
                    The Mercedes-AMG F1 W14 E Performance is a Formula One race car designed and developed by Mercedes-AMG Petronas Formula One Team for the 2023 Formula One World Championship. Driven by seven-time World Champion Lewis Hamilton and rising star George Russell, the W14 embodies cutting-edge technology and engineering, continuing Mercedes' legacy of innovation and competition in Formula One.                    </div>
                    <div>
                        Lets have a deeper look into the Mercedes W14:
                    </div>
                </div>
            </div>
            <Table tableName={"Chasis"} chasisInfo={chasisInfo} color={'#00A19C'} />
        </div>
    )
}
