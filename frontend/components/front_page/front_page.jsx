import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';

const FrontPage = (props) => {
    return (

      <div class="wrapper">
        <header class="main-head">
          <div></div>
          <NavBarContainer />
          <div className='navbar-text'>
              <p><font size="30d">Get inspired and share your best photos</font></p>
              <p>Find your home among the world's best photographers.</p>
              <Link to="/signup" className="navbar-link MyButton" >Join D-Dot</Link>
          </div>
        </header>
        <nav class="main-nav">
          <ul>
              {/* <li><a href="">Nav 1</a></li>
              // <li><a href="">Nav 2</a></li>
               <li><a href="">Nav 3</a></li> */}
          </ul>
        </nav>
        <article class="content">
            {/*}<h1>Main article area</h1>
          <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p> */}
        </article>
        {/*<aside class="side">Sidebar</aside>*/}
        {/*<div class="ad">Advertising</div>*/}
        {/*<footer class="main-footer">The footer</footer>*/}
      </div>

    );
};

export default FrontPage;
