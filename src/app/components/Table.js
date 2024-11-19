import React from 'react'

export default function Table(props) {

    console.log(props)
    return (
        <div className='flex justify-center font-F1R text-lg md:text-xs'>
            <div class="relative w-10/12 overflow-x-auto sm:rounded-xl">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead class="text-lg text-mclaren_orange uppercase ">
                        <tr>
                            <th scope="col" class="px-6 py-3 bg-gray-50 ">
                                Chasis
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.chasisInfo.map((value) =>
                            <tr class="border-b border-gray-200 ">
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900 bg-gray-50">
                                    {value.chasis}
                                </td>
                                <td class="px-6 py-4">
                                    {value.info}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
