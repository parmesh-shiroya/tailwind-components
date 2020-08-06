import React from 'react';
export default () => {
    const checkbox = (label) => (<label class="my-4 flex items-center text-gray-600 text-sm font-semibold">
        <input class="mr-4 w-5 h-5  border-gray-500" type="checkbox" />
        <span class="text-sm leading-tight">{label}</span>
    </label>)

    const dropDown = (...options) => (<div class="inline-block mt-2 relative w-full">
        <select class="block tracking-wide font-medium appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm ">
            {options.map(v => <option>{v}</option>)}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex  items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </div>
    </div>)

    return (
        <div className="flex items-center flex-col">
            <div className="bg-white   rounded-lg w-full max-w-xs m-4 shadow-lg ">
                <div className="px-8 flex items-center py-10">
                    <svg fill="#bbb" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 52.059 52.059"><g transform="translate(-5.941 -5.941)"><path d="M41.477,38.649a20.03,20.03,0,1,0-2.828,2.828L54.586,57.414a2,2,0,0,0,2.828-2.828Zm-5.425-.217a16.033,16.033,0,1,1,2.38-2.38,16.033,16.033,0,0,1-2.38,2.38Z" /></g></svg>
                    <input className="outline-none text-sm font-medium ml-4" type="text" placeholder="Search by keyword" />
                </div>
                <hr />
                <div className="px-8 py-8">
                    <h4 className="font-bold text-sm  tracking-wide">JOB TYPES</h4>
                    {["All", "Full Time", "Freelance", "Internship"].map(checkbox)}

                    <h4 className="font-bold mt-8 text-sm  tracking-wide">LOCATION</h4>
                    <h4 className="font-bold text-xs mt-4 ">Country/Region</h4>
                    {dropDown("Norway")}
                    <h4 className="font-bold text-xs mt-4 ">City</h4>
                    {dropDown("Norway")}
                    <button className="text-xs rounded-lg bg-indigo-400 mt-6 w-full text-white font-semibold px-6 py-4">Apply</button>
                </div>
            </div>
            <button className="bg-white px-10 py-4  items-center text-sm flex font-bold text-gray-700 tracking-wide rounded-lg  m-4 shadow-lg ">
                See all Jobs <svg className="ml-6" xmlns="http://www.w3.org/2000/svg" width="25.175" height="25.175" viewBox="0 0 68.175 44.45"><path d="M16.9,52.5,35.6,71.2a3.536,3.536,0,0,0,5-5L27.9,53.6H80.6a3.5,3.5,0,0,0,0-7H27.7L40.5,33.8a3.536,3.536,0,0,0-5-5L16.9,47.5A3.693,3.693,0,0,0,16.9,52.5Z" transform="translate(84.1 72.25) rotate(180)" fill="#4a5568" /></svg>
            </button>
            <div className="bg-white px-10 py-8  rounded-lg w-full max-w-lg m-4 shadow-lg ">


                <h4 className="font-bold text-lg  tracking-wider">Product Designer (UI/UX)</h4>
                <h6 className="font-bold text-xs text-gray-500" >Product Designer (UI/UX)</h6>

                <p className="mt-4 text-sm font-medium tracking-wide">We are looking for a ui/ux web designer to redesign out website whis is a subscription snack box company</p>

                <div className="flex  mt-4 flex-wrap">
                    {["UI Desing", "UX Design", "Prototyping"].map(v => (<span className="rounded-full mr-2 bg-gray-300 px-4 py-1 font-semibold text-xs text-gray-600">{v}</span>))}
                </div>

            </div>
        </div>
    )
}