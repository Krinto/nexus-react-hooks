import React, { useState, useEffect } from 'react'
import { Navbar, Icon, Modal, Box, Content } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import SettingsModal from './SettingsModal'
import { AppSettings } from '../App';
import map from "ramda/src/map";
import useKeyEvent from '../hooks/useKeyEvent';
import './serviceDock.scss';
import logo from '../logo.svg';

type ServiceDockProps = {
  updateUrl(url: string): void;
  appSettings: AppSettings;
  updateSettings(setting: AppSettings): void;
  iframe: HTMLIFrameElement | null;
}

export type ServiceItem = {
  id: number;
  title: string;
  url: string;
  icon: string;
}

const initialItems: ServiceItem[] = [
  {id: 1, title: 'Sonnar', url: 'http://192.168.1.22:8989/', icon: ''},
  {id: 2, title: 'Deluge', url: 'http://192.168.1.21:8112/', icon: ''},
];

const ServiceDock = (props: ServiceDockProps) => {
  const [menuItems, setMenuItems] = useState<ServiceItem[]>(initialItems);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // fetch data
  }, []);

  useKeyEvent((code, event) => {
    console.log(code);
  }, {keys: ['t'], eventType: 'keypress', modifier: 'none', target: document});

  useKeyEvent((code, event) => {
    console.log(code);
  }, {keys: ['t'], eventType: 'keypress', modifier: 'none', target: props.iframe});

  function onSettingsClick(event: React.MouseEvent<Element, MouseEvent>) : void {
    setShowSettings(true);
  }

  if(props.appSettings.dockPosition == 'center') {
    return (
      <Modal active={true} closeOnBlur={true} document={document}>
        <Modal.Background />
        <Modal.Content>
          <Box>
            <Content>
              <p>
                Render dock items here
              </p>
            </Content>
          </Box>
        </Modal.Content>
        <Modal.Close />
      </Modal>
    );
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
          <p>{JSON.stringify(props.appSettings)}</p>
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Segment align="start">
          {map(item => (
            <Navbar.Item key={item.id} onClick={() => props.updateUrl(item.url)}>{item.title}</Navbar.Item>
          ), menuItems)}
        </Navbar.Segment>
        <Navbar.Segment align="end">
          <Navbar.Item onClick={onSettingsClick}>
            <Icon>
              <FontAwesomeIcon icon={faCog} />
            </Icon>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
      <SettingsModal shouldShow={showSettings} updateShow={setShowSettings} appSettings={props.appSettings} updateSettings={props.updateSettings}/>
    </Navbar>
  );
};

export default ServiceDock;
