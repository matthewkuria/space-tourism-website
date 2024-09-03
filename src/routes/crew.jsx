import { useState, useEffect } from "react";
import "./routes.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import imageHurley from "../assets/crew/image-douglas-hurley.png"
import imageShuttle from "../assets/crew/image-mark-shuttleworth.png"
import imageGlover from "../assets/crew/image-victor-glover.png"
import imageAnsari from "../assets/crew/image-anousheh-ansari.png"
// for mobile
import imageHurley2 from "../assets/crew/image-douglas-hurley.webp"
import imageShuttle2 from "../assets/crew/image-mark-shuttleworth.webp"
import imageGlover2 from "../assets/crew/image-victor-glover.webp"
import imageAnsari2 from "../assets/crew/image-anousheh-ansari.webp"

const imageMap2 = {
    'image-douglas-hurley.webp': imageHurley2,
    'image-mark-shuttleworth.webp': imageShuttle2,
    'image-victor-glover.webp': imageGlover2,
    'image-anousheh-ansari.webp': imageAnsari2
    
};

// For desktop
const imageMap = {
    'image-douglas-hurley.png': imageHurley,
    'image-mark-shuttleworth.png': imageShuttle,
    'image-victor-glover.png': imageGlover,
    'image-anousheh-ansari.png': imageAnsari
    
};

const Crew = () => {
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
        <div className="crew">
            <h1 className="uppercase  text-white text-2xl pt-12 pb-0 pl-20">
                <span className="text-slate-500">02</span>
                Meet your crew
            </h1>
            <Tabs>
                <section className="p-0 md:px-24">
                    {Array.isArray(data) && data.map((item, index) => (
                    <TabPanel key={index}>
                    <div className='flex flex-col-reverse justify-center items-center md:flex-row mt-5 md:mt-0'>                        
                        <div className="flex flex-col text-white md:w-1/2">
                            <h1 className="uppercase text-slate-400 text-3xl py-2">{item.role}</h1>
                            <h1 className='uppercase text-7xl py-2'>{item.name}</h1>
                            <p>{item.bio}</p>                        
                        </div>
                        <div className='flex'>
                            <img
                                src={imageMap[item.images.png]}
                                alt={item.name} 
                                className="crew-image hidden md:block"                               
                                />
                                <img
                                src={imageMap2[item.images.webp]}
                                alt={item.name} 
                                className="crew-image block md:hidden"                               
                            />
                        </div>
                    </div>
                    </TabPanel>
                        ))}
                        <TabList className="flex justify-start  uppercase md:my-6 ">
                        {Array.isArray(data) && data.map((item, index) => (
                            <Tab key={index}
                                className="crew-btn"
                                onClick={() => setValue(index)}
                                style={{
                                backgroundColor: index === value ? "white" : "#979797",
                                }}
                            >
                            
                        </Tab>
                        ))}
                    </TabList>
                </section>
            </Tabs>

            
       </div>
    )
}
export default Crew