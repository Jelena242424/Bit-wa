import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
    return (
      <header>
        <nav>
          <div className="nav-wrapper #e65100 orange darken-4">
            <Link to='/'className="brand-logo center">Bit Blog</Link>
            <ul id="nav-mobile" className="right">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Authors'>Authors</Link></li>
              <li><Link to='/About'>About</Link></li>
              {/* <li><Link to='/posts/new'>Create new post</Link></li> */}
            </ul>
          </div>
        </nav>
      </header>
    )
  }