// import React, { useState } from 'react'
// import Image from 'next/image';
// import './animation.css'

// export default function ImageGallery(imgArr) {

//     const [fadeClass, setFadeClass] = useState('fade-in');

//     const MoveRight = () => {
//         const newArr = [...imgArr.imgArr];
//         const firstElement = newArr.shift();
//         newArr.push(firstElement);

//         setFadeClass('fade-out');
//         setTimeout(() => setFadeClass('fade-in'), 500);
//         imgArr.handleState(newArr)
//     }

//     const MoveLeft = () => {
//         const newArr = [...imgArr.imgArr];
//         const lastElement = newArr.pop();
//         newArr.unshift(lastElement);

//         setFadeClass('fade-out');
//         setTimeout(() => setFadeClass('fade-in'), 500);
//         imgArr.handleState(newArr)
//     };

// const swapPics = (index) => {
//     const newArr = [...imgArr.imgArr];
//     let temp = imgArr.imgArr[0];
//     newArr[0] = newArr[index + 1]
//     newArr[index + 1] = temp

//     setFadeClass('fade-out');
//     setTimeout(() => setFadeClass('fade-in'), 500);
//     imgArr.handleState(newArr)
// };

//     return (
//         <div className="p-8 relative">
//         <div className="grid grid-cols-[2%_75%_8%_2%] gap-4 justify-center">
//             <div className='flex justify-center items-center '>
//                 <button onClick={() => MoveLeft()} type="button" className="flex items-center justify-center h-fit cursor-pointer group focus:outline-none" data-carousel-prev>
//                     <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
//                     </svg>
//                 </button>
//             </div>
//             <div className='flex justify-center'>
//                 <img
//                     className={`h-fit rounded-3xl border-8 border-l-0 border-b-0 transition-all duration-700 transform ${fadeClass}`} 
//                     src={imgArr.imgArr[0]} 
//                     alt="Main Image" 
//                 />
//             </div>
//             <div className="grid grid-cols-1 gap-2" data-carousel="slide">
//                 {imgArr.imgArr.slice(1).map((item, index) => (
//                     <div key={index} className="duration-700 ease-in-out" data-carousel-item>
//                         <img
//                             className={`h-auto max-w-full rounded-lg transition-all duration-700 ease-in-out transform hover:scale-105 cursor-pointer ${fadeClass}`}
//                             src={item}
//                             alt={`Image ${index}`}
//                             onClick={() => swapPics(index)}
//                         />
//                     </div>
//                 ))}
//             </div>
//             <div className='flex justify-center items-center'>
//                 <button onClick={() => MoveRight()} type="button" className="flex items-center justify-center h-fit cursor-pointer group focus:outline-none" data-carousel-next>
//                     <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     </div>

//     )

// //     return(
// //         <div id="animation-carousel" class="relative w-full" data-carousel="static">
// //     <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
// //         <div class="hidden duration-200 ease-linear" data-carousel-item>
// //             <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="1" />
// //         </div>
// //         <div class="hidden duration-200 ease-linear" data-carousel-item>
// //             <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="1" />
// //         </div>
// //         <div class="hidden duration-200 ease-linear" data-carousel-item="active">
// //             <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="1" />
// //         </div>
// //         <div class="hidden duration-200 ease-linear" data-carousel-item>
// //             <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="1" />
// //         </div>
// //         <div class="hidden duration-200 ease-linear" data-carousel-item>
// //             <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="1" />
// //         </div>
// //     </div>
// //     <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
// //         <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
// //             <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
// //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
// //             </svg>
// //             <span class="sr-only">Previous</span>
// //         </span>
// //     </button>
// //     <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
// //         <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
// //             <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
// //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
// //             </svg>
// //             <span class="sr-only">Next</span>
// //         </span>
// //     </button>
// // </div>
// //     )
// }


import { useState } from 'react';

const ImageGallery = (imgArr) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const MoveRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imgArr.imgArr.length);
    };

    const MoveLeft = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imgArr.imgArr.length - 1 : prevIndex - 1
        );
    };

    const swapPics = (index) => {
        const newArr = [...imgArr.imgArr];
        let temp = imgArr.imgArr[0];
        newArr[0] = newArr[index + 1]
        newArr[index + 1] = temp
        imgArr.handleState(newArr)
    };

    return (
        <div className="p-8 relative h-[fit-content] max-h-[700px] w-full">
            <div className="flex h-full gap-4 justify-center items-center">
                <button
                    onClick={MoveLeft}
                    className="flex items-center justify-center h-10 w-10 bg-white rounded-full shadow focus:outline-none"
                >
                    <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <div className="relative overflow-hidden w-10/12 max-h-[700px]">
                    <div
                        className="flex transition-transform duration-700 ease-in-out max-h-[600px]"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {imgArr.imgArr.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full flex justify-center p-4 "
                                
                            >
                                <img
                                    className="h-auto rounded-3xl border-8 border-l-0 border-b-0"
                                    style={{ borderColor: imgArr.color }}
                                    src={item}
                                    alt={`Image ${index}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="grid grid-cols-1 gap-2 h-full overflow-hidden" data-carousel="slide">
                    {imgArr.imgArr.slice(1).map((item, index) => (
                        <div key={index} className="duration-700 ease-in-out" data-carousel-item>
                            <img
                                className={`h-auto max-w-full rounded-lg transition-all duration-700 ease-in-out transform hover:scale-105 cursor-pointer`}
                                src={item}
                                alt={`Image ${index}`}
                                onClick={() => swapPics(index)}
                            />
                        </div>
                    ))}
                </div> */}
                <button
                    onClick={MoveRight}
                    className="flex items-center justify-center h-10 w-10 bg-white rounded-full shadow focus:outline-none"
                >
                    <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ImageGallery;
