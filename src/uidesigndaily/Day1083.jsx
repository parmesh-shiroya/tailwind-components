import React from 'react';
export default () => {
    return (
        <div className="bg-white border-t-4  border-gray-800  px-12 py-16 rounded-lg w-full max-w-sm m-4 shadow-lg ">
            <h4 className="font-extrabold text-lg text-center tracking-wide">Login</h4>
            <p className="text-purple-600 mt-2 text-center text-sm font-medium">Create an account</p>
            <div className="flex flex-col mt-4">
                <label className="font-extrabold text-sm ">Username</label>
                <input type="text" placeholder="Enter your username" className="px-3 text-xs py-3 mt-1 border-gray-400 border-2 rounded-md" />
            </div>
            <div className="flex pt-2 flex-col mt-4">
                <label className="font-extrabold text-sm ">Password</label>
                <input type="password" placeholder="Enter your password" className="px-3 text-xs py-3 mt-1 border-gray-400 border-2 rounded-md" />
            </div>
            <button className="text-xs rounded-lg bg-gray-800 mt-6 w-full text-white font-medium px-6 py-3">Go to lesson</button>
            <span className="flex items-center mt-8 ">
                <input type="checkbox" value="Awe" />
                <span className="text-gray-900 text-sm font-bold ml-2">Keep me logged in</span>
            </span>
            <p className="text-purple-600 mt-16 text-center text-sm font-medium cursor-pointer">Forgot password?</p>
            <p className="text-gray-600 mt-2 text-center text-sm font-medium">&copy; 2001 - 2020 All Right Reserved</p>
        </div>)
}