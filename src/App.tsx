import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './Components/SideBar';
import ContentContainer from './Components/ContentContainer';

const App = () => (
  <div className="flex">
    <SideBar />
    <ContentContainer content={<Outlet />} />
  </div>
);

export default App;
