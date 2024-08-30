import { useState, useEffect } from "react";
import "./routes.css";
const Crew = () => {
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
    return (
        <div className="crew">
            <h1 className="uppercase  text-white text-2xl pt-12 pb-0 pl-20">
                <span className="text-slate-500">02</span>
                Meet your crew
            </h1>

            
       </div>
    )
}
export default Crew