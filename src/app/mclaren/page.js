"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import ImageGallery from '../components/ImageGallery'

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
        // `${amalgamCollectionUrl}/DSCF6455_4000x2677_crop_center.jpg`,
        // `${amalgamCollectionUrl}/DSCF6445_4000x2677_crop_center.jpg`,
        // `${amalgamCollectionUrl}/DSCF6510_4000x2677_crop_center.jpg`,
        // `${amalgamCollectionUrl}/DSCF6451_01950db2-dfb6-44dd-b05a-8eb9f5f01ad2_4000x2677_crop_center.jpg`,

        `${f1Url}/3`,
        `${f1Url}/6`,
        `${f1Url}/7`,
    ]);

    const updateState = (imgArr) => {
        setImageArr(imgArr)
    }

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className='flex justify-center items-center'>
                <ImageGallery imgArr={ImageArr} handleState={updateState} />
            </div>
        </div>
    )
}
