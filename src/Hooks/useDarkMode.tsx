import { useEffect, useState } from 'react';

const CLASS_NAME_DARK = process.env.ISA_CSS_CLASSNAME_DARK;
const LOCALSTORAGE_KEY_THEME = process.env.ISA_LOCALSTORAGE_KEY_THEME;

const useLocalStorage = (key: string, initialValue?: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: string | Function) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage(LOCALSTORAGE_KEY_THEME);
  const isEnabled = enabled;

  useEffect(() => {
    const className = CLASS_NAME_DARK;
    const bodyClass = window.document.body.classList;

    if (isEnabled) {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }
  }, [enabled, isEnabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;
