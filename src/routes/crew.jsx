import { useState, useEffect } from "react";
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
                <section className="md:px-24">
                    {Array.isArray(data) && data.map((item, index) => (
                    <TabPanel key={index}>
                    <div className='flex flex-col justify-center items-center md:flex-row md:mt-10'>                        
                        <div className="flex flex-col text-white md:w-1/2">
                            <p>{item.role}</p>
                            <h2 className='uppercase text-7xl'>{item.name}</h2>
                            <p>{item.bio}</p>                        
                        </div>
                        <div className=''>
                            <img
                                src={imageMap[item.images.png]}
                                alt={item.name}                                
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