import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className='header__name'>
        <p>Osthir E-learning </p>
      </div>
      <nav className='header__navbar'>
        <a href="/all">All</a>
        <a href="/courses">Courses</a>
        <a href="/other">Others</a>
      </nav>
    </div>
  );
};

export default Header;