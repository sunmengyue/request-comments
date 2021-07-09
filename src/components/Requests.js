import React, { useContext } from 'react';
import RequestContext from '../utils/RequestContext';
import Request from './Request';
import './Requests.css';

const Requests = () => {
  const requestsData = useContext(RequestContext);

  return (
    <div className="requests">
      {requestsData.requests.map((request) => (
        <Request key={request.id} request={request} />
      ))}
    </div>
  );
};

export default Requests;
