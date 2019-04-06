import React, { useState, useRef } from 'react'
import './App.scss';
import { useRoutes } from 'hookrouter';
import NotFound from './notFound';
import ServiceComponent from './ServiceComponent';
import Status from './status/status';
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

const routes = {
  '/': () => <ServiceComponent />,
  '/status': () => <Status />,
};


const App = () => {
  const routeResult = useRoutes(routes);
   return routeResult || <NotFound />;
};

export default App;
