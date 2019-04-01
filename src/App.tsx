import React, { useState } from 'react'
import './App.scss';
import IFrame from './iframe/iframe';
import SideMenu from './sideMenu/sideMenu';
import "rbx/index.css";

const App = () => {
  const [currentUrl, setCurrentUrl] = React.useState("http://192.168.1.22:8989");
  return (
    <div className="App">
      <SideMenu updateUrl={setCurrentUrl} />
      <IFrame url={currentUrl} />
    </div>
  );
};

export default App;
