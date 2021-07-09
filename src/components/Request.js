import React from 'react';
import './Request.css';
import { useHistory } from 'react-router-dom';

const Request = ({ request }) => {
  const history = useHistory();

  return (
    <div
      className="request"
      onClick={() => {
        history.push(`/requests/${request.id}`);
      }}
    >
      <div className="request__main">
        <div className="upvote">
          <i className="fas fa-angle-up"></i>
          {request.upvotes}
        </div>
        <div className="request__info">
          <h4 className="request__title">{request.title}</h4>
          <div className="request__description">{request.description}</div>
          <button type="button" className="request__enhancement">
            {request.category}
          </button>
        </div>
      </div>
      <div className="comments__num">
        <img src="./talking-bubble.png" alt="talking-bubble" />
        <div className="num">
          {request.comments ? request.comments.length : 0}
        </div>
      </div>
    </div>
  );
};

export default Request;
