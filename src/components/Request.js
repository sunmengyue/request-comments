import React from 'react';
import './Request.css';

const Request = ({ request }) => {
  return (
    <div className="request">
      <div className="upvote">
        <i className="fas fa-angle-up"></i>
        {request.upvotes}
      </div>
      <div className="request_info">
        <div className="request__title">{request.title}</div>
        <div className="request__descrption">{request.description}</div>
        <div></div>
      </div>
      <div className="comments"></div>
    </div>
  );
};

export default Request;
