import React from 'react'

export default function Table(props) {

    console.log(props)
    return (
        <div className='flex justify-center pb-8 font-F1R text-lg md:text-xs'>
            <div class="relative w-10/12 overflow-x-auto sm:rounded-xl border border-gray-300">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead class="text-lg text-mclaren_orange uppercase ">
                        <tr>
                            <th scope="col" class="px-6 py-3 bg-gray-50 ">
                                {props.tableName}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.chasisInfo.map((value) => {
                            if (value.info == '') {
                                return (
                                    <tr class="text-lg text-mclaren_orange uppercase ">
                                        <th scope="col" class="px-6 py-3 bg-gray-50 ">
                                        {value.title}
                                        </th>
                                    </tr>
                                )
                            }
                            else {
                                return(
                                    <tr class="border-b border-gray-200 ">
                                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 bg-gray-50">
                                        {value.title}
                                    </td>
                                    <td class="px-6 py-4">
                                        {value.info}
                                    </td>
                                </tr>
                                )
                            }
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
