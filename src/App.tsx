import React, { useState, useRef } from 'react'
import './App.scss';
import IFrame from './iframe/iframe';
import ServiceDock from './serviceDock/serviceDock';
import "rbx/index.css";

export type AppSettings = {
  dockPosition: DockPosition;
  hideDockText: boolean;
}

export type DockPosition = 'top' | 'right' | 'bottom' | 'left' | 'center';

const initialSettings: AppSettings = {
  dockPosition: 'top',
  hideDockText: false
};

const App = () => {
  const [currentUrl, setCurrentUrl] = React.useState("http://192.168.1.22:8989");
  const [appSettings, setAppSettings] = React.useState(initialSettings);
  const [iframe, setIframe] = React.useState<HTMLIFrameElement | null>(null);
  return (
    <div className="App">
      <ServiceDock updateUrl={setCurrentUrl} appSettings={appSettings} updateSettings={setAppSettings} iframe={iframe}  />
      <IFrame url={currentUrl} appSettings={appSettings} setIframe={setIframe} />
    </div>
  );
};

export default App;
