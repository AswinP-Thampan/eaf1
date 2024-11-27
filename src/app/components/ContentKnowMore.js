import React from 'react'

export default function ContentKnowMore({ description }) {

    return (
        <div className='font-F1R flex flex-col gap-8 p-14 pt-0 max-w-screen-2xl text-[14px]'>
            {description?.map((value, index) => {
                if (value.type == 'text') {
                    return (
                        <div key={index}>
                            {value.content}
                        </div>
                    )
                }
                else if (value.type == 'array') {
                    return (
                        <div key={index}>
                            <div>{value?.content[0]}</div>
                            <ol className="list-disc pl-10" >
                                {value?.content?.filter((_, index) => index !== 0).map((value, i) =>
                                    <li key={i}>{value}</li>
                                )}
                            </ol>
                        </div>
                    )
                }
                else if (value.type == 'specs') {
                    return (
                        <div className="font-F1W text-site_text text-2xl mt-10" key={index}>
                            {value.content}
                        </div>
                    )
                }
                else {
                    return null;
                }

            })}
        </div>
    )
}
