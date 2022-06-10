import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './Components/SideBar';
import ContentContainer from './Components/ContentContainer';

const App = () => (
  <div className="flex bg-gray-100 dark:bg-gray-700">
    <SideBar />
    <ContentContainer content={<Outlet />} />
  </div>
);

export default App;
