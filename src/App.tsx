import React, { useState } from 'react'
import logo from './logo.svg';
import './App.scss';
import Content from './content/content';
import SideMenu from './sideMenu/sideMenu';

const App = () => {
  const [currentUrl, setCurrentUrl] = React.useState("http://192.168.1.22:8989");
  return (
    <div className="App">
      <SideMenu updateUrl={setCurrentUrl} />
      <Content url={currentUrl} />
    </div>
  );
};

export default App;
