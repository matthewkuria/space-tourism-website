import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import imageMoon from "../assets/destination/image-moon.png"
import imageMars from "../assets/destination/image-mars.png"
import imageEuro from "../assets/destination/image-europa.png"
import imageTitan from "../assets/destination/image-titan.png"

const imageMap = {
    'image-moon.png': imageMoon,
    'image-mars.png': imageMars,
    'image-europa.png': imageEuro,
    'image-titan.png': imageTitan
    
};
const Destination = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState(0);
    // Fetch data from the  JSON file
     useEffect(() => {
    // Fetch data from the JSON file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data.destinations))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
    return (
        <main className="destination text-white p-12">
            <h1 className="uppercase text-2xl"><span className="text-slate-500">01</span> Pick your destination</h1>
            <div className="">
              
                <div className="w-full ">
                    <Box sx={{ width: '100%' }}>
                        <Tabs className='ml-96 text-white' value={value} onChange={handleChange} aria-label="simple tabs">
                            {Array.isArray(data) && data.map((item, index) => (
                            <Tab key={index} label={item.name} />
                            ))}
                        </Tabs>
                        {data.map((item, index) => (
                            <TabPanel key={index} value={value} index={index} className="">
                                <div className="flex flex-col md:flex-row justify-around">
                                    <div className="">
                                    <img
                                    src={imageMap[item.images.png]}
                                    alt={item.title}
                                    style={{ width: '100%', borderRadius: '8px' }}
                                    />
                                    </div>
                                <div className="w-full md:w-1/2">
                                    <Typography>{item.description}</Typography>
                                    <div className="flex justify-between mt-10 ">
                                        <div className="flex flex-col">
                                            <p className="">AVG. DISTANCE</p>
                                            <Typography>{item.distance}</Typography>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="">EST. TRAVEL TIME</p>
                                            <Typography>{ item.travel}</Typography>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </TabPanel>
                        ))}
                    </Box>
                </div>
            </div>
        </main>
    )
}

export default Destination

