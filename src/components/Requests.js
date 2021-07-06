import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Request from './Request';
import './Requests.css';

const Requests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get('./data.json')
      .then((res) => setRequests(res.data.productRequests))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="requests">
      {requests.map((request) => (
        <Request key={request.id} request={request} />
      ))}
    </div>
  );
};

export default Requests;
