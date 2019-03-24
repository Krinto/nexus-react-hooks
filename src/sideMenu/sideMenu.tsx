import React, { useState } from 'react'
import './sideMenu.scss';
import logo from '../logo.svg';

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="logo">
          <h1>Nexus</h1>
          <img src={logo} className="app-logo" alt="logo" />
      </div>
      <div className="items-list">
          <div className="item">
              <h3>Item 1</h3>
          </div>
          <div className="item">
              <h3>Item 2</h3>
          </div>
          <div className="item">
              <h3>Item 3</h3>
          </div>
      </div>
    </div>
  );
};

export default SideMenu;