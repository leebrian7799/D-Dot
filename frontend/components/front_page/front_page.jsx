import React from 'react';
import { Link } from 'react-router-dom';

const FrontPage = (props) => {
    return (
      <div id='front-page'>
        <div className='front-page-image'>
          <div className='front-page-image-text'>
            <p fontSize="30">Get inspired and share your best photos</p>
            <p>Find your home among the world's best photographers.</p>
            <Link to='/signup' className='front-page-signup-button'  >Join D-Dot</Link>
          </div>
        </div>
      </div>
    );
};

export default FrontPage;
