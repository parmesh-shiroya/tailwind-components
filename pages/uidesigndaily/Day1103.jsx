import React from 'react';

const Day1103 = () => {
    return (
        <div className="bg-white p-8 rounded w-full m-4 max-w-xs shadow-lg ">
            <h4 className="font-extrabold tracking-wide">Jump back in!</h4>
            <p className="text-gray-600 mt-6 text-sm font-medium">Course 54% complete</p>
            <div className="rounded-full relative bg-gray-400 h-2 mt-2 w-full">
                <div className="absolute bg-purple-500 shadow-md h-full rounded-full w-3/4"></div>
            </div>
            <p className="text-gray-900 mt-8 text-xs font-bold">CURRENT LESSON</p>
            <p className="text-gray-900 mt-1 text-lg font-semibold">Objects in Javascript<br />(Challenge)</p>
            <button className="text-xs rounded bg-orange-400 mt-4 font-bold px-6 py-2">Go to lesson</button>
        </div>)
}

export default Day1103;