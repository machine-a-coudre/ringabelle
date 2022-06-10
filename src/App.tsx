import React from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from './components/SideBar';
import ContentContainer from './components/ContentContainer';
import Login from './pages/Login';
import useLogin from './hooks/useLogin';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useLogin();

  const loginHandler = (/* email, password */) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn
    && (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-700">
      <SideBar onLogout={logoutHandler} />
      <ContentContainer content={<Outlet />} />
    </div>
    )}
    </>
  );
};

export default App;
