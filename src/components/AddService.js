import React, { useState } from 'react';
import axios from 'axios';

const AddService = (props) => {
  const [serviceName, setServiceName] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.isAuth && props.isAdmin) {
      axios.post('http://127.0.0.1:8000/api/service/', {
        name: serviceName,
        price: servicePrice
      })
        .then(res => {
          setMessage('Service added successfully');
        })
        .catch(error => {
          setMessage(error.response.data.message);
        });
    } else {
      setMessage('You must be logged in as an admin to add a service');
    }
  };

  return (
    <div>
      {props.isAuth && props.isAdmin ? (
        <form onSubmit={handleSubmit}>
          <label>
            Service Name:
            <input type="text" value={serviceName} onChange={e => setServiceName(e.target.value)} />
          </label>
          <br />
          <label>
            Service Price:
            <input type="text" value={servicePrice} onChange={e => setServicePrice(e.target.value)}
/>
</label>
<br />
<button type="submit">Add Service</button>
</form>
) : (
<p>You must be logged in as an admin to add a service</p>
)}
{message && <p>{message}</p>}
</div>
);
};

export default AddService;
