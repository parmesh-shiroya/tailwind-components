import React from 'react';
const Day1152 = () => {
    return (
        <>
            <div className="bg-red-500 items-stretch sm:items-start text-white p-8 sm:px-8  sm:py-10 flex-col sm:flex-row rounded-md w-full m-4 max-w-md shadow-lg flex">
                <div >
                    <h4 className="font-semibold tracking-wide">Clear out the cluster</h4>
                    <p className="mt-4 text-sm font-light tracking-wide">Get the most out of your new inbox by quickly and easily marking all of your previously read notifications as done.</p>
                </div>
                <button className="text-xs  mt-6 sm:mt-0 py-2 sm:p-8 rounded bg-red-400  font-bold "><svg className="m-auto" xmlns="http://www.w3.org/2000/svg" width="25.175" height="25.175" viewBox="0 0 68.175 44.45"><path d="M16.9,52.5,35.6,71.2a3.536,3.536,0,0,0,5-5L27.9,53.6H80.6a3.5,3.5,0,0,0,0-7H27.7L40.5,33.8a3.536,3.536,0,0,0-5-5L16.9,47.5A3.693,3.693,0,0,0,16.9,52.5Z" transform="translate(84.1 72.25) rotate(180)" fill="#fff" /></svg></button>
            </div>
            <div className="bg-white p-8 rounded w-full m-4 max-w-xs shadow-lg ">
                <h4 className="font-extrabold tracking-wide">Filter by spoken language</h4>
                <p className="text-gray-700 text-sm font-semibold mt-6">Select your preferred spoken language in order to see matching trending results.</p>
                <button className="text-xs rounded-lg bg-red-500 mt-6 text-white w-full font-bold px-6 py-3">Got it</button>
            </div>
        </>
    )
}

export const Day1152;