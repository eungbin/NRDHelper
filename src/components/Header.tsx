import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="menu">
      <Link to="/"><div className="menu-item home">NRD Helper</div></Link>
    </div>
  );
};

export default Header;