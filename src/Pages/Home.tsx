import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: '20rem' }}>
      <h1>{t('Home.title')}</h1>
      <p>{t('Home.describe')}</p>
    </main>
  );
}
