import * as React from 'react';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';
import imageMoon from "../assets/destination/image-moon.png" 



const Destination = () => {
    return (
        <main className="destination text-white p-12">
            <h1 className="uppercase text-2xl"><span className="text-slate-500">01</span> Pick your destination</h1>
            <div className="flex justify-around items-start">
                <div className="">
                  <img src={imageMoon} alt="The moon image" />
                </div>
                <div className="w-full md:w-1/2">
                         <Tabs defaultValue={1}>
                            <TabsList className="mb-4 rounded-xl bg-transparent flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
                                <Tab
                                slotProps={{
                                    root: ({ selected, disabled }) => ({
                                    className: `font-sans ${
                                        selected
                                        ? 'text-purple-500 bg-white'
                                        : 'text-white bg-transparent focus:text-white hover:bg-purple-400'
                                    } ${
                                        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                                    } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-purple-light`,
                                    }),
                                }}
                                value={1}
                                >
                                Moon
                                </Tab>
                                <Tab
                                slotProps={{
                                    root: ({ selected, disabled }) => ({
                                    className: `font-sans ${
                                        selected
                                        ? 'text-purple-500 bg-white'
                                        : 'text-white bg-transparent focus:text-white hover:bg-purple-400'
                                    } ${
                                        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                                    } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-purple-light`,
                                    }),
                                }}
                                value={2}
                                >
                                Mars
                                </Tab>
                                <Tab
                                slotProps={{
                                    root: ({ selected, disabled }) => ({
                                    className: `font-sans ${
                                        selected
                                        ? 'text-purple-500 bg-white'
                                        : 'text-white bg-transparent focus:text-white hover:bg-purple-400'
                                    } ${
                                        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                                    } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-purple-light`,
                                    }),
                                }}
                                value={3}
                                >
                               Europa
                            </Tab>
                            <Tab
                                slotProps={{
                                    root: ({ selected, disabled }) => ({
                                    className: `font-sans ${
                                        selected
                                        ? 'text-purple-500 bg-white'
                                        : 'text-white bg-transparent focus:text-white hover:bg-purple-400'
                                    } ${
                                        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                                    } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-purple-light`,
                                    }),
                                }}
                                value={4}
                                >
                               Titan
                                </Tab>
                            </TabsList>
                            <TabPanel className="w-full font-sans text-sm flex flex-col" value={1}>
                                <h1 className='uppercase text-8xl text-center'>Moon</h1>
                                <div className="">
                                    <p className="font-bold py-6">
                                        See our planet as you have never seen it before.
                                        A perfect relaxing trip away to help regain perspective and come back refreshed.
                                        While you are there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                                    </p>
                            </div>
                            <div className="pt-6">
                                <div className="flex  justify-between">
                                    <div className="">
                                        <p className="uppercase">
                                        Avg. distance 
                                        </p>
                                        <p className="text-xl">
                                            384,400 km
                                        </p>
                                    </div>
                                    <div className="">
                                          <p className="uppercase">
                                        Est. travel time
                                        </p>
                                        <p className="text-xl">
                                            3 days
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </TabPanel>
                            <TabPanel className="w-full font-sans text-sm" value={2}>
                                Second page
                            </TabPanel>
                            <TabPanel className="w-full font-sans text-sm" value={3}>
                                Third page
                            </TabPanel>
                            <TabPanel className="w-full font-sans text-sm" value={4}>
                                Fourth Page
                            </TabPanel>
                            </Tabs>
                </div>
            </div>
        </main>
    )
}
export default Destination

