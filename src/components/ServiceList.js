import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";
import '../App.css';
function ServiceList() {
  const [services, setServices] = useState([])
  useEffect(()=>{
    async function getAllServices(){
      try {
        const services = await axios.get("http://127.0.0.1:8000/api/services/")
        console.log(services.data)
        setServices(services.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllServices()
  }, [])

  return (
    <div className='pt-3 '>
           <h3>Here is the list of available services: </h3>
           <hr/>
      {
      services && services.map((services, i)=>{
         return (
            <div id='nav'  key={i}>
              <Link to='/booking'>{services.name} : {services.price} &#8377;</Link>
            <hr/>
            </div>
         )
       })
     }
     
    </div>
  )
}

export default ServiceList