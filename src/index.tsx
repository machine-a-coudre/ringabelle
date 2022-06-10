import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import './index.css';
// eslint-disable-next-line import/extensions
import locales from './locales/en.json';
import App from './App';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Page404 from './pages/Page404';
import Parameters from './pages/Parameters';

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
          <Route path="statistics" element={<Stats />} />
          <Route path="parameters" element={<Parameters />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  );
