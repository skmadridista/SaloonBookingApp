import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [services, setServices] = useState([])
  useEffect(()=>{
    async function getAllStudent(){
      try {
        const services = await axios.get("http://127.0.0.1:8000/api/services/")
        console.log(services.data)
        setServices(services.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllStudent()
  }, [])
  return (
    <div className="App">
     <h1>Connect React JS to Django</h1>
     {
       services.map((services, i)=>{
         return (
           <h2 key={i}>{services.name} {services.price}</h2>
         )
       })
     }
    </div>
  );
}

export default App;