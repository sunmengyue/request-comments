import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__info">
        <img src="./bulb.png" alt="bulb" />
        <p>6 suggestions</p>
        <div className="sort">
          <span>Sort by: </span>
          Most upvotes
        </div>
      </div>

      <button>+ Add Feedback</button>
    </div>
  );
};

export default Header;
