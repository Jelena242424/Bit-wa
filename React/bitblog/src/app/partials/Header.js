import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper #e65100 orange darken-4">
          <Link to='/' className="brand-logo center">Bit Blog</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/authors'>Authors</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/post/new'>New</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}