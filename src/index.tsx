import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import './index.css';
// eslint-disable-next-line import/extensions
import locales from './locales/en.json';
import App from './App';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Stats from './Pages/Stats';
import Page404 from './Pages/Page404';

i18n
  .use(initReactI18next)
  .init({
    resources: locales,
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

ReactDOM
  .createRoot(
    document.getElementById(process.env.ISA_DOM_ROOT_ID),
  )
  .render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="stats" element={<Stats />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  );
