import React, { useState } from 'react'
import './sideMenu.scss';
import logo from '../logo.svg';

export interface SideMenuProps {
  updateUrl(url: string): void;
}

export interface SideMenuItem {
  title: string;
  url: string;
}

const initialItems: SideMenuItem[] = [
  {title: 'Sonnar', url: 'http://192.168.1.22:8989/'},
  {title: 'Deluge', url: 'http://192.168.1.21:8112/'},
];

const SideMenu = (props: SideMenuProps) => {
  const [menuItems, setMenuItems] = useState<SideMenuItem[]>(initialItems);
  return (
    <div className="side-menu">
      <div className="logo">
          <h1>Nexus</h1>
          <img src={logo} className="app-logo" alt="logo" />
      </div>
      <div className="items-list">
        {menuItems.map((item, i) => (
          <div key={i} className="item" onClick={() => props.updateUrl(item.url)}>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;