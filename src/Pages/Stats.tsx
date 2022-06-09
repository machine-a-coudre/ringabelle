import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: '20rem' }}>
      <h1>{t('Stats.title')}</h1>
      <p>{t('Stats.describe')}</p>
    </main>
  );
}
