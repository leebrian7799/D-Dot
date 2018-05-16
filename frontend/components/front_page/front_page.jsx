import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';

const FrontPage = (props) => {
    return (
      <div className="wrapper">
        <header className="main-head">
          <div></div>
            <div className='navbar-text'>
              <br/><br/><br/><br/><br/><br/>
              <p><font size="30d">Get inspired and share your best photos</font></p>
              <p>Find your home among the world's best photographers.</p>
              <Link to="/signup" className="navbar-link MyButton" >Join D-Dot</Link>
            </div>
          <br/>
        </header>
      </div>

    );
};

export default FrontPage;
