import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const IconSwitchTheme = ({ icon, iconDark }:
  { icon: React.ReactNode, iconDark: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <div
      role="button"
      onClick={handleMode}
      tabIndex={0}
      onKeyUp={() => {}}
    >
      { darkTheme ? iconDark : icon }
    </div>
  );
};

export default IconSwitchTheme;
