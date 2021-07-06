import React from 'react';
import './Control.css';

const Control = () => {
  return (
    <div className="control">
      <div className="feedback__board">
        <h2>Frontend Mentor</h2>
        <p>Feedback board</p>
      </div>
      <div className="feedback__content">
        <button type="button">All</button>
        <button type="button">UI</button>
        <button type="button">UX</button>
        <button type="button">Enhancement</button>
        <button type="button">Bug</button>
        <button type="button">Feature</button>
      </div>
      <div className="roadmap">
        <div className="roadmap__header roadmap__row">
          <h3>Roadmap</h3>
          <p>View</p>
        </div>
        <div className="roadmap__row">
          <div className="roadmap__cat">
            <span id="planned__dot" className="dot"></span>
            <p>Planned</p>
          </div>
          <p className="roadmap__num">2</p>
        </div>
        <div className="roadmap__row">
          <div className="roadmap__cat">
            <span id="progress__dot" className="dot"></span>
            <p>In-Progress</p>
          </div>
          <p className="roadmap__num">3</p>
        </div>
        <div className="roadmap__row">
          <div className="roadmap__cat">
            <span id="live__dot" className="dot"></span>
            <p>Live</p>
          </div>
          <p className="roadmap__num">1</p>
        </div>
      </div>
    </div>
  );
};

export default Control;
