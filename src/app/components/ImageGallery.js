import React, { useState} from 'react'
import './animation.css'

export default function ImageGallery(imgArr) {

    const [fadeClass, setFadeClass] = useState('fade-in');

    const MoveRight = () => {
        const newArr = [...imgArr.imgArr];
        const firstElement = newArr.shift();
        newArr.push(firstElement);

        setFadeClass('fade-out');
        setTimeout(() => setFadeClass('fade-in'), 500);
        imgArr.handleState(newArr)
    }

    const MoveLeft = () => {
        const newArr = [...imgArr.imgArr];
        const lastElement = newArr.pop();
        newArr.unshift(lastElement);

        setFadeClass('fade-out');
        setTimeout(() => setFadeClass('fade-in'), 500);
        imgArr.handleState(newArr)
    };

    const swapPics = (index) => {
        const newArr = [...imgArr.imgArr];
        let temp = imgArr.imgArr[0];
        newArr[0] = newArr[index + 1]
        newArr[index + 1] = temp

        setFadeClass('fade-out');
        setTimeout(() => setFadeClass('fade-in'), 500);
        imgArr.handleState(newArr)
    };

    return (
        <div className="p-8 relative">
            <div className="grid grid-cols-[2%_75%_8%_2%] gap-4 justify-center">
                <div className='flex justify-center items-center'>
                    <button onClick={() => MoveLeft()} type="button" className="flex items-center justify-center h-fit cursor-pointer group focus:outline-none" data-carousel-prev>
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </button>
                </div>
                <div className='flex justify-center  '>
                    <img className={`h-fit rounded-3xl ${fadeClass} border-8 border-l-0 border-b-0 border-mclaren_orange`} src={imgArr.imgArr[0]} alt="Main Image" />
                </div>
                <div className="grid grid-cols-1 gap-2">
                    {imgArr.imgArr.slice(1).map((item, index) =>
                        <img className={`h-auto max-w-full rounded-lg ${fadeClass} hover:opacity-50`} key={index} src={item} alt={`Image ${index}`} style={{ cursor: 'pointer' }} onClick={() => swapPics(index)} />
                    )}
                </div>
                <div className='flex justify-center items-center'>
                    <button onClick={() => MoveRight()} type="button" className="flex items-center justify-center h-fit cursor-pointer group focus:outline-none" data-carousel-next>
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
