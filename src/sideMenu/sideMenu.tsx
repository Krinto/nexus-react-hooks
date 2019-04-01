import React, { useState, useEffect } from 'react'
import { Navbar, Icon } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import SettingsModal from './SettingsModal'

import './sideMenu.scss';
import logo from '../logo.svg';

export type SideMenuProps = {
  updateUrl(url: string): void;
}

export type SideMenuItem = {
  id: number;
  title: string;
  url: string;
}

const initialItems: SideMenuItem[] = [
  {id: 1, title: 'Sonnar', url: 'http://192.168.1.22:8989/'},
  {id: 2, title: 'Deluge', url: 'http://192.168.1.21:8112/'},
];

const SideMenu = (props: SideMenuProps) => {
  const [menuItems, setMenuItems] = useState<SideMenuItem[]>(initialItems);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // fetch data
  }, []);

  function onSettingsClick(event: React.MouseEvent<Element, MouseEvent>) : void {
    setShowSettings(true);
  }

  return (
    <Navbar color="primary">
      <Navbar.Brand>
        <Navbar.Item href="#">
          <img
            src={logo}
            alt=""
            role="presentation"
            width="112"
            height="28"
          />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Segment align="start">
          {menuItems.map(item => (
            <Navbar.Item key={item.id} onClick={() => props.updateUrl(item.url)}>{item.title}</Navbar.Item>
          ))}
        </Navbar.Segment>

        <Navbar.Segment align="end">
          <Navbar.Item onClick={onSettingsClick}>
            <Icon>
              <FontAwesomeIcon icon={faCog} />
            </Icon>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
      <SettingsModal shouldShow={showSettings} updateShow={setShowSettings}/>
    </Navbar>
  );
};

export default SideMenu;
