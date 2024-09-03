import { useEffect, useState } from "react";
import "./routes.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import imageVehicle from "../assets/technology/image-launch-vehicle-landscape.jpg"
import imageCapsule from "../assets/technology/image-space-capsule-landscape.jpg"
import imageSpaceport from "../assets/technology/image-spaceport-landscape.jpg"

import imageVehicle2 from "../assets/technology/image-launch-vehicle-portrait.jpg"
import imageCapsule2 from "../assets/technology/image-space-capsule-portrait.jpg"
import imageSpaceport2 from "../assets/technology/image-spaceport-portrait.jpg"

const imageMap2 = {
    'image-launch-vehicle-portrait.jpg': imageVehicle2,
    'image-space-capsule-portrait.jpg': imageCapsule2,
    'image-spaceport-portrait.jpg': imageSpaceport2,
    
};
const imageMap = {
    'image-launch-vehicle-landscape.jpg': imageVehicle,
    'image-space-capsule-landscape.jpg': imageCapsule,
    'image-spaceport-landscape.jpg': imageSpaceport,
    
};
const Technology = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState(0);
     // Fetch data from the  JSON file
     useEffect(() => {
    // Fetch data from the JSON file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data.technology))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
    return (
        <main className="text-white  technology">
            <h1>SPACE LAUNCH 101</h1>
            <Tabs>
                <section className="md:flex">
                    <TabList className="flex flex-col font-semibold text-center  uppercase  ">
                    {Array.isArray(data) && data.map((item, index) => (
                        <Tab key={index}
                            className="technology-btn"
                            onClick={() => setValue(index)}
                            style={{
                                backgroundColor: index === value ? "white" : "white",
                                color:"black"
                            }}
                        >
                        {item.name}
                    </Tab>
                    ))}
                </TabList>
                {Array.isArray(data) && data.map((item, index) => (
                    <TabPanel key={index}>
                        <div className='flex flex-col justify-center items-center md:flex-row mt-5 md:mt-0'>                        
                            <div className="flex flex-col text-white md:w-1/2">
                                <h1 className='uppercase text-7xl py-2'>{item.name}</h1>
                                <p>{item.description}</p>                        
                            </div>
                            <div className=''>
                                <img
                                    src={imageMap2[item.images.portrait]}
                                    alt={item.name} 
                                    className="technology-image hidden md:block"                               
                                />
                                <img
                                    src={imageMap[item.images.landscape]}
                                    alt={item.name} 
                                    className="technology-image block md:hidden"                               
                                />
                            </div>
                        </div>
                    </TabPanel>
                ))}
                
            </section>
            </Tabs>
        </main>
    )
}
export default Technology