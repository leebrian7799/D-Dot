import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';

const FrontPage = (props) => {
  return (
    <div className="front">
      <div className="banner">
        <h2 className="header1">Get inspired and share your best photos</h2>
        <h3 className='header2'>Find your home among the world's best photographers.</h3>
        <Link className='link-text joinbutton' to="/signup">Join D-Dot</Link>
      </div>
    </div>
  );
};

export default FrontPage;
