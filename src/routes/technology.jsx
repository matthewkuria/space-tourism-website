import { useEffect, useState } from "react";
import "./routes.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import imageHurley from "../assets/crew/image-douglas-hurley.png"
import imageShuttle from "../assets/crew/image-mark-shuttleworth.png"
import imageGlover from "../assets/crew/image-victor-glover.png"
import imageAnsari from "../assets/crew/image-anousheh-ansari.png"

const imageMap = {
    'image-douglas-hurley.png': imageHurley,
    'image-mark-shuttleworth.png': imageShuttle,
    'image-victor-glover.png': imageGlover,
    'image-anousheh-ansari.png': imageAnsari
    
};
const Technology = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState(0);
     // Fetch data from the  JSON file
     useEffect(() => {
    // Fetch data from the JSON file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data.crew))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
    return (
        <main className="text-white  technology">
            <h1>SPACE LAUNCH 101</h1>
            <p className="title text-5xl">LAUNCH VEHICLE</p>
            <section className="">
                {Array.isArray(data) && data.map((item, index) => (
                        <TabPanel key={index}>
                    <div className='flex flex-col justify-center items-center md:flex-row mt-5 md:mt-0'>                        
                        <div className="flex flex-col text-white md:w-1/2">
                            <h1 className="uppercase text-slate-400 text-3xl py-2">{item.role}</h1>
                            <h1 className='uppercase text-7xl py-2'>{item.name}</h1>
                            <p>{item.bio}</p>                        
                        </div>
                        <div className=''>
                            <img
                                src={imageMap[item.images.png]}
                                alt={item.name} 
                                className="crew-image"                               
                            />
                        </div>
                    </div>
                    </TabPanel>
                ))}

            </section>
        </main>
    )
}
export default Technology