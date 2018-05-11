import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';

const FrontPage = (props) => {
    return (

      <div className="wrapper">
        <header className="main-head">
          <div></div>
          <NavBarContainer />
            <div className='navbar-text'>
              <p><font size="30d">Get inspired and share your best photos</font></p>
              <p>Find your home among the world's best photographers.</p>
              <Link to="/signup" className="navbar-link MyButton" >Join D-Dot</Link>
            </div>
          <br/>
        </header>
        <nav className="main-nav">
          <ul>
              {/* <li><a href="">Nav 1</a></li>
              // <li><a href="">Nav 2</a></li>
               <li><a href="">Nav 3</a></li> */}
          </ul>
        </nav>
        <article className="content">
            {/*}<h1>Main article area</h1>
          <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p> */}
        </article>
        {/*<aside className="side">Sidebar</aside>*/}
        {/*<div className="ad">Advertising</div>*/}
        {/*<footer className="main-footer">The footer</footer>*/}
      </div>

    );
};

export default FrontPage;
