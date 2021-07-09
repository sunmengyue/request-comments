import React, { useContext } from 'react';
import RequestContext from '../utils/RequestContext';
import './RequestDetail.css';

const RequestDetail = (props) => {
  const requestsData = useContext(RequestContext);
  const requestId = props.match.params.id;
  const requestObj = requestsData.requests.find(
    (obj) => obj.id === parseInt(requestId),
  );
  const { comments } = requestObj;
  console.log('requestObj:', requestObj);

  return (
    <div className="request__detail">
      <h3>{comments.length} Comments</h3>
      <div className="comments">
        {requestObj.comments.map((comment) => {
          const firstName = comment.user.name.split(' ')[0].toLowerCase();
          return (
            <div className="comment">
              <img
                className="user__avatar"
                src={`/assets/user-images/image-${firstName}.jpg`}
                alt="user image"
              />
              <div className="comment__user">
                <h4>{comment.user.name}</h4>
                <p>@{comment.user.username}</p>
                <p className="comment__info">{comment.content}</p>
              </div>

              <button type="button">Reply</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RequestDetail;
