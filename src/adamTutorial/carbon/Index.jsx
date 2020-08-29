import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import './custom.css'

// https://dribbble.com/shots/13992785-Web-app-Carbon/attachments/5607063?mode=media
export default class Index extends Component {
    render() {
        const barDataVisitor = {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    backgroundColor: "#FFB93E",
                    barThickness: 6,
                    data: [[0, 8], [0, 10], [0, 2], [0, 9], [0, 3], [0, 10], [0, 6]],
                },
                {
                    backgroundColor: "#FF3E58",
                    barThickness: 6,
                    data: [[0, -4], [0, -3], [0, -6], [0, -1], [0, -6], [0, -3], [0, -4]],
                },
            ],
        }
        const barOptions = {
            legend: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            display: false,


                        },
                        ticks: {
                            fontColor: "#CCC", // this here

                        },
                    },
                ],
                yAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            display: false

                        },
                        ticks: {
                            display: false
                        },
                    },
                ],

            },
        }
        return (
            <div className="p-12">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <h2 className="font-bold text-3xl">CARBON</h2>

                        <div className="flex items-center text-gray-600">
                            <span className="relative ml-16">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 52.059 52.059"><g transform="translate(-5.941 -5.941)"><path d="M41.477,38.649a20.03,20.03,0,1,0-2.828,2.828L54.586,57.414a2,2,0,0,0,2.828-2.828Zm-5.425-.217a16.033,16.033,0,1,1,2.38-2.38,16.033,16.033,0,0,1-2.38,2.38Z" /></g></svg>
                            </span>
                            <input placeholder="Search Game" className="bg-gray-carbon font-medium text-sm -ml-8 pl-12 w-64  py-3 rounded-lg" type="text" />
                        </div>
                    </div>
                    <div>
                        <nav className="flex items-center">
                            <a class="font-semibold px-6">
                                News
                            </a>
                            <a class="font-semibold px-6">
                                Service
                            </a>
                            <a class="font-semibold px-6">
                                About Us
                            </a>
                            <span class="  pl-6">
                                <img className="rounded-full h-12" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&crop=faces&auto=format&fit=crop&h=150&w=150" />
                            </span>
                        </nav>
                    </div>
                </div>
                <div className="flex mt-12 justify-between">
                    <h1 className="text-4xl font-bold tracking-wide">Gamepad specification</h1>
                    <div>
                        <button className="bg-gray-carbon p-3 btn-shadow shadow-2xl rounded-lg border border-gray-light-carbon"><svg width="20" height="20" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.001 143"><g transform="translate(-69.5 -78.5)"><path d="M-340.5,120a17.455,17.455,0,0,1,1.236-6.473l-52.252-33.366A17.5,17.5,0,0,1-407,89.5,17.5,17.5,0,0,1-424.5,72,17.5,17.5,0,0,1-407,54.5a17.489,17.489,0,0,1,14.965,8.424l55.09-34.35A17.423,17.423,0,0,1-340.5,18,17.5,17.5,0,0,1-323,.5,17.5,17.5,0,0,1-305.5,18,17.5,17.5,0,0,1-323,35.5a17.471,17.471,0,0,1-13.945-6.925l-55.09,34.35A17.419,17.419,0,0,1-389.5,72a17.425,17.425,0,0,1-2.015,8.161l52.252,33.366A17.5,17.5,0,0,1-323,102.5,17.5,17.5,0,0,1-305.5,120,17.5,17.5,0,0,1-323,137.5,17.5,17.5,0,0,1-340.5,120Z" transform="translate(497 81)" stroke-width="6" /></g></svg></button>
                        <button className="bg-gray-carbon ml-6 p-3 btn-shadow shadow-2xl rounded-lg border border-gray-light-carbon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" stroke="currentColor" viewBox="0 0 53.91 44.002"><g transform="translate(-23.045 -27.999)"><g transform="translate(0 -952.362)"><path d="M37.342,980.361a14.7,14.7,0,0,0-10.094,3.969,13.229,13.229,0,0,0,0,19.344l21.375,20.156a2,2,0,0,0,2.719,0q10.7-10.074,21.406-20.156a13.187,13.187,0,0,0,0-19.313,14.839,14.839,0,0,0-20.187,0L50,986.767,47.4,984.33a14.626,14.626,0,0,0-10.062-3.969Zm0,4.031a10.674,10.674,0,0,1,7.344,2.844l3.938,3.75a2,2,0,0,0,2.75,0l3.938-3.719a10.859,10.859,0,0,1,14.687,0,9.021,9.021,0,0,1,0,13.5q-10,9.423-20,18.844l-20-18.875a9.023,9.023,0,0,1,0-13.5,10.674,10.674,0,0,1,7.344-2.844Z" /></g></g></svg>
                        </button>
                        <button className="bg-gray-carbon ml-6 p-3 btn-shadow shadow-2xl rounded-lg border border-gray-light-carbon"><svg width="20" height="20" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.96 99.98"><g transform="translate(0 -0.02)"><path d="M53.24,100H46.76a5.9,5.9,0,0,1-5-2.769c-.471-.741-3.341-5.551-4.8-8.4L31.78,86.7c-3.16,1-8.85,2.42-9.34,2.54a5.92,5.92,0,0,1-5.51-1.58l-4.59-4.59a5.91,5.91,0,0,1-1.58-5.51c.2-.86,1.56-6.29,2.54-9.34l-2.13-5.16c-3-1.52-8-4.55-8.4-4.8a5.9,5.9,0,0,1-2.77-5v-6.5a5.9,5.9,0,0,1,2.769-5c.741-.471,5.551-3.341,8.4-4.8L13.3,31.8c-1-3.16-2.42-8.85-2.54-9.34a5.92,5.92,0,0,1,1.58-5.51l4.59-4.59a5.91,5.91,0,0,1,5.51-1.58c.86.2,6.29,1.56,9.34,2.54l5.16-2.13c1.52-3,4.55-8,4.8-8.4a5.9,5.9,0,0,1,5-2.77h6.48a5.9,5.9,0,0,1,5,2.769c.471.741,3.341,5.551,4.8,8.4l5.16,2.13c3.16-1,8.85-2.42,9.34-2.54a5.92,5.92,0,0,1,5.51,1.58l4.59,4.59a5.91,5.91,0,0,1,1.58,5.51c-.2.86-1.56,6.29-2.54,9.34l2.13,5.16c3,1.52,8,4.55,8.4,4.8a5.9,5.9,0,0,1,2.77,5v6.48a5.9,5.9,0,0,1-2.769,5c-.741.471-5.551,3.341-8.4,4.8L86.7,68.22c1,3.16,2.42,8.85,2.54,9.34a5.92,5.92,0,0,1-1.58,5.51l-4.59,4.59a5.92,5.92,0,0,1-5.51,1.58c-.86-.2-6.29-1.56-9.34-2.54l-5.16,2.13c-1.52,3-4.55,8-4.8,8.4A5.9,5.9,0,0,1,53.24,100ZM31.93,80.76,41,84.53l.45,1c.92,2,4.24,7.62,5,8.77a.38.38,0,0,0,.33.18h6.48a.38.38,0,0,0,.33-.18c.59-.94,4-6.64,5-8.77l.45-1,9.1-3.77,1,.37c2.07.76,8.38,2.38,9.71,2.7a.34.34,0,0,0,.35-.1l4.59-4.59a.35.35,0,0,0,.1-.35c-.25-1.07-1.87-7.52-2.7-9.71l-.37-1L84.57,59l1-.45c2-.92,7.62-4.24,8.77-5a.38.38,0,0,0,.18-.33V46.74a.38.38,0,0,0-.18-.33h0c-.94-.59-6.64-4-8.77-5l-1-.45-3.77-9.1.37-1c.76-2.07,2.38-8.38,2.7-9.71a.38.38,0,0,0-.1-.35l-4.59-4.59a.35.35,0,0,0-.35-.1c-1.07.25-7.5,1.87-9.71,2.7l-1,.37L59,15.43l-.45-1c-.92-2-4.24-7.62-5-8.77a.38.38,0,0,0-.33-.18H46.78a.38.38,0,0,0-.33.18c-.59.94-4,6.64-5,8.77l-.45,1L31.9,19.2l-1-.37c-2.07-.76-8.38-2.38-9.71-2.7a.34.34,0,0,0-.35.1l-4.59,4.59a.35.35,0,0,0-.1.35c.25,1.07,1.87,7.52,2.7,9.71l.37,1L15.47,41l-1,.45c-2,.92-7.62,4.24-8.77,5a.38.38,0,0,0-.18.33v6.48a.38.38,0,0,0,.18.33c.94.59,6.64,4,8.77,5l1,.45,3.77,9.1-.37,1c-.76,2.07-2.38,8.38-2.7,9.71a.38.38,0,0,0,.1.35l4.59,4.59a.35.35,0,0,0,.35.1c1.07-.25,7.5-1.87,9.71-2.7ZM50,73.36A23.36,23.36,0,1,1,73.36,50,23.36,23.36,0,0,1,50,73.36Zm0-41.19A17.83,17.83,0,1,0,67.83,50,17.83,17.83,0,0,0,50,32.17Z" /></g></svg></button>
                    </div>
                </div>
                <div className="mt-8">
                    <div class="w-3/6 font-semibold grid gap-3 grid-rows-3 grid-cols-10">
                        <div class="rounded-lg row-span-3 gutter bg-gray-carbon p-4 col-span-6">
                            <h4 >Stick movement along the axes</h4>
                        </div>
                        {/* <div className=""> */}
                        <div class="rounded-lg  col-span-4 gutter bg-gray-carbon p-4 ">
                            <h4 className="">General wear of the gamepad</h4>
                            <div className="flex mt-4 justify-between ">
                                <span className="text-pink-carbon ">25%</span>
                                <span>75%</span>
                            </div>
                            <div className="mt-2 relative">
                                <div className="w-full bg-gray-700 h-1 rounded-full"></div>
                                <div className="bg-pink-carbon w-3/12 absolute top-0  h-1 rounded-full"></div>
                            </div>
                        </div>
                        <div class=" overflow-hidden   relative rounded-lg  flex items-center justify-between col-span-4 gutter bg-gray-carbon p-4 ">
                            <h4 className="z-10">Battery wear</h4>
                            <h4 className=" z-10 text-4xl">50%</h4>
                            <div className="absolute rounded-lg bg-blue-500 w-2/4 h-full right-0" />
                        </div>
                        <div class=" bg-red-600 gap-3 grid grid-cols-2 relative rounded-lg   col-span-4 gutter p-4 ">
                            <div className=" flex items-center rounded-lg border p-4 border-white" >
                                <span ><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="33.62" viewBox="0 0 54.46 93.62"><g transform="translate(-22.77 -3.19)"><path d="M72.14,96.81H27.86a5.09,5.09,0,0,1-5.09-5.09V8.28a5.09,5.09,0,0,1,5.09-5.09H72.14a5.09,5.09,0,0,1,5.09,5.09V91.72A5.09,5.09,0,0,1,72.14,96.81ZM27.86,5.32a3,3,0,0,0-3,3v83.4a3,3,0,0,0,3,3H72.14a3,3,0,0,0,3-3V8.28a3,3,0,0,0-3-3Z" /><circle cx="3.69" cy="3.69" r="3.69" transform="translate(46.31 84.09)" /><path d="M50,92.53a4.75,4.75,0,1,1,4.75-4.75A4.75,4.75,0,0,1,50,92.53Zm0-7.37a2.62,2.62,0,1,0,2.62,2.62A2.62,2.62,0,0,0,50,85.16Z" /></g></svg></span>
                                <div className="flex ml-3 flex-col">
                                    <span className="text-md ">346</span>
                                    <span className="text-medium text-sm">input</span>
                                </div>
                            </div>
                            <div className=" flex items-center rounded-lg border p-4 border-white" >
                                <span ><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="25.236" viewBox="0 0 104.481 67.236"><path d="M37.848,23.491a7.715,7.715,0,1,1-7.72-7.68,7.715,7.715,0,0,1,7.72,7.68Z" fill-rule="evenodd" /><path d="M80.152,30.721a4.06,4.06,0,1,1-4.07-4.06,4.06,4.06,0,0,1,4.07,4.06Z" fill-rule="evenodd" /><path d="M87.112,23.491a4.065,4.065,0,1,1-4.07-4.06,4.065,4.065,0,0,1,4.07,4.06Z" fill-rule="evenodd" /><path d="M80.242,16.361a4.06,4.06,0,1,1-8.12,0v-.1a4.06,4.06,0,1,1,8.12.1Z" fill-rule="evenodd" /><circle cx="4.06" cy="4.06" r="4.06" transform="translate(65.072 19.431)" /><path d="M101.179,32.251c-.867-3.134-2.151-6.188-3.285-9.231q-1.589-4.265-3.21-8.518c-1.136-2.987-2.145-6.061-4.643-8.228C89.085,5.445,77.531.346,75.179.05c-2.756-.33-4.884,1.006-6.93,2.72a99.376,99.376,0,0,0-16.01-1.21h0a99.36,99.36,0,0,0-16.007,1.21C34.186,1.057,32.059-.279,29.3.051,26.949.347,15.4,5.445,14.441,6.274c-2.5,2.167-3.507,5.24-4.643,8.228Q8.18,18.756,6.587,23.02c-1.134,3.043-2.418,6.1-3.285,9.231C1.529,38.659-.144,45.429.01,52.12a19.1,19.1,0,0,0,2.4,9.349,11.562,11.562,0,0,0,7.619,5.613A11.365,11.365,0,0,0,19.4,64.4c1.458-1.327,13.51-12.28,15.1-13.654.176-.152.7-.775.963-.775H69.019c.259,0,.787.623.964.775,1.593,1.374,13.644,12.327,15.1,13.654a11.365,11.365,0,0,0,9.368,2.682,11.564,11.564,0,0,0,7.62-5.613,19.107,19.107,0,0,0,2.4-9.349C104.625,45.428,102.952,38.659,101.179,32.251ZM99.593,57.371a9.167,9.167,0,0,1-4,5.015,6.95,6.95,0,0,1-6.841-.145c-1.331-.779-16.3-14.551-17.6-15.741l-.57-.53H33.9l-.57.53c-1.3,1.19-16.271,14.962-17.6,15.741a6.95,6.95,0,0,1-6.841.145,9.167,9.167,0,0,1-4-5.015,18.734,18.734,0,0,1-.924-6.311,43.192,43.192,0,0,1,.729-7.09c.51-2.92,1.68-7.81,2.47-10.66.37-1.33.89-2.83,1.33-4.04,1.5-3.952,6.181-17.878,8.188-19.616a13.377,13.377,0,0,1,3.045-1.843,65.845,65.845,0,0,1,6.95-2.849c1.965-.677,3.693-1.539,5.507-.192.24.17,2.85,2.27,2.85,2.27l.97-.17a92.544,92.544,0,0,1,16.24-1.31h0A92.53,92.53,0,0,1,68.479,6.87l.97.17s2.61-2.1,2.85-2.27c1.814-1.346,3.542-.485,5.507.192a65.857,65.857,0,0,1,6.95,2.849A13.378,13.378,0,0,1,87.8,9.655c2.007,1.738,6.69,15.663,8.188,19.616.44,1.21.96,2.71,1.33,4.04.79,2.85,1.96,7.74,2.47,10.66a43.14,43.14,0,0,1,.729,7.09,18.709,18.709,0,0,1-.924,6.311Z" /></svg></span>
                                <div className="flex ml-3 flex-col">
                                    <span className="text-md ">2546</span>
                                    <span className="text-medium text-sm">input</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div class="rounded-lg w-3/6 items-center py-16 row-span-3 gutter bg-gray-carbon px-4 col-span-6 grid grid-cols-10">
                        <div className="col-span-8">
                            <Bar data={barDataVisitor} options={barOptions} width={400} />
                        </div>
                        <div className="col-span-2 my-8">
                            <button className="bg-gray-carbon px-8 py-6 btn-shadow shadow-2xl rounded-lg border border-gray-light-carbon font-semibold flex items-center tracking-wider"><span className="bg-yellow-carbon mr-4 h-3 w-3 rounded-full"></span>Activity</button>
                            <button className="bg-gray-carbon mt-8 px-8 py-6 btn-shadow shadow-2xl rounded-lg border border-gray-light-carbon font-semibold flex items-center tracking-wider"><span className="bg-pink-carbon mr-4 h-3 w-3 rounded-full"></span>Passivity</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
