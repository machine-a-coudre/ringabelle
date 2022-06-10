import { useEffect, useState } from 'react';

const LOCALSTORAGE_KEY_IS_LOGGED_IN = process.env.ISA_LOCALSTORAGE_KEY_IS_LOGGED_IN;

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

const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage(LOCALSTORAGE_KEY_IS_LOGGED_IN);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem(LOCALSTORAGE_KEY_IS_LOGGED_IN);

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return [isLoggedIn, setIsLoggedIn];
};

export default useLogin;
