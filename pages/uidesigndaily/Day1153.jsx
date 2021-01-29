import React from 'react';
const Day1153 = () => {
    const dropDown = (...options) => (<div class="inline-block mt-3 relative w-full">
        <select class="block tracking-wide font-medium appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-4 pr-8 rounded  leading-tight  focus:outline-none focus:shadow-outline text-sm ">
            {options.map(v => <option>{v}</option>)}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex  items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </div>
    </div>)


    return (

        <div className="flex items-center flex-col w-full">
            <div className="bg-white px-8 py-10  rounded-lg w-full max-w-md m-4 shadow-lg ">
                <h4 className="font-bold text-md  tracking-wide">Create a new Topic</h4>
                <input type="text" className="border border-gray-400 rounded-md font-medium mt-6 w-full text-xs tracking-wide px-4 py-4" placeholder="Type title, or paste a link here" />
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-3">
                    {dropDown("Category")}
                    {dropDown("Tags")}
                </div>
                <textarea rows="4" type="text" className="border border-gray-400 rounded-md font-medium mt-3 w-full text-xs tracking-wide px-4 py-4" placeholder="Enter your description here" />
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-1 gap-3">
                    <button className="text-xs flex items-center rounded bg-indigo-500  w-full text-white justify-center font-semibold px-6 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="16" height="16" className="mr-2" viewBox="0 0 49.172 49.172"><path d="M72.086,47.5H52.5V27.914a2.5,2.5,0,1,0-5,0V47.5H27.914a2.5,2.5,0,1,0,0,5H47.5V72.086a2.5,2.5,0,0,0,5,0V52.5H72.086a2.5,2.5,0,0,0,0-5Z" transform="translate(-25.414 -25.414)" /></svg>
                        Create Topic</button>
                    <button className="text-xs flex items-center rounded bg-gray-200  w-full text-gray-600 justify-center font-semibold px-6 py-4">
                        Cancel</button>
                </div>


            </div>

            <div className="bg-white items-center flex px-6 sm:px-8 py-10  rounded-lg w-full max-w-xl m-4 shadow-lg ">
                <div className="mr-4 sm:mr-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54"><g transform="translate(-129 -552)"><circle cx="27" cy="27" r="27" transform="translate(129 552)" fill="#eaffe9" /><g transform="translate(1.5 2.5)"><line x2="8.866" y2="10.639" transform="translate(141.5 574.706)" fill="none" stroke="#0eaea6" stroke-linecap="round" stroke-width="3" /><line x1="16.845" y2="16.845" transform="translate(150.366 568.5)" fill="none" stroke="#0eaea6" stroke-linecap="round" stroke-width="3" /></g></g></svg>
                </div>
                <div className="  sm:mr-16">
                    <h4 className="font-semibold text-sm  ">Solved by <a className="text-indigo-600">Charlie_reid</a> in <a className="text-indigo-600">post #2</a></h4>
                    <p className="mt-2 text-xs font-semibold tracking-wide">The answer was indetified. All redirects created can be found under the hosting tab of the project settings.</p>
                </div>
            </div>
        </div>
    )
}
export default Day1153;